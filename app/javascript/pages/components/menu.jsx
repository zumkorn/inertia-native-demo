import { Head } from '@inertiajs/react'

import OptionMenu from '../../components/OptionMenu'

export default function ComponentMenu() {
  return (
    <>
      <Head title="Menu Component" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Menu Component</h1>
        <p>This screen originally demonstrated the Bridge <code>menu</code> component, which displayed a native bottom sheet. Here it is a plain React menu.</p>

        <OptionMenu />
      </div>
    </>
  )
}
