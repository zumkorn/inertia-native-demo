import { Head } from '@inertiajs/react'

export default function ResourceScroll() {
  return (
    <>
      <Head title="Restoring Your Scroll" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Restoring Your Scroll</h1>
        <p>Now, go back. Inertia restores the scroll position of the previous page to make the transition seamless.</p>
      </div>
    </>
  )
}
