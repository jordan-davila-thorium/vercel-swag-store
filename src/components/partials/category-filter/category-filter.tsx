'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Category } from '@/services/types'

export default function CategoryFilter({ categories }: { categories: Category[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams)
    if (value) params.set('category', value)
    else params.delete('category')
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <select
      value={searchParams.get('category') || ''}
      onChange={(e) => handleChange(e.target.value)}
      className="h-10 rounded-md border border-border bg-background px-3 text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat.slug} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  )
}
