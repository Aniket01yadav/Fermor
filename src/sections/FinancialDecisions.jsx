import { financialDecisions } from '../data/homepage.js'

export default function FinancialDecisions() {
  return (
    <section
      id="decisions"
      className="scroll-mt-20 bg-[#f8f7f2] py-20 sm:py-24 lg:py-28"
      aria-labelledby="decisions-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#66745e]">
              The questions that matter
            </p>
            <h2
              id="decisions-heading"
              className="mt-5 max-w-[740px] font-serif text-4xl leading-[1.08] tracking-[-0.05em] text-[#202821] sm:text-5xl lg:text-[3.6rem]"
            >
              Every financial decision has a number behind it.
            </h2>
          </div>
          <p className="max-w-[300px] pb-1 text-sm leading-6 text-[#696d65]">
            Explore a question, then compare the numbers behind it.
          </p>
        </div>

        <div className="mt-12 grid gap-10 border-t border-[#dfddd3] pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {financialDecisions.slice(0, 1).map((decision) => (
            <article key={decision.number} className="relative flex min-h-[360px] flex-col overflow-hidden bg-[#e9ece2] p-6 sm:min-h-[410px] sm:p-10">
              <div className="relative flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#74806d]">Decision {decision.number}</span>
                <span className="font-serif text-3xl text-[#53705a]" aria-hidden="true">{decision.marker}</span>
              </div>
              <div className="relative my-auto max-w-[540px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#74806d]">{decision.category}</p>
                <h3 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.05em] text-[#202821] sm:text-5xl">{decision.question}</h3>
                <p className="mt-4 max-w-[440px] text-sm leading-6 text-[#626b5f]">{decision.detail}</p>
              </div>
            </article>
          ))}
          <div className="grid content-center gap-x-8 sm:grid-cols-2 lg:grid-cols-1">
            {financialDecisions.slice(1).map((decision, index) => (
              <article key={decision.number} className={`grid grid-cols-[42px_1fr] gap-x-4 border-b border-[#dfddd3] py-5 sm:grid-cols-[50px_1fr] lg:py-6 ${index === 0 ? 'border-t sm:border-t-0 lg:border-t' : ''}`}>
                <span className="pt-1 text-xs font-medium tracking-[0.12em] text-[#87907d]">{decision.number}</span>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#78806f]">{decision.category}</p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-[1.35rem] leading-tight tracking-[-0.035em] text-[#202821]">{decision.question}</h3>
                      <p className="mt-1.5 max-w-[420px] text-sm leading-5 text-[#74776f]">{decision.detail}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
