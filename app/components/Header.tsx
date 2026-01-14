import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="text-xl font-bold">
        Yehor
      </div>
      <nav className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <button className="rounded px-4 py-2 bg-black text-white">
        Contact
      </button>
    </header>
  );
}