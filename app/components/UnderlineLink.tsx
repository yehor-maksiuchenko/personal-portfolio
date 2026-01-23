import Link from "next/link";

interface UnderlineLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export default function UnderlineLink({
  children,
  href = "#",
  onClick
}: UnderlineLinkProps) {
  return (
    <section className="flex items-center justify-center cursor-pointer">
      <span className={`relative after:absolute after:bottom-0 after:left-0 after:h-1
                after:w-0 hover:after:w-full after:bg-foreground 
                after:transition-all after:duration-300
                flex items-center gap-1`}>
        <Link href={href} onClick={onClick}>{children}</Link>
      </span>
    </section>
  );
}