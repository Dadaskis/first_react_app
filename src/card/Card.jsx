import styles from './Style.module.css'
import placeholder from './placeholder.svg'

import PropTypes from 'prop-types'

function Card(args) {
    return (
        <div className={styles.card}>
            <img className={styles.card_image} src={args.img} alt="Profile Picture"></img>
            <h2>{args.name}</h2>
            <p>{args.desc}</p>
        </div>
    )
}

Card.propTypes = {
    img : PropTypes.object,
    name : PropTypes.string,
    desc : PropTypes.string
}

Card.defaultProps = {
    img : placeholder,
    name : "Undefined name",
    desc : "No description available"
}

export default Card