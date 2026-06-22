import { Link, usePage } from '@inertiajs/react'

export default function Nav() {
  const { sprite_path } = usePage().props

  return (
    <header className="header top-level-container hide@native">
      <Link href="/" className="header__brand unstyled-link color-accent">
        <svg className="header__brand-mark" aria-label="Inertia">
          <use xlinkHref={`${sprite_path}#inertia-logo`} />
        </svg>
        <span className="header__brand-plus" aria-hidden="true">+</span>
        <svg className="header__brand-wordmark" aria-label="Hotwire Native Demo">
          <use xlinkHref={`${sprite_path}#hotwire-native-logo`} />
        </svg>
      </Link>
      <nav>
        <ul className="main-navigation unstyled-list block-100">
          <li>
            <Link href="/" className="main-navigation__link decorated-link">Navigation</Link>
          </li>
          <li>
            <Link href="/components" className="main-navigation__link decorated-link">Bridge Components</Link>
          </li>
          <li>
            <Link href="/resources" className="main-navigation__link decorated-link">Resources</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
