import React from "react"

import NavBar from "./NavBar/NavBar"

import logo from "../images/logo.png"

export default function HomeNav() {
    return (
        <NavBar
            logo={logo}
            items={[
                { name: "Teams", href: "/teams" },
                { name: "Players", href: "/players" },
                { name: "Matches", href: "/matches" },
            ]}
        />
    )
}
