import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>
                ecommerce
            </h1>
            <div >
                <button onClick={() => { console.log("muestrame figuras") }}>figura 1</button>
                <button>figura 2</button>
                <button>figura 3</button>
            </div>
        </nav>
    )
}

export default Navbar