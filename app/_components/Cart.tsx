import React from "react"

import { commerce } from "../_lib/commerce"

const Cart = async() => {
  const cart = await commerce.cart.retrieve()
  
	return (
		<div className="fixed left-0 top-0 !z-[6] grid h-[100vdh] w-screen grid-cols-2 overflow-hidden bg-black/40">
			<div className="w-full"></div>
			<div className="h-full w-full">
				<p className="text-lg font-medium lg:text-xl">Cart</p>
				<div className="h-full w-full overflow-y-scroll">
          {cart.line_items.map((item) => (
            <div key={item.id} className="w-full"></div>
          ))}
        </div>
			</div>
		</div>
	)
}

export default Cart
