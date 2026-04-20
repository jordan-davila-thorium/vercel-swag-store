'use server'

import { cookies } from 'next/headers'
import { CART_TOKEN_COOKIE, removeCartItemApi } from '@/services/api'
import type { ActionState } from '@/services/types'

export async function removeFromCart(
  itemId: string,
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const cookieStore = await cookies()
    const cartToken = cookieStore.get(CART_TOKEN_COOKIE)?.value
    if (!cartToken) return { success: false, message: 'No cart found' }

    await removeCartItemApi(cartToken, itemId)
    return { success: true, message: 'Item removed' }
  } catch {
    return { success: false, message: 'Failed to remove item' }
  }
}
