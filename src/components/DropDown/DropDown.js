import React from "react"
import PropTypes from "prop-types"

import styles from "./DropDown.module.css"

import { FaTimes } from "react-icons/fa"

export default function Component({ data, title }) {
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown__head}>
                <div>{title}</div>
                <div className={styles.cross}>X</div>
            </div>
            {data.map((item) => {
                return (
                    <div className={styles.dropdown__item} key={item.content}>
                        {item.content}
                    </div>
                )
            })}
        </div>
    )
}

Component.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ content: PropTypes.string }))
        .isRequired,
    title: PropTypes.string.isRequired,
}
