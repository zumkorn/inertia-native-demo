import { useRef, useState } from 'react'

import Icon from './Icon'
import { useBridgeMenu } from '../bridge/useBridgeMenu'
import { useBridgeOverflowMenu } from '../bridge/useBridgeOverflowMenu'

const OPTIONS = ['Option One', 'Option Two', 'Option Three', 'Option Four']
const MENU_TITLE = 'Select an option'

// A menu of options. In Hotwire Native (when the `menu` component is supported)
// it opens a native bottom sheet via the bridge; otherwise it shows a web dialog.
// With `overflowMenu`, it also registers the `overflow-menu` component so the
// native app shows a 3-dot button in the app bar that opens the menu.
export default function OptionMenu({ buttonLabel = 'Open Menu', overflowMenu = false }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const buttonRef = useRef(null)
  const menu = useBridgeMenu()

  // Its tap clicks our (hidden) menu button, which opens the menu.
  const overflow = useBridgeOverflowMenu({
    enabled: overflowMenu,
    label: buttonLabel,
    onTap: () => buttonRef.current?.click(),
  })
  const useOverflow = overflow.supported

  function select(option) {
    setSelected(option)
    setOpen(false)
  }

  function openMenu(event) {
    if (menu.supported) {
      // source is the button's rect, so the native sheet anchors to it.
      const { x, y, width, height } = event.currentTarget.getBoundingClientRect()
      const items = OPTIONS.map((title, index) => ({ title, index }))
      menu.display({ title: MENU_TITLE, items, source: { x, y, width, height } }, (index) => {
        if (OPTIONS[index] != null) select(OPTIONS[index])
      })
    } else {
      setOpen(true)
    }
  }

  return (
    <div>
      <button
        ref={buttonRef}
        type="button"
        className="button"
        onClick={openMenu}
        // When the native overflow button is shown, hide the web one (but keep
        // it in the DOM so the native callback can click it).
        style={useOverflow ? { display: 'none' } : undefined}
      >
        {buttonLabel}
      </button>

      <div className="margin-bs-l text-title">
        {selected ? `Selected: ${selected}` : null}
      </div>

      {open && (
        <dialog className="dialog" open>
          <div className="dialog__content flush-flex-container gap">
            <p className="flex-100">{MENU_TITLE}</p>
            {OPTIONS.map((option) => (
              <button key={option} type="button" className="button" onClick={() => select(option)}>{option}</button>
            ))}
          </div>
          <div className="dialog__close-button">
            <button type="button" className="unstyled-button" onClick={() => setOpen(false)}>
              <Icon name="xmark" size="small" />
            </button>
          </div>
        </dialog>
      )}
    </div>
  )
}
