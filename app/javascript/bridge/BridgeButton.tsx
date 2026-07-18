import { useEffect, useRef, type ReactNode } from 'react'
import { useBridgeComponent } from 'inertia-hotwire-native/react'

interface BridgeButtonProps {
  /** Label shown on the native navigation-bar button. */
  title: string
  /** Which side of the navigation bar. Defaults to the trailing edge. */
  side?: 'left' | 'right'
  /** Called each time the native button is tapped. */
  onTap?: () => void
  /** Web fallback: rendered when there is no native adapter (regular browser). */
  children?: ReactNode
}

/**
 * Renders a native navigation-bar button inside Hotwire Native. In a regular
 * browser (no native adapter) it renders `children` as a normal web control.
 */
export function BridgeButton({ title, side = 'right', onTap, children }: BridgeButtonProps) {
  const { supported, send } = useBridgeComponent('button')

  // Keep the tap handler in a ref so it can change without re-registering the
  // native button on every render.
  const onTapRef = useRef(onTap)
  onTapRef.current = onTap

  useEffect(() => {
    if (!supported) return
    // Native replies to "connect" each time the bar button is tapped.
    const id = send('connect', { title, side }, () => onTapRef.current?.())
    // Drop the old callback before re-registering, so a title/side change does
    // not leave a second one behind and report every tap twice.
    return () => window.HotwireNative?.web?.removeCallback(id)
  }, [supported, title, side, send])

  if (supported) return null
  return <>{children}</>
}
