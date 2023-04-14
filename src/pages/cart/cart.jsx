/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './cart.css';

function cart() {
  return (
    <main className="cart-page">
		<section class="cart">
			<h2>Your Shopping Cart</h2>
			<table>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Graphic Tees</td>
						<td>$19.99</td>
						<td><input type="number" value="1"/></td>
						<td>$19.99</td>
						<td><a href="#">Remove</a></td>
					</tr>
					<tr>
						<td>Oversized Tees</td>
						<td>$24.99</td>
						<td><input type="number" value="2"/></td>
						<td>$49.98</td>
						<td><a href="#">Remove</a></td>
					</tr>
					<tr>
						<td>Hoodies</td>
						<td>$29.99</td>
						<td><input type="number" value="1" /></td>
						<td>$29.99</td>
						<td><a href="#">Remove</a></td>
					</tr>
          <tr>
						<td>Casual Shirts</td>
						<td>$9.99</td>
						<td><input type="number" value="5" /></td>
						<td>$49.9</td>
						<td><a href="#">Remove</a></td>
					</tr>
				</tbody>
			</table>
			<div class="total">
				<span>Total:</span>
				<span>$99.96</span>
			</div>
			<div class="checkout">
				<a href="#">Continue Shopping</a>
				<a href="#">Checkout</a>
			</div>
		</section>
	</main>
  )
}

export default cart