import { useRef, useState } from 'react'
import Button from './Button.jsx'

const links = [
  { label: 'Product', href: '#decisions' },
  { label: 'Tools', href: '#financial-tools' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#method' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleMenuKeyDown(event) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu()
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header onKeyDown={handleMenuKeyDown} className="sticky top-0 z-50 border-b border-[#e8e5dc] bg-[#f8f7f2]/95 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="font-serif text-[27px] font-semibold tracking-[-0.06em] text-[#183d32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183d32]"
          aria-label="Fermor home"
        >
          Fermor<span className="text-[#a9b77d]">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#62675f] transition-colors hover:text-[#183d32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183d32]"
            >
              {link.label}
            </a>
          ))}
          <Button href="#scenario" className="min-h-11 px-5">
            Get started
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dedbd1] text-[#183d32] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183d32] md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden="true">
            <span className={`h-px w-full bg-current transition ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`h-px w-full bg-current transition ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`${menuOpen ? 'block' : 'hidden'} border-t border-[#e8e5dc] bg-[#f8f7f2] px-5 pb-6 pt-3 md:hidden`}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-[#e8e5dc] py-4 text-[15px] text-[#414940] transition-colors hover:text-[#183d32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#183d32]"
              >
                {link.label}
              </a>
            ))}
            <Button href="#scenario" onClick={closeMenu} className="mt-5 w-full">
              Get started
            </Button>
        </div>
      </div>
    </header>
  )
}
