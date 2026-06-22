import { Head, useForm } from '@inertiajs/react'
import { useRef } from 'react'

import { useBridgeForm } from '../../bridge/useBridgeForm'

export default function ResourceNew() {
  const { data, setData, post, processing, errors } = useForm({
    first_name: '',
    last_name: '',
  })
  const formRef = useRef(null)

  function submit(event) {
    event.preventDefault()
    post('/resources')
  }

  // In Hotwire Native, show a native submit button instead of the web one.
  const { supported: nativeSubmit } = useBridgeForm({
    submitTitle: 'Submit',
    processing,
    onSubmit: () => formRef.current?.requestSubmit(),
  })

  const errorMessages = Object.values(errors).flat()

  return (
    <>
      <Head title="Forms and Flash Messages" />

      <article className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Forms and Flash Messages</h1>
        <p>This page includes a form that demonstrates passing data to the server, redirecting to a new page, and rendering error and success flash messages.</p>

        {errorMessages.length > 0 && (
          <section className="alert alert--warning margin-be-l" role="alert">
            <h2 className="alert__header text-headline">Please fix these issues:</h2>
            <ul className="unstyled-list">
              {errorMessages.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
          </section>
        )}

        <form ref={formRef} onSubmit={submit} className="flex-container row-gap-gutter">
          <div className="flex-column flex-100 flex-6@l flex-5@xl">
            <label htmlFor="first_name" className="form-label">First name</label>
            <input
              id="first_name"
              type="text"
              value={data.first_name}
              onChange={(e) => setData('first_name', e.target.value)}
              className="form-control inline-100"
            />
          </div>

          <div className="flex-column flex-100 flex-6@l flex-5@xl">
            <label htmlFor="last_name" className="form-label">Last name</label>
            <input
              id="last_name"
              type="text"
              value={data.last_name}
              onChange={(e) => setData('last_name', e.target.value)}
              className="form-control inline-100"
            />
          </div>

          {!nativeSubmit && (
            <div className="flex-column align-self-end">
              <button type="submit" className="button inline-100" disabled={processing}>Submit form</button>
            </div>
          )}
        </form>
      </article>
    </>
  )
}
