import { Head, useForm } from '@inertiajs/react'

export default function SessionNew() {
  const { post, processing } = useForm()

  function signIn(event) {
    event.preventDefault()
    post('/session')
  }

  return (
    <>
      <Head title="Sign In" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Sign In</h1>
        <p>The protected page returned a "401 Unauthorized" response, so you were routed here.</p>
        <p>Click the Sign In button below to set a cookie and access the protected page.</p>

        <form onSubmit={signIn}>
          <button type="submit" className="button" disabled={processing}>Sign in</button>
        </form>
      </div>
    </>
  )
}
