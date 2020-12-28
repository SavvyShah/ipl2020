import React from "react"
import PropTypes from "prop-types"
import styles from "./Select.module.css"

export default function Select({
    selectRef,
    options,
    name,
    onChange,
    className,
}) {
    return (
        <select
            onChange={onChange}
            className={`${styles.select} ${className}`}
            name={name}
            ref={selectRef}
        >
            <option value="">{name}</option>
            {options.map((option, key) => (
                <option key={`${option}${key}`} value={option}>{option}</option>
            ))}
        </select>
    )
}

Select.propTypes = {
    selectRef: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
}
