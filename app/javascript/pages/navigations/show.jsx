import { Head, router } from '@inertiajs/react'

import ListItem from '../../components/ListItem'

export default function NavigationShow() {
  return (
    <>
      <Head title="Basic Navigation" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Basic Navigation</h1>
        <p>
          This screen was pushed onto the navigation stack.<br />
          This is the default behavior, no custom options are required.
        </p>

        <div className="formatted-list formatted-list--top-level">
          <ListItem href="/navigation/second" icon="arrow-right-bold" name="Basic navigation" description="Push another screen on the stack." />
          <ListItem href="/modal/new" icon="arrow-up-bold" name="Modal navigation" description="Present a modal screen." />
          <ListItem href="/navigation/replace" replace icon="arrow-left-right-bold" name="Replace navigation" description="Replace this screen with a new one." />
          <ListItem href="/navigation" icon="arrow-clockwise-bold" name="Visit same page" description="Reload this screen." />
        </div>

        <h3 className="margin-bs-xl margin-be-l text-title">Historical Navigation</h3>

        <div className="formatted-list formatted-list--top-level">
          <ListItem onClick={() => window.history.back()} icon="arrow-left-bold" name="Recede navigation" description="Pop this screen off the stack." />
          <ListItem onClick={() => router.reload()} icon="arrow-clockwise-bold" name="Refresh navigation" description="Refresh this screen." />
          <ListItem onClick={() => {}} icon="stop-bold" name="Resume navigation" description="Do nothing." />
        </div>
      </div>
    </>
  )
}
