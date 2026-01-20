type AccentButtonProps = {
    text: string;
    href: string;
}

export default function AccentButton({ text, href } : AccentButtonProps) {
    return(
        <div className="flex justify-center
            md:justify-start gap-4">
              <a href={href} className="
              px-6 py-3 text-lg font-bold
               text-second-accent not-italic
              border-3 border-second-accent
              rounded-none no-underline bg-accent/60 

              motion-scale-in-50
              motion-delay-50/scale
              motion-duration-700/scale

              -motion-translate-x-in-25
              motion-translate-y-in-50
              motion-duration-500/translate

              motion-opacity-in-0
              motion-duration-700/opacity
              motion-blur-in-md
              motion-duration-700/blur

              hover:bg-accent/90
              hover:translate-x-[1px] hover:underline
              hover:shadow-[6px_6px_0_0_currentColor]

              active:bg-accent-hover
              active:translate-x-0 active:translate-y-0
              active:shadow-[6px_6px_0_0_currentColor,inset_2px_2px_0_0_currentColor]

              transition-all duration-200 ease-out">
                {text}
              </a>
        </div>
    );
}