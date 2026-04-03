export function FounderSection() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline text-4xl font-bold mb-8">Who&apos;s Behind Alarynt</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              I started Alarynt after watching dozens of brilliant founders make major decisions based on &ldquo;gut
              feeling&rdquo; simply because their data was too painful to access.
            </p>
            <p>
              Most consultants want to sell you a 6-month roadmap. We want to solve your biggest headache in 2 weeks.
              I&apos;m a human first, a data nerd second, and I&apos;m personally involved in every project we take on.
            </p>
            <p className="font-headline text-on-surface text-xl italic">— Elias Thorne, Founder</p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-highest shadow-2xl">
            <img
              alt="Elias Thorne, Founder of Alarynt"
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArWqEOnzNWCUgBNdKCWY4UpqLec6DqMiq7qoIPofm95LDMuS-Xe7DvllI7ph39C8XkOfslzeZ-je0edf9AQlaRpWsS1RFZ-0nPtBlTvMYAAS7QIVGRpyMo1Ev_D7HNePr4DWkSYhMtWYlPO-LR6iORQ2HPTnqD4Yvr9MRKEWX0mTi88n5SdbnF1q5XvZRIYiREPsvwywt6fDaAlNm2uL0Dz-E-X4vvBT0XoJCzlXfj3LbrlMYY4M0rh0jantPuXIcWgCb9IozAQFxN"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 bg-primary-container text-white rounded-xl shadow-xl hidden lg:block">
            <p className="font-headline text-2xl font-bold italic">&ldquo;We fix the foundation.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
