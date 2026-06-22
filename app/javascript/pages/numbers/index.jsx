import { Head } from '@inertiajs/react'

import ListItem from '../../components/ListItem'

export default function NumbersIndex() {
  return (
    <>
      <Head title="Numbers" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Numbers</h1>
        <p>This page lists numbers. Tap one to see its detail screen.</p>

        <div className="formatted-list formatted-list--top-level">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
            <ListItem key={number} href={`/numbers/${number}`} icon="arrow-right-bold" name={`#${number}`} description={`View number ${number}.`} />
          ))}
        </div>
      </div>
    </>
  )
}
