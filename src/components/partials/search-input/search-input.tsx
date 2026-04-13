'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchInput() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isTyping, setIsTyping] = useState(false)

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) params.set('q', term)
    else params.delete('q')
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`)
      setIsTyping(false)
    })
  }, 300)

  const showSpinner = isPending || isTyping

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search products..."
        defaultValue={searchParams.get('q')?.toString()}
        aria-busy={showSpinner}
        onChange={(e) => {
          setIsTyping(true)
          handleSearch(e.target.value)
        }}
        className="h-10 w-full rounded-md border border-border bg-background px-3 pr-9 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:outline-none"
      />
      {showSpinner && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent"
          />
          <span role="status" aria-live="polite" className="sr-only">
            Searching
          </span>
        </>
      )}
    </div>
  )
}
