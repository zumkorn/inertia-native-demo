import { Head } from '@inertiajs/react'

import ListItem from '../../components/ListItem'

export default function ResourcesIndex() {
  return (
    <>
      <Head title="Resources" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Resources</h1>
        <p>This page includes links to Hotwire Native resources, answers to common questions, and a place to validate bug fixes.</p>

        <div className="formatted-list formatted-list--top-level">
          <ListItem href="https://native.hotwired.dev" icon="book-bold" name="Documentation" description="The official Hotwire Native docs." />
          <ListItem href="https://pragprog.com/titles/jmnative/hotwire-native-for-rails-developers/" icon="book-bold" name="Book" description="Hotwire Native for Rails Developers by Joe Masilotti." />
          <ListItem href="/resources/long" icon="scroll-bold" name="Scroll restoration" description="Keep your place when navigating back." />
          <ListItem href="/resources/new" icon="warning-bold" name="Forms and flash messages" description="A demo for forms and flash messages." />
          <ListItem href="/resources/upload" icon="cloud-upload-bold" name="Native file uploads" description="A demo for image and camera uploads." />
        </div>
      </div>
    </>
  )
}
