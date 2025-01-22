import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CurrentUserContextType {
  currentUser: any; // Replace `any` with your user type or interface
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>; // SetState type for managing the user state
  login: (user: any) => void; // Method to login
  logout: () => void; // Method to logout
}

const CurrentUserContext = createContext<CurrentUserContextType | undefined>(undefined);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null); // `null` means no user is logged in

  const login = (user: any) => setCurrentUser(user);
  const logout = () => setCurrentUser(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, login, logout }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }
  return context;
};
