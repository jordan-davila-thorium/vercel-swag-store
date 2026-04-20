import type { Cart } from '@/services/types'
import { client } from './client'

export async function getCart(token: string): Promise<Cart | null> {
  try {
    return await client<Cart>('/cart', {
      headers: { 'x-cart-token': token },
    })
  } catch {
    return null
  }
}
