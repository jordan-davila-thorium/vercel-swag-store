'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton({ label = 'Add to Cart' }: { label?: string }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
    >
      {pending ? 'Adding...' : label}
    </button>
  )
}
