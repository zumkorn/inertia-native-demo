import { Head } from '@inertiajs/react'

import ListItem from '../../components/ListItem'

export default function ComponentsIndex() {
  return (
    <>
      <Head title="Bridge Components" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Bridge Components</h1>
        <p>These pages originally demonstrated Hotwire Native bridge components. In this Inertia version they are plain React components.</p>

        <div className="formatted-list formatted-list--top-level">
          <ListItem href="https://native.hotwired.dev/overview/bridge-components" icon="external-link-bold" name="Documentation" description="Learn about bridge components." />
          <ListItem href="/components/new" icon="text-input-bold" name="Form example" description="Submit a form." />
          <ListItem href="/components/menu" icon="menu-bold" name="Menu example" description="Display a menu of options." />
          <ListItem href="/components/overflow" icon="overflow-bold" name="Overflow menu example" description="Display an overflow menu." />
        </div>
      </div>
    </>
  )
}
