import React, { useState } from 'react';
import scss from './Render.module.scss';

const Render = ({ menuItemss }) => {
	const [orderBasket, setOrderBasket] = useState([]);
    console.log(orderBasket);

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

	const renderOrder = () => {
		return orderBasket.map((el, index) => (
			<div key={index} className={scss.containerr}>
				<img src={el.img} alt={el.name} />
				<p>count: {el.title}</p>
				<p>price: {el.price}</p>
			</div>
		));
	};

        const renderTotalOrder = () => {
        let totalQuantity = 0;
        let totalPrice = 1;

        orderBasket.forEach((el) => {
            totalQuantity += el.price
            totalPrice += el.title
        })
        return(
            <div>
                <h1>You have {totalQuantity}</h1>
                <h1>Штук:{totalPrice}</h1>
            </div>
        )
    }

	// massiv push
	const pushProduct = (id) => {
		const Product = orderBasket.find((el) => el.id === id);

		if (Product) {
			const NewData = menuItemss.find((el) => el.id === id);
			Product.count += 1;
			Product.price += NewData.price;
		} else {
			const newData = menuItemss.find((el) => el.id === id);
			const newProduct = { ...newData, count: 1 };
			setOrderBasket([...orderBasket, newProduct]);
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
