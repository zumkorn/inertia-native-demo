import { usePage } from '@inertiajs/react'

export default function Flash() {
  const { flash } = usePage().props

  if (!flash?.notice) return null

  return (
    <div className="top-level-container margin-bs-l">
      <div className="alert alert--success" role="alert">
        {flash.notice}
      </div>
    </div>
  )
}
