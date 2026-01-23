"use client"

import { useEffect, useState } from "react";

import UnderlineLink from "./UnderlineLink";
import MenuToggleButton from "./MenuToggleButton";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!showMenu) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMenu(false);
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <div 
        className={`
          fixed bottom-4 right-4 z-50 sm:hidden
          transform transition-transform duration-300 ease-in-out
          ${showMenu ? "-translate-x-[calc(100vw-5rem)]" : "translate-x-0"}
        `}
      >
        <MenuToggleButton
          isOpen={showMenu}
          onToggle={() => setShowMenu(!showMenu)}
        />
      </div>

      <header 
        className={`
          fixed top-0 right-0 z-40
          flex flex-col h-full
          w-[calc(100vw-4.5rem)]
          border-l-2 
          bg-highlight-bg
          border-foreground
          
          ${showMenu ? 'translate-x-0' : 'translate-x-full'}
          transform transition-transform duration-300 ease-in-out
          
          sm:static sm:translate-x-0 sm:h-auto sm:w-auto
          sm:flex sm:items-center sm:justify-between
          sm:border-b-2 sm:border-l-0
        `}
      >
        <nav className="
            p-4 flex flex-col gap-10 mt-auto
            sm:flex-row sm:p-2
            text-4xl sm:text-3xl
            font-bold">
          <UnderlineLink href="/" onClick={() => setShowMenu(false)}>Home</UnderlineLink>
          <UnderlineLink href="/contact-me" onClick={() => setShowMenu(false)}>Contact Me</UnderlineLink>
        </nav>
      </header>
      
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-30 sm:hidden"
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
    
  );
}

export default Header;