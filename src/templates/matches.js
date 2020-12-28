import React from "react"
import { graphql } from "gatsby"

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
    return (
        <td
            style={{ padding: "1rem 2rem", textAlign: "center", color: "grey" }}
        >
            {value}
        </td>
    )
}
function whiteColor({ value }) {
    return (
        <td
            style={{
                padding: "1rem 2rem",
                textAlign: "center",
                color: "white",
            }}
        >
            {value}
        </td>
    )
}
function yellowColor({ value }) {
    return (
        <td
            style={{
                padding: "1rem 2rem",
                textAlign: "center",
                color: "yellow",
            }}
        >
            {value}
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
                {teams[value] && (
                    <>
                        <span>{teams[value].alias} </span>
                        <img
                            style={{ display: "inline-block", marginLeft: 5 }}
                            src={teams[value].logo}
                            width="30px"
                            alt="team"
                        />
                    </>
                )}
            </div>
        </td>
    )
}

export default function Home({ data }) {
    const records = data.allDeliveriesCsv.nodes.filter(
        (node) => node.dismissal_kind || node.batsman_runs > 3
    )
    return (
        <div>
            <NavBar
                logo={logo}
                items={[
                    { name: "Teams", href: "/teams" },
                    { name: "Players", href: "/players" },
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
                    title={"Highlights"}
                    headers={[
                        "over",
                        "inning",
                        "ball",
                        "Batting",
                        "Bowling",
                        "Batsman",
                        "Bowler",
                        "Dismissal",
                        "Runs",
                    ]}
                    fields={[
                        { name: "over", element: yellowColor },
                        { name: "inning", element: greyColor },
                        { name: "ball", element: greyColor },
                        { name: "batting_team", element: icons },
                        { name: "bowling_team", element: icons },
                        { name: "batsman", element: whiteColor },
                        { name: "bowler", element: whiteColor },
                        { name: "dismissal_kind", element: whiteColor },
                        { name: "batsman_runs", element: whiteColor },
                    ]}
                    records={records}
                />
            </div>
        </div>
    )
}

export const query = graphql`
    query MatchDelivery($match_id: String) {
        allDeliveriesCsv(filter: { match_id: { eq: $match_id } }) {
            nodes {
                ball
                over
                batsman
                batsman_runs
                batting_team
                bowler
                bowling_team
                dismissal_kind
                inning
                match_id
            }
        }
    }
`
