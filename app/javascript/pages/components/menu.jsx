import { Head } from '@inertiajs/react'

import OptionMenu from '../../components/OptionMenu'

export default function ComponentMenu() {
  return (
    <>
      <Head title="Menu Component" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Menu Component</h1>
        <p>Uses the Bridge <code>menu</code> component to display a native bottom sheet. In a regular browser it falls back to a plain React menu.</p>

        <OptionMenu />
      </div>
    </>
  )
}
