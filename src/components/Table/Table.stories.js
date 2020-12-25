import React from "react"

import ENG from "../../images/teams/england.png"
import IND from "../../images/teams/india.png"

import Table from "./Table"

export default {
    title: "Main/Table",
    component: Table,
}

const countryIcons = {
    India: IND,
    England: ENG,
}

const records = [
    {
        Player_Name: "A Ashish Reddy",
        DOB: "24-Feb-91",
        Country: "India",
        Batting_Hand: "Right_Hand",
    },
    {
        Player_Name: "A Chandila",
        DOB: "05-Dec-83",
        Country: "India",
        Batting_Hand: "Right_Hand",
    },
    {
        Player_Name: "A Chopra",
        DOB: "19-Sep-77",
        Country: "India",
        Batting_Hand: "Right_Hand",
    },
    {
        Player_Name: "A Choudhary",
        DOB: "",
        Country: "",
        Batting_Hand: "Right_hand",
    },
    {
        Player_Name: "A Dananjaya",
        DOB: "",
        Country: "",
        Batting_Hand: "Right_Hand",
    },
    {
        Player_Name: "A Flintoff",
        DOB: "06-Dec-77",
        Country: "England",
        Batting_Hand: "Right_Hand",
    },
    {
        Player_Name: "A Hales",
        DOB: "",
        Country: "",
        Batting_Hand: "Right_hand",
    },
    {
        Player_Name: "A Joseph",
        DOB: "",
        Country: "",
        Batting_Hand: "Right_Hand",
    },
    {
        Player_Name: "A Kumble",
        DOB: "17-Oct-70",
        Country: "India",
        Batting_Hand: "Right_Hand",
    },
    {
        Player_Name: "A Mishra",
        DOB: "24-Nov-82",
        Country: "India",
        Batting_Hand: "Right_Hand",
    },
]
const Template = (args) => <Table {...args} />

export const Primary = Template.bind({})
Primary.parameters = {
    backgrounds: { default: "light" },
}
function TextWithIcon({ value }) {
    return (
        <td style={{ color: "white", padding: "1rem 5rem" }}>
            {countryIcons[value] && (
                <img
                    alt="country-flag"
                    width="30px"
                    src={countryIcons[value]}
                />
            )}
        </td>
    )
}
function GreyColor({ value }) {
    return (
        <td
            style={{ color: "grey", padding: "1rem 5rem", textAlign: "center" }}
        >
            {value || "---"}
        </td>
    )
}
Primary.args = {
    records,
    fields: [
        { name: "Player_Name", element: GreyColor },
        { name: "Country", element: TextWithIcon },
        { name: "DOB", element: GreyColor },
        { name: "Batting_Hand", element: GreyColor },
    ],
    headers: ["Name", "Country", "Date of birth", "Batting hand"],
}
