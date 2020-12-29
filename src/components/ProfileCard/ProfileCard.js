import React from "react"
import PropTypes from "prop-types"

import styles from "./ProfileCard.module.css"

export default function ProfileCard({ symbol, name, profile }) {
    return (
        <div className={styles.card}>
            {symbol && (
                <div className={styles.card__symbolContainer}>
                    <img className={styles.card__symbol} src={symbol} alt="Symbol" />
                </div>
            )}
            <div className={styles.card__firstName}>{name.split(/\s+/)[0]}</div>
            <div className={styles.card__lastName}>{name.split(/\s+/)[1]}</div>
            <table className={styles.card__profileTable}>
                <tbody>
                    {Object.keys(profile).map((prop, key) => {
                        return (
                            <tr key={key} className={styles.card__profileTableRow}>
                                <td className={styles.card__profileTableField}>
                                    {prop}
                                </td>
                                <td className={styles.card__profileTableValue}>
                                    {profile[prop]}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

ProfileCard.propTypes = {
    symbol: PropTypes.string,
    name: PropTypes.string,
    profile: PropTypes.object,
}
