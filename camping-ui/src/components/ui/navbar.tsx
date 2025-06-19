import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <Link href="/"><span className="text-xl font-bold">CampingAlert</span></Link>
        <div className="space-x-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/subscribe">Subscribe</Link>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}