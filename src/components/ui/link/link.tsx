'use client'

import { cn } from '@/services/utils'
import NextLink from 'next/link'

export default function Link({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <NextLink href={href} className={cn('text-sm transition-colors', className)}>
      {children}
    </NextLink>
  )
}
