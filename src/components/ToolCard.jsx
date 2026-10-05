export default function ToolCard({ tool, featured = false }) {
  return (
    <article className={`flex flex-col ${featured ? 'min-h-[250px] justify-between border border-[#d9d7cd] bg-[#eeede5] p-6 sm:p-7' : 'min-h-[168px] border-t border-[#d9d7cd] py-5'}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className={`font-serif tracking-[-0.035em] text-[#202821] ${featured ? 'text-3xl sm:text-4xl' : 'text-[1.35rem]'}`}>
          {tool.name}
        </h3>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eeede5] font-serif text-base text-[#45614b]"
        >
          {tool.symbol}
        </span>
      </div>
      <p className={`mt-2 max-w-[300px] text-sm leading-6 text-[#6d7068] ${featured ? 'max-w-[380px]' : ''}`}>
        {tool.description}
      </p>
      {tool.exampleHref && (
        <a
          href={tool.exampleHref}
          className="mt-auto inline-flex min-h-9 self-start items-center gap-2 pt-6 text-xs font-medium text-[#345743] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183d32]"
        >
          See the SIP example <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  )
}
