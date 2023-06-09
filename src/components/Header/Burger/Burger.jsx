import "./Burger.css"

const Burger = ({active, setActive}) => {
    
    return (
        <div className={active ? 'burger active' : 'burger'} onClick={() => setActive(!active)}>
            <span className="burgerCenter"></span>
        </div>
    )
}

export default Burger;