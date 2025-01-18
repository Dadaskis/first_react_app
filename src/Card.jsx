import placeholderImg from "./assets/react.svg"

function Card() {
    return (
        <div className="card">
            <img src={placeholderImg} alt="Profile Picture" className="image"></img>
            <h2>Cardholder Name</h2>
            <p>Fancy card description</p>
        </div>
    )
}

export default Card