const footerGroups = [
  {
    title: 'Product',
    links: [
      ['Financial decisions', '#decisions'],
      ['Financial tools', '#financial-tools'],
      ['See the math', '#see-math'],
      ['Insights', '#insights'],
    ],
  },
  {
    title: 'About',
    links: [
      ['The Fermor method', '#method'],
      ['Notes on money', '#insights'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Illustration disclaimer', '#math-disclaimer'],
    ],
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#18372e] text-[#f7f5ed]">
      <div className="mx-auto max-w-[1280px] px-5 pb-7 pt-14 sm:px-8 sm:pt-16 lg:px-12">
        <div className="grid gap-11 border-b border-white/15 pb-11 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-[310px]">
            <a
              href="#home"
              className="font-serif text-[27px] font-semibold tracking-[-0.06em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label="Fermor home"
            >
              fermor<span className="text-[#c4d09e]">.</span>
            </a>
            <p className="mt-4 text-sm leading-6 text-[#c2ccc1]">
              Tools and explanations for saving, investing, borrowing, tax and
              planning.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c4d09e]">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-[#d4dbd0] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-[#aebdb0] sm:flex-row sm:items-center sm:justify-between">
          <p>© Fermor</p>
          <p>Illustrations are examples. Investment returns are not guaranteed.</p>
        </div>
      </div>
    </footer>
  )
}
