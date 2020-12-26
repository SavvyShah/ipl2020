import React from "react"

import ProfileCard from "./ProfileCard"

import symbol from "../../images/teams/new_zealand.png"

export default {
    title: "Main/ProfileCard",
    component: ProfileCard,
}

const Template = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.parameters = {}
Primary.args = {
    symbol,
    name: "Ashish Reddy",
    profile: {
        "Date of birth": "24-Feb-91",
        Country: "India",
        "Batting hand": "Right hand",
    },
}
