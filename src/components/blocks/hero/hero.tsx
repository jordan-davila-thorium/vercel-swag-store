import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Vercel Swag
          <span className="block text-muted-foreground">for Developers</span>
        </h1>
        <p className="mt-4 max-w-lg text-lg text-muted-foreground">
          Premium apparel and accessories designed for those who ship.
        </p>
        <Link
          href="/search"
          className="mt-8 inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Browse All Products
        </Link>
      </div>
    </section>
  )
}
