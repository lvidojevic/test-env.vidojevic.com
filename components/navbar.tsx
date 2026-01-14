import Link from "next/link";
import { Home, Briefcase, Folder, FileText, User, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        
        <Link href="/" className="text-xl font-bold">
          LV
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="flex items-center gap-1"><Home size={16} />Home</Link>
          <Link href="/services"><Briefcase size={16} />Services</Link>
          <Link href="/portfolio"><Folder size={16} />Portfolio</Link>
          <Link href="/cv"><FileText size={16} />CV</Link>
          <Link href="/about"><User size={16} />About</Link>
          <Link href="/contact"><Mail size={16} />Contact</Link>
        </nav>

      </div>
    </header>
  );
}
