import React from "react"
import { graphql } from "gatsby"

import HomeNav from "../../components/HomeNav"
import Table from "../../components/Table/Table"

import teams from "../../components/IplTeams"

import Layout from "../../components/Layout/Layout"

function whiteColor({ value }) {
    return (
        <td
            style={{
                color: "white",
                padding: "1rem 2rem",
                textAlign: "center",
            }}
        >
            {value}
        </td>
    )
}
function percent({ value }) {
    const intValue = parseInt(value, 10)
    const styles = {
        padding: "1rem 2rem",
        textAlign: "center",
    }
    if (intValue < 20) {
        styles.color = "crimson"
    }
    if (intValue > 20 && intValue < 60) {
        styles.color = "yellow"
    }
    if (intValue > 60) {
        styles.color = "limegreen"
    }
    return <td style={{ ...styles }}>{intValue}%</td>
}

function icons({ value }) {
    return (
        <td
            style={{
                color: "white",
                padding: "1rem 2rem",
                textAlign: "center",
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
    return (
        <div>
            <HomeNav />
            <Layout>
                <Table
                    title={"Teams"}
                    headers={[
                        "Team",
                        "Home Matches",
                        "Away Matches",
                        "Home Win",
                        "Away Win",
                    ]}
                    fields={[
                        { name: "team", element: icons },
                        { name: "home_matches", element: whiteColor },
                        { name: "away_matches", element: whiteColor },
                        { name: "home_win_percentage", element: percent },
                        { name: "away_win_percentage", element: percent },
                    ]}
                    records={data.allTeamsCsv.nodes}
                />
            </Layout>
        </div>
    )
}

export const query = graphql`
    query MyAllTeamsQuery {
        allTeamsCsv {
            nodes {
                team
                home_matches
                away_matches
                home_win_percentage
                away_win_percentage
            }
        }
    }
`
