import { Head } from '@inertiajs/react'

export default function ComponentShow({ first_name, last_name }) {
  return (
    <>
      <Head title="Form Submitted" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Form Submitted</h1>
        <p>This page was redirected to after submitting the form. You entered the following:</p>
        <dl className="unstyled-list">
          <div>
            <dt className="color-on-body-muted">First name:</dt>
            <dd>{first_name}</dd>
          </div>
          <div>
            <dt className="color-on-body-muted">Last name:</dt>
            <dd>{last_name}</dd>
          </div>
        </dl>
      </div>
    </>
  )
}
