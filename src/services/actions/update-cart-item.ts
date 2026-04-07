'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { updateCartItemApi } from '@/services/api'
import type { ActionState } from '@/services/types'

export async function updateCartItem(
  itemId: string,
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const quantity = Number(formData.get('quantity')) || 1
    const cookieStore = await cookies()
    const cartToken = cookieStore.get('cart-token')?.value
    if (!cartToken) return { success: false, message: 'No cart found' }

    await updateCartItemApi(cartToken, itemId, quantity)
    revalidateTag('cart', 'seconds')
    return { success: true, message: 'Cart updated' }
  } catch {
    return { success: false, message: 'Failed to update cart' }
  }
}
