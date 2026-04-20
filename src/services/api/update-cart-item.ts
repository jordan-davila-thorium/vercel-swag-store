import type { Cart } from '@/services/types'
import { client } from './client'

export async function updateCartItemApi(
  token: string,
  itemId: string,
  quantity: number
): Promise<Cart> {
  return client<Cart>(`/cart/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'x-cart-token': token,
    },
    body: JSON.stringify({ quantity }),
  })
}
