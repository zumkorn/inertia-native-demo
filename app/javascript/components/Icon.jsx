import { usePage } from '@inertiajs/react'

const SIZES = {
  small: 'small-icon',
  medium: 'medium-icon',
  large: 'large-icon',
}

// Renders an icon from the shared SVG sprite sheet.
// Replaces the Rails `icon_tag` / `sprite_tag` helpers.
export default function Icon({ name, size = 'medium', className = '', ...options }) {
  const { sprite_path } = usePage().props
  const classNames = [SIZES[size], className].filter(Boolean).join(' ')

  return (
    <svg className={classNames} aria-hidden="true" {...options}>
      <use xlinkHref={`${sprite_path}#${name}`} />
    </svg>
  )
}
