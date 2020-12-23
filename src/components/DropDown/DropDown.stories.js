import React from "react"

import DropDown from "./DropDown"

export default {
    title: "Main/DropDown",
    component: DropDown,
    parameters: {
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#2c2c2c" },
                { name: "light", value: "#3b5998" },
            ],
        },
    },
}

const Template = (args) => <DropDown {...args} />

export const Primary = Template.bind({})
Primary.parameters = {
    backgrounds: { default: "dark" },
}
Primary.args = {
    data: [
        { content: "Feature requests" },
        { content: "Open issues and Pull requests" },
    ],
    title: "Frontend",
}
