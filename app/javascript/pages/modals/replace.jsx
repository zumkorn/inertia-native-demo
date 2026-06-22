import { Head } from '@inertiajs/react'

export default function ModalReplace() {
  return (
    <>
      <Head title="Replace" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Replace</h1>
        <p>
          This screen replaced the previous modal one.<br />
          Trigger this by passing the <code>replace</code> prop to an Inertia link.
        </p>
      </div>
    </>
  )
}
