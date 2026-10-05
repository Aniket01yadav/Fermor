const variants = {
  primary:
    'bg-[#183d32] text-white hover:bg-[#245446] focus-visible:outline-[#183d32]',
  secondary:
    'border border-[#d9d6cc] bg-transparent text-[#202821] hover:border-[#183d32] hover:bg-white focus-visible:outline-[#183d32]',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="text-base leading-none">
        ↗
      </span>
    </a>
  )
}
