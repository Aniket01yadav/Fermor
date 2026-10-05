const currency = (value) =>
  `₹${(Math.round(value / 1000) * 1000).toLocaleString('en-IN')}`

const monthlyInvestment = 10000
const years = 10
const annualReturn = 0.12
const monthlyRate = annualReturn / 12
const months = years * 12
const invested = monthlyInvestment * months
const potentialValue =
  monthlyInvestment *
  ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
  (1 + monthlyRate)
const growth = potentialValue - invested

const chartSeries = Array.from({ length: 11 }, (_, year) => {
  const monthCount = year * 12
  const value =
      monthCount === 0
        ? 0
        : monthlyInvestment *
          ((Math.pow(1 + monthlyRate, monthCount) - 1) / monthlyRate) *
          (1 + monthlyRate)
  return {
    year,
    invested: monthCount * monthlyInvestment,
    value,
  }
})

const plotX = (year) => 52 + (year / 10) * 500
const plotY = (value) => 280 - (value / potentialValue) * 225
const valuePoints = chartSeries
  .map((point) => `${plotX(point.year)},${plotY(point.value)}`)
  .join(' ')
const investedPoints = chartSeries
  .map((point) => `${plotX(point.year)},${plotY(point.invested)}`)
  .join(' ')

export default function SeeTheMath() {
  return (
    <section
      id="see-math"
      className="scroll-mt-20 bg-[#eeede5] py-20 sm:py-24 lg:py-28"
      aria-labelledby="math-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#66745e]">
              See the math
            </p>
            <h2
              id="math-heading"
              className="mt-5 max-w-[520px] font-serif text-4xl leading-[1.08] tracking-[-0.05em] text-[#202821] sm:text-5xl lg:text-[3.55rem]"
            >
              Don’t just get the answer. Understand the math.
            </h2>
            <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#696d65] sm:text-base">
              A result is more useful when you can see where it comes from.
              Here’s an illustrative monthly investment example with
              beginning-of-month contributions. Values are rounded to the
              nearest thousand.
            </p>
          </div>
          <div className="border-l border-[#c9c9bb] pl-5 sm:pl-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7a7d73]">
              How the estimate is calculated
            </p>
            <p className="mt-4 break-words font-mono text-xs leading-6 text-[#26372c] sm:text-sm">
              FV = PMT × [((1 + r)<sup>{months}</sup> − 1) ÷ r] × (1 + r)
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.08em] text-[#777a72]">
              <span>PMT <b className="font-medium text-[#26372c]">₹10,000 / month</b></span>
              <span>r <b className="font-medium text-[#26372c]">{(monthlyRate * 100).toFixed(0)}% / month</b></span>
              <span>n <b className="font-medium text-[#26372c]">{months} months</b></span>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#777a72]">
              At the start of each month, ₹10,000 is added. The monthly rate is
              12% ÷ 12. The estimate is rounded to the nearest thousand.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#26372c]">
              {currency(invested)} invested + {currency(growth)} potential growth
              = <span className="font-medium text-[#45614b]">{currency(potentialValue)} potential value</span>
            </p>
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden border border-[#d9d7cd] bg-[#f8f7f2] lg:grid-cols-[1.45fr_0.55fr]">
          <div className="min-w-0 p-5 sm:p-8 lg:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#73796c]">
                  One possible outcome
                </p>
                <p className="mt-2 font-serif text-3xl tracking-[-0.04em] text-[#202821] sm:text-4xl">
                  {currency(potentialValue)}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 text-[10px] text-[#74776f]">
                <span className="flex items-center gap-2">
                  <span className="h-0.5 w-4 bg-[#45614b]" />
                  Potential value
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-0.5 w-4 bg-[#b9bcae]" />
                  Amount invested
                </span>
              </div>
            </div>

            <div className="mt-7 w-full">
              <svg
                viewBox="0 0 560 320"
                preserveAspectRatio="none"
                className="h-[220px] w-full overflow-visible sm:h-[300px]"
                role="img"
                aria-label="Illustrative chart comparing amount invested with potential investment value over ten years"
              >
                {[0, 1, 2, 3, 4].map((line) => {
                  const y = 55 + line * 56
                  return (
                    <g key={line}>
                      <line
                        x1="52"
                        x2="552"
                        y1={y}
                        y2={y}
                        stroke="#e3e1d8"
                        strokeDasharray="3 5"
                      />
                      <text
                        x="0"
                        y={y + 4}
                        fill="#888a80"
                        fontSize="10"
                      >
                        {line === 0
                          ? '₹25L'
                          : line === 1
                            ? '₹18.75L'
                            : line === 2
                              ? '₹12.5L'
                              : line === 3
                                ? '₹6.25L'
                                : '₹0'}
                      </text>
                    </g>
                  )
                })}
                <polyline
                  points={investedPoints}
                  fill="none"
                  stroke="#b9bcae"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  vectorEffect="non-scaling-stroke"
                />
                <polyline
                  points={valuePoints}
                  fill="none"
                  stroke="#45614b"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx={plotX(10)}
                  cy={plotY(potentialValue)}
                  r="5"
                  fill="#45614b"
                />
                {[0, 2, 4, 6, 8, 10].map((year) => (
                  <text
                    key={year}
                    x={plotX(year)}
                    y="310"
                    fill="#888a80"
                    fontSize="10"
                    textAnchor="middle"
                  >
                    {year === 0 ? 'Start' : `${year}y`}
                  </text>
                ))}
              </svg>
            </div>

            <div className="mt-6 grid gap-4 border-t border-[#e1dfd6] pt-5 sm:grid-cols-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#7a7d73]">
                  Total invested
                </p>
                <p className="mt-1 text-lg font-medium text-[#303c32]">
                  {currency(invested)}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#7a7d73]">
                  Potential growth
                </p>
                <p className="mt-1 text-lg font-medium text-[#45614b]">
                  {currency(growth)}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#7a7d73]">
                  Potential value
                </p>
                <p className="mt-1 text-lg font-medium text-[#303c32]">
                  {currency(potentialValue)}
                </p>
              </div>
            </div>
          </div>

          <aside className="border-t border-[#d9d7cd] bg-[#18372e] p-6 text-[#f7f5ed] sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c1cead]">
              What’s behind the number
            </p>
            <h3 className="mt-3 font-serif text-2xl tracking-[-0.035em]">
              Regular investing, over time.
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#c2ccc1]">
              Each monthly contribution has a different amount of time to grow.
              The estimate combines those contributions and their assumed
              monthly growth.
            </p>
            <ol className="mt-7">
              {[
                'Monthly contribution',
                'Time invested',
                'Expected growth',
                'Potential future value',
              ].map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-3 border-t border-white/15 py-3 text-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#9eae8b] text-[9px] text-[#d5dfc1]">
                    {index + 1}
                  </span>
                  <span className={index === 3 ? 'text-white' : 'text-[#c2ccc1]'}>
                    {step}
                  </span>
                  {index < 3 && (
                    <span className="ml-auto text-[#9eae8b]" aria-hidden="true">
                      ↓
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <p id="math-disclaimer" className="mt-4 scroll-mt-20 text-xs leading-5 text-[#777a72]">
        Illustration only: assumes a 12% annual return compounded monthly,
        with contributions at the beginning of each month. Actual returns
        vary and are not guaranteed. This is not investment advice.
        </p>
      </div>
    </section>
  )
}
