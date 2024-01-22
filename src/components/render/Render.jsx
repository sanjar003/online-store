import React, { useState } from 'react';
import scss from './Render.module.scss';

const Render = ({ menuItemss }) => {
	const [orderBasket, setOrderBasket] = useState([]);
	// console.log(orderBasket);

	const renderData = () => {
		return (
			<div>
				{menuItemss.map((el) => (
					<div
						key={el.id}
						className={scss.container}
						onClick={() => pushProduct(el.id)}
					>
						<img src={el.img} alt={el.name} />
						<h3>{el.title}</h3>
						<p>{el.price}</p>
					</div>
				))}
			</div>
		);
	};

	// massiv push
	const pushProduct = (id) => {
		const existingProduct = orderBasket.find((el) => el.id === id);

		if (existingProduct) {
			const newData = menuItemss.find((el) => el.id === id);
			setOrderBasket((prevOrderBasket) => {
				const updatedBasket = prevOrderBasket.map((product) => {
					if (product.id === id) {
						return {
							...product,
							count: product.count + 1,
							price: product.price + newData.price
						};
					}
					return product;
				});
				return updatedBasket;
			});
		} else {
			const newData = menuItemss.find((el) => el.id === id);
			const newProduct = { ...newData, count: 1 };
			setOrderBasket((prevOrderBasket) => [...prevOrderBasket, newProduct]);
		}
	};
	//    kolichistvo
	const renderTotalOrder = () => {
		let totalQuantity = 0;
		let totalPrice = 0;

		orderBasket.forEach((el) => {
			totalQuantity += el.price;
			totalPrice += el.count;
		});
		return (
			<div>
				<h1>Все цена {totalQuantity}</h1>
				<h1>Штук:{totalPrice}</h1>
			</div>
		);
	};

	const renderOrder = () => {
		return orderBasket.map((el, index) => (
			<div key={index} className={scss.containerr}>
				<div>
					<p>title: {el.title}</p>
				</div>
				<div>
					<p>price: {el.price}</p>
				</div>
				<div>
					<p>count: {el.count}</p>
				</div>
				<button onClick={() => deleteProduct(el.id, index)}>delete</button>
			</div>
		));
	};

	// delete button
	const deleteProduct = (id, index) => {
		console.log(index, 'delete');

		const deleteProduct = orderBasket[index];

		if (deleteProduct.count > 1) {
			const newDate = menuItemss.find((el) => el.id === id);
			deleteProduct.count -= 1;
			deleteProduct.price -= newDate.price;
		} else {
			const newBasket = [...orderBasket];
			newBasket.splice(index, 1);
			setOrderBasket(newBasket);
		}
	};
	//
	return (
		<div>
			{renderData()}
			<div>{renderOrder()}</div>
			<div>{renderTotalOrder()}</div>
		</div>
	);
};

export default Render;
