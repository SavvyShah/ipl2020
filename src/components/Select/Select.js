import React from "react"
import PropTypes from "prop-types"
import styles from "./Select.module.css"

export default function Select({ selectRef, options, name }) {
    return (
        <select className={styles.select} name={name} ref={selectRef}>
            <option value="">Countries</option>
            {options.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
    )
}

Select.propTypes = {
    selectRef: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
}
