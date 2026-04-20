'use server'

import { cookies } from 'next/headers'
import { CART_TOKEN_COOKIE, addItemToCart, createCart } from '@/services/api'
import type { ActionState } from '@/services/types'

export async function addToCart(
  productId: string,
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const quantity = Number(formData.get('quantity')) || 1
    const cookieStore = await cookies()
    let cartToken = cookieStore.get(CART_TOKEN_COOKIE)?.value

    if (!cartToken) {
      const { token } = await createCart()
      cartToken = token
      cookieStore.set(CART_TOKEN_COOKIE, cartToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24,
      })
    }

    await addItemToCart(cartToken, productId, quantity)
    return { success: true, message: 'Added to cart' }
  } catch {
    return { success: false, message: 'Failed to add to cart' }
  }
}
