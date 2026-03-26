// functional component
export function MyAwesomeApp() {

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

    return (
        // Fragment, a way to group elements without adding extra nodes to the DOM
        <>
            <h1>{firstname}</h1>
            <h3>{lastName}</h3>
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.zip}</p>

            <h2>My favorite games:</h2>
            <ul>
                {favoriteGames.map(game => <li key={game}>{game}</li>)}
            </ul>

            <h1>{isDeveloper ? 'I am a developer!' : 'I am not a developer.'}</h1>
        </>
    )
}
