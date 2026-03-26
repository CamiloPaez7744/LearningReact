import { useState } from 'react';

import './ItemCounter.css';
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const ItemCounter = (props: { product: Product }) => {
    // hook: a way to use state and other React features in functional components
    const [count, setCount] = useState(0);
    const { product } = props;

    const hanfleCountChange = (newCount: number) => {
        if (newCount < 0) return;
        setCount(newCount);
    }
    return (
        <section className="item-row">
            <h3 className="item-name">{product.name}</h3>
            <p className="item-description">{product.description}</p>
            <p className="item-price">${product.price.toFixed(2)}</p>
            <p className="item-total">${(product.price * count).toFixed(2)}</p>

            <button onClick={() => hanfleCountChange(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => hanfleCountChange(count + 1)}>+</button>
        </section>
    );
}