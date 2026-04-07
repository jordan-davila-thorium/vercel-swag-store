import type { ApiResponse, Cart } from '@/services/types'
import { API_BASE, BYPASS_TOKEN } from './client'

export async function createCart(): Promise<{ cart: Cart; token: string }> {
  const res = await fetch(`${API_BASE}/cart/create`, {
    method: 'POST',
    headers: { 'x-vercel-protection-bypass': BYPASS_TOKEN },
  })

  const token = res.headers.get('x-cart-token')!
  const json = (await res.json()) as ApiResponse<Cart>

  return { cart: json.data, token }
}
