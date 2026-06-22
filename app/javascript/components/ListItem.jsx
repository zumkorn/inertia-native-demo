import { Link } from '@inertiajs/react'

import Icon from './Icon'

// A single row in a `formatted-list`, replacing the `navigations/_item` partial.
// Internal paths (starting with "/") use Inertia navigation; everything else
// (external URLs, `sms:` links, anchors) falls back to a plain anchor.
// Passing `onClick` (without `href`) renders an action button instead.
export default function ListItem({ href, icon, name, description, replace = false, onClick }) {
  const inner = (
    <>
      <Icon name={icon} />
      <div className="flex-fill">
        <p className="no-margin text-headline">{name}</p>
        <p className="no-margin color-on-body-muted">{description}</p>
      </div>
      <Icon name="chevron-right-bold" size="small" className="color-subtle" />
    </>
  )

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="formatted-list__item unstyled-button">
        {inner}
      </button>
    )
  }

  if (href.startsWith('/')) {
    return (
      <Link href={href} replace={replace} className="formatted-list__item">
        {inner}
      </Link>
    )
  }

  return (
    <a href={href} className="formatted-list__item">
      {inner}
    </a>
  )
}
