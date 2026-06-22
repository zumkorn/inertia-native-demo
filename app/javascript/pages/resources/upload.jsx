import { Head } from '@inertiajs/react'

export default function ResourceUpload() {
  return (
    <>
      <Head title="Native File Uploads" />

      <div className="top-level-container">
        <h1 className="hide@native margin-bs-xl text-large-title">Native File Uploads</h1>
        <p>Prompt for file uploads, like images or camera captures, using a standard file input.</p>
        <input type="file" name="image" accept="image/jpg,image/jpeg,image/png" className="form-control" />
      </div>
    </>
  )
}
