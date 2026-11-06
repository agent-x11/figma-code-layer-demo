// Button – Code-Gegenstück zur Figma-Komponente „Button“
//
// Figma-Property        → Prop
// Variant (Variant)     → variant: 'primary' | 'secondary' | 'neutral' | 'danger'
// Size (Variant)        → size: 'sm' | 'md'
// Disabled (Boolean)    → disabled
// Label (Text)          → children
//
// Interaktions-States (Hover, Focus, Pressed) sind in Figma Variants,
// im Code aber CSS-Verhalten (hover:, focus-visible:, active:) – keine Props.

const VARIANTS = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700',
  secondary: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 active:bg-slate-200',
  neutral: 'bg-black text-white hover:bg-slate-800 active:bg-slate-700',
  danger: 'bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700',
}

const SIZES = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  children,
  ...props
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
        'disabled:pointer-events-none disabled:opacity-50',
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
