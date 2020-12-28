import React from "react"
import { graphql, Link } from "gatsby"

import styles from "./home.module.css"

import HomeNav from "../components/HomeNav"
import Table from "../components/Table/Table"

import teams from "../components/IplTeams"

import Layout from "../components/Layout/Layout"

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
            <Link to={`/matches/${value}`} className={styles.link}>
                View Highlights
            </Link>
        </td>
    )
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
            <HomeNav />
            <Layout>
                <Table
                    title={"Matches in 2017"}
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
            </Layout>
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
