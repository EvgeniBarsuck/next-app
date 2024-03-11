import Link from 'next/link';
import './header.css';

export default function Header() {
  return (
    <div id="home" className="w-full flex flex-row justify-center pb-10">
      <div className="flex flex-row justify-between width-full h-20 z-10 relative max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">Bootslander</span>
        </div>
        <ul className="flex flex-row justify-between items-center text-lg header-items">
          <li><Link href="#home">Home</Link></li>
          <li><Link href='#about'>About</Link></li>
          <li><Link href='#features'>Features</Link></li>
          <li>Gallery</li>
          <li>Team</li>
          <li>Pricing</li>
          <li>Drop Down</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
