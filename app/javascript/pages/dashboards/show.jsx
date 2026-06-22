import { Head } from '@inertiajs/react'

import ListItem from '../../components/ListItem'

export default function DashboardShow() {
  return (
    <>
      <Head title="Navigation" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Navigation</h1>
        <p>This demo app will help you get acquainted with Hotwire Native.</p>

        <div className="formatted-list formatted-list--top-level">
          <ListItem href="/navigation" icon="arrow-right-bold" name="Basic navigation" description="Push a screen on the stack." />
          <ListItem href="/modal/new" icon="arrow-up-bold" name="Modal navigation" description="Present a modal screen." />
          <ListItem href="/navigation/slow" icon="hourglass-bold" name="Slow-loading page" description="See the loading indicator in action." />
          <ListItem href="/not_found" icon="bug-bold" name="Error handling" description="Visit a page that does not exist (404)." />
        </div>

        <h3 className="margin-bs-xl margin-be-l text-title">Advanced Navigation</h3>

        <div className="formatted-list formatted-list--top-level">
          <ListItem href="/protected" icon="xmark" name="Authentication" description="Visit a protected endpoint." />
          <ListItem href="/numbers" icon="smartphone-bold" name="Native screen" description="Intercept with a native view." />
          <ListItem href="/navigation/redirect" icon="arrow-up-right-bold" name="Redirect" description="Follow an internal redirect." />
        </div>

        <h3 className="margin-bs-xl margin-be-l text-title">External Navigation</h3>

        <div className="formatted-list formatted-list--top-level">
          <ListItem href="https://native.hotwired.dev" icon="external-link-bold" name="External link" description="Visit a page with a different host." />
          <ListItem href="/external_redirect" icon="arrow-up-right-bold" name="External redirect" description="Follow an external redirect." />
          <ListItem href="sms:555-555-5555" icon="speech-bubble-bold" name={<><code>sms:</code> URLs</>} description="Handle non-http(s) URLs natively." />
        </div>
      </div>
    </>
  )
}
