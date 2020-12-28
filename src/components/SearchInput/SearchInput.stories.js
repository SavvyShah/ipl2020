import React from "react"

import SearchInput from "./SearchInput"

export default {
    title: "Main/SearchInput",
    component: SearchInput,
}

const Template = (args) => <SearchInput {...args} />

export const Primary = Template.bind({})
Primary.parameters = {}
Primary.args = {}
