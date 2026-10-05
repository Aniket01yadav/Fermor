export default function InsightCard({ insight }) {
  return (
    <article
      className={`flex h-full flex-col border-t border-[#d9d7cd] pt-5 ${
        insight.featured ? 'lg:row-span-3 lg:justify-center' : ''
      }`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#66745e]">
        {insight.category}
      </p>
      <h3
        className={`mt-5 font-serif tracking-[-0.04em] text-[#202821] ${
          insight.featured
            ? 'max-w-[470px] text-3xl leading-[1.1] sm:text-4xl lg:text-[2.7rem]'
            : 'text-[1.5rem] leading-[1.15]'
        }`}
      >
        {insight.title}
      </h3>
      <p
        className={`mt-3 max-w-[450px] text-sm leading-6 text-[#6d7068] ${
          insight.featured ? 'sm:text-base sm:leading-7' : ''
        }`}
      >
        {insight.description}
      </p>
    </article>
  )
}
