import { cookies } from 'next/headers'
import { getCart } from '@/services/api'
import CartBadge from '@/components/ui/cart-badge'
import Link from '@/components/ui/link'
import HeaderNav from './header-nav'

export default async function Header() {
  const cookieStore = await cookies()
  const cartToken = cookieStore.get('cart-token')?.value
  let cartCount = 0

  if (cartToken) {
    const cart = await getCart(cartToken)
    if (cart) cartCount = cart.totalItems
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <svg width="18" height="18" viewBox="0 0 76 65" fill="currentColor">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            Swag Store
          </Link>
          <HeaderNav />
        </div>
        <CartBadge count={cartCount} />
      </div>
    </header>
  )
}
