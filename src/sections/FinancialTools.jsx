import { useState } from 'react'
import ToolCard from '../components/ToolCard.jsx'
import { toolCategories } from '../data/financialTools.js'

export default function FinancialTools() {
  const [activeCategory, setActiveCategory] = useState(toolCategories[0].id)
  const category = toolCategories.find((item) => item.id === activeCategory)

  function handleTabKeyDown(event, currentIndex) {
    let nextIndex
    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % toolCategories.length
    } else if (event.key === 'ArrowLeft') {
      nextIndex =
        (currentIndex - 1 + toolCategories.length) % toolCategories.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = toolCategories.length - 1
    } else {
      return
    }

    event.preventDefault()
    const nextCategory = toolCategories[nextIndex]
    setActiveCategory(nextCategory.id)
    document.getElementById(`tool-tab-${nextCategory.id}`)?.focus()
  }

  return (
    <section
      id="financial-tools"
      className="scroll-mt-20 bg-[#f8f7f2] py-20 sm:py-24 lg:py-28"
      aria-labelledby="tools-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#66745e]">
            Financial tools
          </p>
          <div>
            <h2
              id="tools-heading"
              className="font-serif text-4xl leading-[1.08] tracking-[-0.05em] text-[#202821] sm:text-5xl lg:text-[3.6rem]"
            >
              Tools for the decisions ahead.
            </h2>
            <p className="mt-4 max-w-[560px] text-sm leading-6 text-[#696d65] sm:text-base sm:leading-7">
              Explore the numbers behind investing, borrowing, tax, and
              planning—one question at a time.
            </p>
          </div>
        </div>

        <div className="mt-10 border-b border-[#dfddd3]">
          <div
            className="flex flex-wrap gap-x-6 gap-y-1"
            role="tablist"
            aria-label="Financial tool categories"
          >
            {toolCategories.map((item, index) => (
              <button
                key={item.id}
                id={`tool-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={activeCategory === item.id}
                aria-controls="tool-category-panel"
                tabIndex={activeCategory === item.id ? 0 : -1}
                onClick={() => setActiveCategory(item.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`relative shrink-0 py-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183d32] ${
                  activeCategory === item.id
                    ? 'font-medium text-[#183d32]'
                    : 'text-[#777a72] hover:text-[#202821]'
                }`}
              >
                {item.label}
                {activeCategory === item.id && (
                  <span className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-[#45614b]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div
          id="tool-category-panel"
          role="tabpanel"
          aria-labelledby={`tool-tab-${category.id}`}
          className="pt-7"
        >
          <p className="mb-7 max-w-[520px] text-sm leading-6 text-[#70736b]">
            {category.intro}
          </p>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <ToolCard tool={category.tools[0]} featured />
            <div className="grid gap-x-8 sm:grid-cols-2 lg:content-center">
              {category.tools.slice(1).map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
          <p className="mt-5 text-xs text-[#85877f]">
            These tools are starting points for understanding—not personal
            financial advice.
          </p>
        </div>
      </div>
    </section>
  )
}
