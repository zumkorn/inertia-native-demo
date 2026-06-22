import { Head, useForm } from '@inertiajs/react'
import { useRef } from 'react'

import { useBridgeForm } from '../../bridge/useBridgeForm'

export default function ComponentNew() {
  const { data, setData, post, processing } = useForm({
    first_name: '',
    last_name: '',
  })
  const formRef = useRef(null)

  function submit(event) {
    event.preventDefault()
    post('/components')
  }

  // In Hotwire Native, show a native submit button instead of the web one.
  const { supported: nativeSubmit } = useBridgeForm({
    submitTitle: 'Submit',
    processing,
    onSubmit: () => formRef.current?.requestSubmit(),
  })

  return (
    <>
      <Head title="Form Component" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Form Component</h1>
        <p>This screen contains a form that submits data to the server and redirects to a success page.</p>

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
      </div>
    </>
  )
}
