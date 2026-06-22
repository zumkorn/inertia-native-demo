import { Head } from '@inertiajs/react'

export default function NavigationReplace() {
  return (
    <>
      <Head title="Replace Navigation" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Replace Navigation</h1>
        <p>
          This screen replaced the previous one.<br />
          Trigger this by passing the <code>replace</code> prop to an Inertia link.
        </p>
      </div>
    </>
  )
}
