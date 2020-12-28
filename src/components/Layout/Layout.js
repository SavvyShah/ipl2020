import React from "react"

export default function Layout({ children }) {
    return (
        <div
            style={{
                position: "relative",
                top: "100px",
                fontFamily: "Bai Jamjuree",
            }}
        >
            {children}
        </div>
    )
}
