import InsightCard from '../components/InsightCard.jsx'
import { insights } from '../data/insights.js'

export default function Insights() {
  return (
    <section
      id="insights"
      className="scroll-mt-20 bg-[#f8f7f2] py-20 sm:py-24 lg:py-28"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#66745e]">
              Notes on money
            </p>
            <h2
              id="insights-heading"
              className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.05em] text-[#202821] sm:text-5xl lg:text-[3.5rem]"
            >
              Notes on everyday money questions.
            </h2>
          </div>
          <p className="max-w-[340px] text-sm leading-6 text-[#696d65]">
            Short reads on investing, borrowing and planning.
          </p>
        </div>

        <div className="mt-11 grid gap-x-12 gap-y-8 lg:grid-cols-[1.2fr_0.8fr]">
          {insights.map((insight) => (
            <InsightCard key={insight.number} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  )
}
