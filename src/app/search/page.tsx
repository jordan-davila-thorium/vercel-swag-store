import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getCategories } from '@/services/api'
import SearchResults from '@/components/blocks/search-results'
import CategoryFilter from '@/components/partials/category-filter'
import SearchInput from '@/components/partials/search-input'

export const metadata: Metadata = { title: 'Search' }

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>
}) {
  const { q, category } = await searchParams
  const categories = await getCategories()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold">Search Products</h1>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <SearchInput />
        </div>
        <CategoryFilter categories={categories} />
      </div>
      <div className="mt-8">
        <Suspense
          key={`${q}-${category}`}
          fallback={
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="aspect-square animate-pulse rounded-lg bg-muted" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                  <div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
                </div>
              ))}
            </div>
          }
        >
          <SearchResults query={q} category={category} />
        </Suspense>
      </div>
    </div>
  )
}
