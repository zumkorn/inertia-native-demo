import { Head, useForm } from '@inertiajs/react'

export default function SessionProtected() {
  const { delete: destroy, processing } = useForm()

  function signOut(event) {
    event.preventDefault()
    destroy('/session')
  }

  return (
    <>
      <Head title="Protected Page" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Protected Page</h1>
        <p>This page requires authorization. You can see it because you’re signed in.</p>
        <p>If you weren’t signed in, the server would have returned a "401 Unauthorized" response.</p>

        <form onSubmit={signOut}>
          <button type="submit" className="button" disabled={processing}>Sign out</button>
        </form>
      </div>
    </>
  )
}
