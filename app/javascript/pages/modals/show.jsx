import { Head, router } from '@inertiajs/react'

import ListItem from '../../components/ListItem'

export default function ModalShow() {
  return (
    <>
      <Head title="Modal Navigation #2" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Modal Navigation #2</h1>
        <p>This screen was pushed on the modal stack.</p>

        <div className="formatted-list formatted-list--top-level">
          <ListItem href="/modal/replace" replace icon="arrow-left-right-bold" name="Replace navigation" description="Replace this modal screen with a new one." />
        </div>

        <h3 className="margin-bs-xl margin-be-l text-title">Historical Navigation</h3>

        <div className="formatted-list formatted-list--top-level">
          <ListItem onClick={() => window.history.back()} icon="arrow-down-bold" name="Recede navigation" description="Dismiss the modal." />
          <ListItem onClick={() => router.reload()} icon="arrow-clockwise-bold" name="Refresh navigation" description="Refresh this screen." />
          <ListItem onClick={() => {}} icon="stop-bold" name="Resume navigation" description="Do nothing." />
        </div>
      </div>
    </>
  )
}
