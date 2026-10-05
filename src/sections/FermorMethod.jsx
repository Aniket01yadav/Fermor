import { methodSteps } from '../data/homepage.js'

export default function FermorMethod() {
  return (
    <section
      id="method"
      className="scroll-mt-20 bg-[#18372e] py-20 text-[#f7f5ed] sm:py-24 lg:py-28"
      aria-labelledby="method-heading"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-12">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c1cead]">
            The Fermor method
          </p>
          <h2
            id="method-heading"
            className="mt-5 max-w-[470px] font-serif text-4xl leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-[3.7rem]"
          >
            Four steps from question to decision.
          </h2>
          <p className="mt-6 max-w-[390px] text-sm leading-7 text-[#c2ccc1] sm:text-base">
            Understand the numbers, compare options, choose a next step, and
            keep your plan in view as things change.
          </p>
          <a
            href="#scenario"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#8fa485] pb-2 text-sm text-[#e4e9d5] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start with a question <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ol className="border-t border-white/20">
          {methodSteps.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[48px_1fr] gap-4 border-b border-white/20 py-7 sm:grid-cols-[72px_1fr] sm:gap-7 sm:py-8"
            >
              <span className="pt-1 text-xs font-medium tracking-[0.12em] text-[#b8c6a3]">
                {step.number}
              </span>
              <div className="grid gap-2 sm:grid-cols-[0.7fr_1fr] sm:items-baseline">
                <h3 className="font-serif text-3xl tracking-[-0.04em] sm:text-[2.15rem]">
                  {step.title}
                </h3>
                <p className="max-w-[340px] text-sm leading-6 text-[#c0cbc0]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
