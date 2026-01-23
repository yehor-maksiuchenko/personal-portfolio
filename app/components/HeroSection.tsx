import AccentButton from "../components/AccentButton";

export default function HeroSection() {
    return (
        <section 
      className="bg-highlight-bg
      border-b-2 text-foreground">
        <div
        className="max-w-7xl mx-auto px-4 sm:px-6
        lg:px-8 py-20 flex flex-col-reverse
        md:flex-row items-center">
          <div className="w-full md:w-1/2
          text-center md:text-left space-y-6">
            <h1
            className="text-4xl sm:text-5xl
            font-bold leading-tight
            -motion-translate-x-in-25
            motion-opacity-in-0
            motion-blur-in-md
            motion-duration-1500/translate
            motion-duration-1500/opacity
            motion-duration-1500/blur">
              <span>I — The Software Engineer{" "}</span>
              <span className="underline inline-block
              motion-preset-pulse-sm motion-duration-300
              motion-delay-1000 motion-loop-twice">
                You Need
              </span>*
            </h1>
            <p className="text-lg italic sm:text-xl
            motion-translate-x-in-25
            motion-opacity-in-0
            motion-blur-sm
            motion-delay-700/translate
            motion-delay-700/opacity
            motion-delay-700/blur">
              *According to independent family analysts
            </p>
            <div className="flex justify-center
            md:justify-start gap-4">
              <AccentButton text="See Credentials" href="#"></AccentButton>
              <AccentButton text="See My Projects" href="/projects"></AccentButton>
            </div>
          </div>
        </div>
      </section>
    )
}