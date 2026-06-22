import { Head } from '@inertiajs/react'

export default function NavigationSlow() {
  return (
    <>
      <Head title="Slow-Loading Page" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Slow-Loading Page</h1>
        <p>This page is rendered with a delay on the server so you can see the loading indicator and test caching.</p>
        <p>Tap the Back button, then return to this page to compare load times.</p>
      </div>
    </>
  )
}
