import React, { useState, useRef } from "react"
import { graphql, Link } from "gatsby"

import styles from "./home.module.css"

import HomeNav from "../../components/HomeNav"
import Table from "../../components/Table/Table"
import Select from "../../components/Select/Select"

import csk from "../../images/teams/logos/csk.png"
import mi from "../../images/teams/logos/mi.png"
import dd from "../../images/teams/logos/dd.png"
import gl from "../../images/teams/logos/gl.png"
import ktk from "../../images/teams/logos/ktk.png"
import pwi from "../../images/teams/logos/pwi.png"
import kkr from "../../images/teams/logos/kkr.png"
import kxip from "../../images/teams/logos/kxip.png"
import srh from "../../images/teams/logos/srh.png"
import rcb from "../../images/teams/logos/rcb.png"

const RECORD_LIMIT = 10
const SEASONS = [
    "IPL-2019",
    "IPL-2018",
    "IPL-2017",
    "IPL-2016",
    "IPL-2015",
    "IPL-2014",
]
const CITY = [
    "Hyderabad",
    "Pune",
    "Rajkot",
    "Indore",
    "Bangalore",
    "Mumbai",
    "Kolkata",
    "Delhi",
    "Chandigarh",
    "Cape Town",
    "Durban",
    "Port Elizabeth",
    "Centurion",
    "Jaipur",
    "Chennai",
    "Johannesburg",
    "Bloemfontein",
]

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

function firstFew(data) {
    return data.filter((x, key) => key < RECORD_LIMIT)
}

export default function Home({ data }) {
    const matches = data.allMatchesCsv.nodes
    const [records, setRecords] = useState(firstFew(matches))
    const citySelect = useRef()
    const seasonSelect = useRef()
    const selectChange = () => {
        const selectedSeason = seasonSelect.current.value
        const selectedCity = citySelect.current.value
        const selected = { Season: selectedSeason, city: selectedCity }

        setRecords(
            matches.filter((record) => {
                for (let prop in selected) {
                    if (selected[prop] && selected[prop] !== record[prop]) {
                        return false
                    }
                }
                return true
            })
        )
    }

    return (
        <div>
            <HomeNav />
            <div
                style={{
                    position: "relative",
                    top: "100px",
                    fontFamily: "Bai Jamjuree",
                }}
            >
                <div style={{ display: "flex" }}>
                    <Select
                        options={CITY}
                        name="City"
                        selectRef={citySelect}
                        onChange={selectChange}
                        className={styles.select}
                    />
                    <Select
                        options={SEASONS}
                        name="Season"
                        selectRef={seasonSelect}
                        onChange={selectChange}
                        className={styles.select}
                    />
                </div>
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
                    records={records}
                    uniqueRowId="id"
                />
            </div>
        </div>
    )
}

export const query = graphql`
    query MyAllMatchQuery {
        allMatchesCsv {
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
