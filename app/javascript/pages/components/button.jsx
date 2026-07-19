import { Head } from '@inertiajs/react'
import { useState } from 'react'

import { BridgeButton } from '../../bridge/BridgeButton'

export default function ComponentButton() {
  const [taps, setTaps] = useState(0)

  return (
    <>
      <Head title="Button Component" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Button Component</h1>
        <p>This screen registers a button in the native navigation bar. Every tap is reported back to the web side, which counts it below. In a regular browser the web button below does the same.</p>

        <BridgeButton title="Tap me" onTap={() => setTaps((count) => count + 1)}>
          <button type="button" className="button" onClick={() => setTaps((count) => count + 1)}>
            Tap me
          </button>
        </BridgeButton>

        <div className="margin-bs-l text-title">
          {taps > 0 ? `Tapped ${taps} ${taps === 1 ? 'time' : 'times'}` : null}
        </div>
      </div>
    </>
  )
}
