"use client";

import { IoMdClose, IoMdMenu } from "react-icons/io";

interface MenuToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuToggleButton({
  isOpen,
  onToggle,
}: MenuToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="p-1 bg-highlight-bg
                  cursor-pointer
                  border-3 border-foreground
                  shadow-[3px_3px_0_0_transparent]

                  hover:bg-highlight-bg-hover
                  hover:shadow-[3px_3px_0_0_currentColor]

                  active:bg-highlight-bg-hover
                  active:translate-x-0 active:translate-y-0
                  active:shadow-[3px_3px_0_0_currentColor,inset_1px_1px_0_0_currentColor]

                  transition-all duration-200 ease-out"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <IoMdClose className="text-5xl" />
      ) : (
        <IoMdMenu className="text-5xl" />
      )}
    </button>
  );
}