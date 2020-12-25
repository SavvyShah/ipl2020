import React from "react"
import PropTypes from "prop-types"

import styles from "./NavBar.module.css"

export default function Component({ items, logo }) {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img className={styles.logo__img} alt={"Logo"} src={logo}></img>
            </div>
            {items.map((item) => {
                return (
                    <a className={styles.nav__item} href={item.href}>
                        {item.name}
                    </a>
                )
            })}
        </div>
    )
}

Component.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shapeOf({
            name: PropTypes.string.isRequired,
            href: PropTypes.string,
        })
    ),
    logo: PropTypes.string,
}
