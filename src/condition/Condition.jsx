import styles from "./Style.module.css"
import propTypes from "prop-types"

function Condition(args) {
    const trueState = <>
        <p className={styles.conditionTrue}>True</p>
    </>

    const falseState = <>
        <p className={styles.conditionFalse}>False</p>
    </>

    return (
        args.isTrue ? trueState : falseState
    )
}

Condition.propTypes = {
    isTrue : propTypes.bool
}

Condition.defaultProps = {
    isTrue : true
}

export default Condition