'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const router = useRouter();
  
  // Function to determine active link
  const getLinkClass = (path: string) => {
    return router.pathname === path ? 'text-blue-500 font-bold' : 'text-white';
  };

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-around">
        {isAuthenticated ? (
          <>
            <li><Link href="/" className={getLinkClass('/')}>Home</Link></li>
            <li><Link href="/workouts" className={getLinkClass('/workouts')}>Workouts</Link></li>
            <li><Link href="/progress" className={getLinkClass('/progress')}>Progress</Link></li>
            <li><Link href="/profile" className={getLinkClass('/profile')}>Profile</Link></li>
          </>
        ) : (
          <>
            <li><Link href="/" className={getLinkClass('/')}>Home</Link></li>
            <li><Link href="/about" className={getLinkClass('/about')}>About</Link></li>
            <li><Link href="/signin" className={getLinkClass('/signin')}>Sign In</Link></li>
            <li><Link href="/signup" className={getLinkClass('/signup')}>Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
