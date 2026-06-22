import { Head } from '@inertiajs/react'

import ListItem from '../../components/ListItem'

export default function NavigationSecond() {
  return (
    <>
      <Head title="Basic Navigation #2" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Basic Navigation #2</h1>
        <p>Another screen pushed onto the navigation stack.</p>

        <div className="formatted-list formatted-list--top-level">
          <ListItem href="/navigation" icon="arrow-left-bold" name="Visit previous page" description="Pop this screen and reload previous one." />
          <ListItem href="/" icon="arrow-to-start-bold" name="Clear all" description="Pop all screens off the stack." />
        </div>
      </div>
    </>
  )
}
