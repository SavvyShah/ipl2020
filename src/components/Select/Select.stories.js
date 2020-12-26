import React from "react"

import Select from "./Select"

export default {
    title: "Main/Select",
    component: Select,
}

const Template = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.parameters = {}
Primary.args = {
    name: "Country",
    options: ["India", "New Zealand", "Australia"],
}
