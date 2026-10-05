import { useState } from 'react'
import Button from '../components/Button.jsx'

const formatRupees = (amount) => {
  if (amount >= 10_000_000) return `₹${(amount / 10_000_000).toFixed(1)}Cr`
  if (amount >= 100_000) return `₹${(amount / 100_000).toFixed(1)}L`
  return `₹${Math.round(amount).toLocaleString('en-IN')}`
}

export default function Hero() {
  const [monthly, setMonthly] = useState(10000)
  const [years, setYears] = useState(10)
  const annualReturn = 0.12
  const months = years * 12
  const invested = monthly * months
  const futureValue =
    monthly *
    ((Math.pow(1 + annualReturn / 12, months) - 1) / (annualReturn / 12)) *
    (1 + annualReturn / 12)
  const growth = futureValue - invested

  const chartPoints = Array.from({ length: 7 }, (_, index) => {
    const elapsed = (years * index) / 6
    const count = Math.round(elapsed * 12)
    const value = count === 0 ? 0 :
      monthly *
      ((Math.pow(1 + annualReturn / 12, count) - 1) /
        (annualReturn / 12)) *
      (1 + annualReturn / 12)
    return `${72 + index * 74},${220 - (value / Math.max(futureValue, 1)) * 150}`
  }).join(' ')

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8f7f2]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="animate-[rise-in_700ms_ease-out_both]">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#54705e]">
            <span className="h-px w-8 bg-[#9eaa84]" />
            Tools for everyday financial decisions
          </p>
          <h1
            id="hero-heading"
            className="max-w-[650px] font-serif text-[clamp(3.25rem,6.25vw,5.75rem)] leading-[0.98] tracking-[-0.065em] text-[#202821]"
          >
            Make sense
            <br />
            of your <span className="text-[#46634d]">money.</span>
          </h1>
          <p className="mt-7 max-w-[490px] text-base leading-7 text-[#666a62] sm:text-lg sm:leading-8">
            Explore questions about saving, investing, borrowing and planning.
            Compare options and see how the numbers change.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#scenario">Adjust the example</Button>
            <Button href="#method" variant="secondary">
              How it works
            </Button>
          </div>
        </div>

        <div
          id="scenario"
          className="relative w-full animate-[rise-in_850ms_120ms_ease-out_both] scroll-mt-28"
        >
          <div className="overflow-hidden rounded-2xl bg-[#19372e] text-[#f5f3eb] shadow-[0_18px_45px_-38px_rgba(25,55,46,0.65)]">
            <div className="px-6 pb-5 pt-7 sm:px-9 sm:pt-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-wide text-[#bdc9b9]">
                    SIP estimate
                  </p>
                  <h2 className="mt-2 font-serif text-[1.65rem] tracking-[-0.04em] sm:text-[1.9rem]">
                    What could it
                    <br className="hidden sm:block" /> grow to?
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-white/10 py-5 sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b7c3b2]">
                    Potential value
                  </p>
                  <p className="mt-1 font-serif text-[clamp(1.3rem,6.5vw,2rem)] tracking-[-0.04em] sm:text-3xl">
                    {formatRupees(futureValue)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b7c3b2]">
                    Amount invested
                  </p>
                  <p className="mt-2 text-lg tracking-[-0.03em] sm:text-xl">
                    {formatRupees(invested)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#b7c3b2]">
                    Potential growth
                  </p>
                  <p className="mt-2 text-lg tracking-[-0.03em] sm:text-xl">
                    {formatRupees(growth)}
                  </p>
                </div>
              </div>

              <div className="relative mt-5 h-[174px]">
                <div className="absolute inset-0 flex flex-col justify-between" aria-hidden="true">
                  {[0, 1, 2, 3].map((line) => (
                    <span key={line} className="border-t border-dashed border-white/10" />
                  ))}
                </div>
                <svg
                  viewBox="0 0 516 230"
                  preserveAspectRatio="none"
                  className="relative h-full w-full overflow-visible"
                  role="img"
                  aria-label={`Illustrative investment growth over ${years} years`}
                >
                  <defs>
                    <linearGradient id="growth-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c9d994" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#c9d994" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points={`72,220 ${chartPoints} 516,220`}
                    fill="url(#growth-fill)"
                  />
                  <polyline
                    points={chartPoints}
                    fill="none"
                    stroke="#c9d994"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="516" cy={220 - 150} r="4" fill="#dbe7b0" />
                </svg>
                <div className="absolute bottom-[-2px] left-0 right-0 flex justify-between text-[10px] text-[#b7c3b2]">
                  <span>Today</span>
                  <span>Year {years}</span>
                </div>
              </div>

              <div className="mt-8 grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-2 sm:gap-7">
                <label className="block">
                  <span className="flex items-center justify-between text-xs text-[#c2cdbd]">
                    Monthly investment
                    <span className="font-medium text-white">{formatRupees(monthly)}</span>
                  </span>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={monthly}
                    onChange={(event) => setMonthly(Number(event.target.value))}
                    aria-label="Monthly investment amount"
                    className="mt-3 h-8 w-full cursor-pointer accent-[#c9d994]"
                  />
                  <span className="mt-1 flex justify-between text-[10px] text-[#93a598]">
                    <span>₹1,000</span>
                    <span>₹50,000</span>
                  </span>
                </label>
                <label className="block">
                  <span className="flex items-center justify-between text-xs text-[#c2cdbd]">
                    Time period
                    <span className="font-medium text-white">{years} years</span>
                  </span>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={years}
                    onChange={(event) => setYears(Number(event.target.value))}
                    aria-label="Investment time period in years"
                    className="mt-3 h-8 w-full cursor-pointer accent-[#c9d994]"
                  />
                  <span className="mt-1 flex justify-between text-[10px] text-[#93a598]">
                    <span>1 year</span>
                    <span>30 years</span>
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#142e27] px-6 py-4 text-[10px] leading-4 text-[#aebdb0] sm:px-9">
              <span>Estimate at 12% annual return, compounded monthly from the start of each month.</span>
              <span>Returns are not guaranteed.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
