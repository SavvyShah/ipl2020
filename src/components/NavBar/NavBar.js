import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styles from "./NavBar.module.css"

export default function Component({ items, logo }) {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img className={styles.logo__img} alt={"Logo"} src={logo}></img>
            </div>
            {items.map((item, key) => {
                return (
                    <Link
                        key={`${item.name}${key}`}
                        className={styles.nav__item}
                        href={item.href}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>
    )
}

Component.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string,
        })
    ),
    logo: PropTypes.string,
}
