import { Head } from '@inertiajs/react'

import OptionMenu from '../../components/OptionMenu'

export default function ComponentOverflow() {
  return (
    <>
      <Head title="Overflow Component" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Overflow Component</h1>
        <p>This screen originally demonstrated the Bridge <code>overflow-menu</code> component, which displayed a native 3-dot menu in the app bar. Here it is a plain React menu.</p>

        <OptionMenu buttonLabel="Open Menu" overflowMenu />
      </div>
    </>
  )
}
