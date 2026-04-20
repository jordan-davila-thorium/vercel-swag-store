import type { Cart } from '@/services/types'
import { client } from './client'

export async function removeCartItemApi(token: string, itemId: string): Promise<Cart> {
  return client<Cart>(`/cart/${itemId}`, {
    method: 'DELETE',
    headers: { 'x-cart-token': token },
  })
}
