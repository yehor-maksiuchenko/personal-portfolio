import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex items-center 
    justify-between px-6 py-4 border-b-2">
      <Link className="text-xl font-bold" href="../home">
        Yehor
      </Link>
      <nav className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <Link href="/contact-me">Contact</Link>
    </header>
  );
}