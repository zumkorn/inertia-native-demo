import { Head } from '@inertiajs/react'

import { BridgeButton } from '../../bridge/BridgeButton'

export default function ComponentButton() {
  return (
    <>
      <Head title="Button Component" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Button Component</h1>
        <p>Renders a button in the native navigation bar. In a regular browser the web fallback below is shown instead.</p>

        <BridgeButton title="Tap me" onTap={() => alert('Tapped the native button')}>
          <button type="button" onClick={() => alert('Tapped the web button')}>Tap me</button>
        </BridgeButton>
      </div>
    </>
  )
}
