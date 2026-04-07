import { cookies } from 'next/headers'
import Link from 'next/link'
import { getCart } from '@/services/api'
import CartItems from '@/components/blocks/cart-items'
import CartSummary from '@/components/blocks/cart-summary'

export const metadata = { title: 'Cart' }

export default async function CartPage() {
  const cookieStore = await cookies()
  const cartToken = cookieStore.get('cart-token')?.value
  const cart = cartToken ? await getCart(cartToken) : null

  if (!cart || cart.items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/search"
          className="mt-6 inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CartItems items={cart.items} />
        </div>
        <div>
          <CartSummary cart={cart} />
        </div>
      </div>
    </div>
  )
}
