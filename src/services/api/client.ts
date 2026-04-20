import 'server-only'
import type { ApiResponse } from '@/services/types'

export const API_BASE = process.env.API_BASE_URL!
export const BYPASS_TOKEN = process.env.API_BYPASS_TOKEN!
export const CART_TOKEN_COOKIE = 'cart-token'

export async function client<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'x-vercel-protection-bypass': BYPASS_TOKEN,
      ...options?.headers,
    },
  })

  if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`)

  const json = (await res.json()) as ApiResponse<T>
  if (!json.success) throw new Error('API returned unsuccessful response')

  return json.data
}
