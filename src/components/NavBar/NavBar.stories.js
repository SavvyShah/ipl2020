import React from "react"

import logo from "../../images/logo.png"

import NavBar from "./NavBar"

export default {
    title: "Main/NavBar",
    component: NavBar,
}

const Template = (args) => <NavBar {...args} />

export const Primary = Template.bind({})
Primary.parameters = {}
Primary.args = {
    logo,
    items: [
        {
            name: "Teams",
        },
        { name: "Players" },
        { name: "Matches" },
    ],
}
