'use client'

import { usePathname } from 'next/navigation'
import { cn } from '@/services/utils'
import Link from '@/components/ui/link'

export default function HeaderNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-4">
      <Link
        href="/"
        className={cn(
          pathname === '/'
            ? 'font-medium text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        Home
      </Link>
      <Link
        href="/search"
        className={cn(
          pathname === '/search'
            ? 'font-medium text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        Search
      </Link>
    </nav>
  )
}
