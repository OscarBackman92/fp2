import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="bg-blue-600 p-4">
        <ul className="flex justify-around">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/workouts" className="text-white">Workouts</Link></li>
          <li><Link href="/progress" className="text-white">Progress</Link></li>
          <li><Link href="/profile" className="text-white">Profile</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  