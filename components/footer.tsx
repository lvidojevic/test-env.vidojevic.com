import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/cv">CV</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <p>© {new Date().getFullYear()} Lazar Vidojevic</p>
      </div>
    </footer>
  );
}
