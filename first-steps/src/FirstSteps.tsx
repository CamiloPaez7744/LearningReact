import { ItemCounter } from './shopping-cart/ItemCounter';

const products = [
    {
        id: 1,
        name: 'Gears of War 3',
        description: 'Gears of War 3 is a third-person shooter video game developed by Epic Games and published by Microsoft Studios.',
        price: 39.99,
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Gears_of_War_3_Coverart.jpg'
    },
    {
        id: 2,
        name: 'The Legend of Zelda: Breath of the Wild',
        description: 'The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo.',
        price: 59.99,
        image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/The_Legend_of_Zelda_Breath_of_the_Wild_Box_Art.jpg'
    },
    {
        id: 3,
        name: 'Cuphead',
        description: 'Cuphead is a run and gun platformer video game developed by Studio MDHR.',
        price: 19.99,
        image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Cuphead_cover_art.jpg'
    }
];
export function FirstStepsApp() {
    return (
        <>
            <h1>Hello, the best shopping cart!</h1>
            <p>Best games of the world!</p>
            <ItemCounter product={products[0]} />
            <ItemCounter product={products[1]} />
            <ItemCounter product={products[2]} />

            <button onClick={() => alert('Button clicked!')}>Click me</button>
        </>
    );
}
