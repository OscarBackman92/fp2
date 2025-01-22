const Navbar = () => {
    return (
      <nav className="bg-blue-600 p-4">
        <ul className="flex justify-around">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/workouts" className="text-white">Workouts</a></li>
          <li><a href="/progress" className="text-white">Progress</a></li>
          <li><a href="/profile" className="text-white">Profile</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  