import React from "react"
import styles from "./Table.module.css"
import PropTypes from "prop-types"

function getValue(path = "", data = {}) {
    if (typeof path !== "string" && typeof data !== "object") {
        return null
    } else {
        const fields = path.split(".")
        let currentValue = data
        for (let i = 0; i < fields.length; i++) {
            if (currentValue[fields[i]]) {
                currentValue = currentValue[fields[i]]
            }
        }
        if (typeof currentValue !== "object") {
            return currentValue
        }
    }
}

export default function Table({ headers, fields, records, style, title }) {
    if (typeof records !== "object" && typeof records.length !== "number") {
        return null
    }
    return (
        <div className={styles.table}>
            <div className={styles.table__title}>{title}</div>
            <table style={style} className={styles.table__main}>
                <thead className={styles.table__head}>
                    <tr className={styles.table__headRow}>
                        {headers.map((header, key) => {
                            return (
                                <th
                                    className={styles.table__headCell}
                                    key={`${header}${key}`}
                                >
                                    {header}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className={styles.table__body}>
                    {records.map((record, key) => {
                        return (
                            <tr
                                className={styles.table__row}
                                key={record.id || key}
                            >
                                {fields.map((field, fieldKey) => {
                                    const Element = field.element
                                    const value = getValue(field.name, record)
                                    return (
                                        <Element
                                            key={`${value}${fieldKey}`}
                                            value={value}
                                        />
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    style: PropTypes.object,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, element: PropTypes.any })
    ).isRequired,
    records: PropTypes.arrayOf(PropTypes.object).isRequired,
}
