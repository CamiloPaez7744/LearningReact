// pro tip: declare variables outside of the component if they don't need to be re-evaluated on every render
const firstname = 'React';
const lastName = 'App';

const favoriteGames = ['Gears of War', 'Halo', 'Forza Horizon'];
const isDeveloper = true;

const address = {
    street: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
};

const myStyle: React.CSSProperties = {
    backgroundColor: 'blue',
    borderRadius: isDeveloper ? 25 : 10,
    padding: 10
};

// functional component
export function MyAwesomeApp() {
    return (
        // JSX, a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files
        // Fragment, a way to group elements without adding extra nodes to the DOM
        <>
            <h1>{firstname}</h1>
            <h3>{lastName}</h3>
            <p style={myStyle}>{address.street}</p>
            <p>{address.city}, {address.state} {address.zip}</p>

            <h2>My favorite games:</h2>
            <ul>
                {favoriteGames.map(game => <li key={game}>{game}</li>)}
            </ul>

            <h1>{isDeveloper ? 'I am a developer!' : 'I am not a developer.'}</h1>
        </>
    )
}
