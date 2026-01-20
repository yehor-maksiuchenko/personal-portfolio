export default function HomePage() {
  return (
    <main>
      <section 
      className="bg-gradient-to-r from-primary to-complementary text-background">
        <div
        className="max-w-7xl mx-auto px-4 sm:px-6
        lg:px-8 py-20 flex flex-col-reverse
        md:flex-row items-center">
          <div className="w-full md:w-1/2
          text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl
            font-bold leading-tight">Yehor M. — The Software Engineer <span className="text-accent underline">You Need</span>*
            </h1>
            <p className="text-lg italic sm:text-xl text-">
              *According to independent family analysts
            </p>

            <div className="flex justify-center
            md:justify-start gap-4">
              <a href="#" className="
              px-6 py-3 text-lg font-bold text-foreground not-italic
              border-3 rounded-none no-underline
              bg-secondary-complementary
              hover:italic hover:border-foreground
              hover:translate-x-[1px] hover:underline
              transition-all duration-200 ease-out">
                See My Credentials
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}