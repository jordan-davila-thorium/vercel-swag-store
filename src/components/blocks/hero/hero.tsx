import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
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
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
          <Image
            preload
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80"
            alt="Folded apparel and accessories on a neutral background"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            quality={80}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
