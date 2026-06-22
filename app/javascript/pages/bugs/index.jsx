import { Head } from '@inertiajs/react'

export default function BugsIndex() {
  return (
    <>
      <Head title="Bugs & Fixes" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Bugs & Fixes</h1>
        <p>An area to reproduce outstanding bugs and ensure no regressions on existing fixes reappear.</p>

        <p><i>No bugs currently being investigated.</i></p>

        <div className="formatted-list formatted-list--top-level" />
      </div>
    </>
  )
}
