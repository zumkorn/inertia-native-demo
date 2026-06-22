import Nav from './Nav'
import Flash from './Flash'

// Persistent layout applied to every Inertia page (see inertia.jsx).
// Mirrors the old `layouts/application.html.erb` body.
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="padding-be-xxl">
        <Flash />
        {children}
      </main>
    </>
  )
}
