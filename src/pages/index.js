import React from "react"
import { graphql, Link } from "gatsby"

import styles from "./home.module.css"

import NavBar from "../components/NavBar/NavBar"
import Table from "../components/Table/Table"

import logo from "../images/logo.png"
import csk from "../images/teams/logos/csk.png"
import mi from "../images/teams/logos/mi.png"
import dd from "../images/teams/logos/dd.png"
import gl from "../images/teams/logos/gl.png"
import ktk from "../images/teams/logos/ktk.png"
import pwi from "../images/teams/logos/pwi.png"
import kkr from "../images/teams/logos/kkr.png"
import kxip from "../images/teams/logos/kxip.png"
import srh from "../images/teams/logos/srh.png"
import rcb from "../images/teams/logos/rcb.png"

function greyColor({ value }) {
    return <td style={{ color: "grey", padding: "1rem 2rem" }}>{value}</td>
}
function whiteColor({ value }) {
    return <td style={{ color: "white", padding: "1rem 2rem" }}>{value}</td>
}
function season({ value }) {
    return (
        <td style={{ color: "yellow", padding: "1rem 2rem" }}>
            {value.substr(4)}
        </td>
    )
}
function HighlightsLink({ value }) {
    return (
        <td style={{ padding: "1rem 2rem" }}>
            <Link
                to={`/matches/${Math.ceil(value / 40)}`}
                className={styles.link}
            >
                View Highlights
            </Link>
        </td>
    )
}

const teams = {
    "Sunrisers Hyderabad": { logo: srh, alias: "SRH" },
    "Mumbai Indians": { logo: mi, alias: "MI" },
    "Gujarat Lions": { logo: gl, alias: "GL" },
    "Kolkata Knight Riders": { logo: kkr, alias: "KKR" },
    "Rising Pune Supergiant": { logo: pwi, alias: "PWI" },
    "Kings XI Punjab": { logo: kxip, alias: "KXIP" },
    "Delhi Daredevils": { logo: dd, alias: "DD" },
    "Royal Challengers Bangalore": { logo: rcb, alias: "RCB" },
    "Chennai Super Kings": { logo: csk, alias: "CSK" },
    "Kochi Tuskers Kerala": { logo: ktk, alias: "KTK" },
    "Deccan Chargers": { logo: srh, alias: "DC" },
}

function icons({ value }) {
    return (
        <td
            style={{
                color: "white",
                padding: "1rem 2rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <span>{teams[value].alias} </span>
                <img
                    style={{ display: "inline-block", marginLeft: 5 }}
                    src={teams[value].logo}
                    width="30px"
                    alt="team"
                />
            </div>
        </td>
    )
}

export default function Home({ data }) {
    return (
        <div>
            <NavBar
                logo={logo}
                items={[
                    { name: "Teams", href: "#" },
                    { name: "Players", href: "#" },
                    { name: "Matches", href: "/matches" },
                ]}
            />
            <div
                style={{
                    position: "relative",
                    top: "100px",
                    fontFamily: "Bai Jamjuree",
                }}
            >
                <Table
                    title={"Matches"}
                    headers={[
                        "Season",
                        "City",
                        "Date",
                        "Team",
                        "Team",
                        "Winner",
                        "Man of match",
                        "Venue",
                        "id",
                    ]}
                    fields={[
                        { name: "Season", element: season },
                        { name: "city", element: greyColor },
                        { name: "date", element: greyColor },
                        { name: "team1", element: icons },
                        { name: "team2", element: icons },
                        { name: "winner", element: whiteColor },
                        { name: "player_of_match", element: whiteColor },
                        { name: "venue", element: greyColor },
                        { name: "id", element: HighlightsLink },
                    ]}
                    records={data.allMatchesCsv.nodes}
                />
            </div>
        </div>
    )
}

export const query = graphql`
    query MyQuery {
        allMatchesCsv(limit: 30) {
            nodes {
                Season
                city
                date
                id
                player_of_match
                result
                team1
                team2
                venue
                winner
            }
        }
    }
`
