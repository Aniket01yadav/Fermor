import Button from '../components/Button.jsx'

export default function FinalCTA() {
  return (
    <section
      className="bg-[#e7e8dc] py-20 sm:py-24 lg:py-28"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#66745e]">
            A clearer next step
          </p>
          <h2
            id="final-cta-heading"
            className="mt-5 max-w-[800px] font-serif text-4xl leading-[1.06] tracking-[-0.055em] text-[#202821] sm:text-5xl lg:text-[4.4rem]"
          >
            Your money is complicated enough.
            <span className="block italic text-[#45614b]">
              Let’s make the numbers clearer.
            </span>
          </h2>
        </div>
        <div className="md:justify-self-end">
          <Button href="#financial-tools">Browse financial tools</Button>
        </div>
      </div>
    </section>
  )
}
