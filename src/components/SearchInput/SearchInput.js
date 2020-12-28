import React from "react"
import PropTypes from "prop-types"
import styles from "./SearchInput.module.css"

export default function SearchInput({ className, value, onChange }) {
    return (
        <input
            type="search"
            className={`${styles.input} ${className}`}
            value={value}
            onChange={onChange}
        />
    )
}

SearchInput.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
}
