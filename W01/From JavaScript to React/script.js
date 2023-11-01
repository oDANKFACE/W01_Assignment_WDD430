
const app = document.getElementById('app');

function Header({title}) {
    return (<h1>{title ? title : 'No Prop For You'}</h1>)
}



function HomePage() {
    const colors = ['red', 'green', 'blue'];

    const [clicks, setClicks] = React.useState(0);

    function handleClick() {
        console.log('You clicked!');
        setClicks(clicks + 1);
    }

    return (
        <div>
            <Header title='I Had A Prop Passed To Me' />
            <Header />
            <ul>
                {colors.map(color => (
                    <li>{color}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Click Counter: {clicks}</button>
        </div>
        );
}


ReactDOM.render(<HomePage />, app);

