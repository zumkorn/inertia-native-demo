import { Head } from '@inertiajs/react'

export default function NumbersShow({ number }) {
  return (
    <>
      <Head title={`#${number}`} />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">{`#${number}`}</h1>
        <p>You just navigated from <code>/numbers</code> to <code>/numbers/{number}</code>.</p>
        <p>In the native apps, the path configuration routes these URLs to different screens.</p>
      </div>
    </>
  )
}
