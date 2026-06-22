import { Head } from '@inertiajs/react'

export default function NavigationRedirected() {
  return (
    <>
      <Head title="Redirected Page" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Redirected Page</h1>
        <p>This page is the result of a redirect. The original destination has been replaced with this page.</p>
      </div>
    </>
  )
}
