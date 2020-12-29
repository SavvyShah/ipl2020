import React, { useState, useRef } from "react"
import { graphql } from "gatsby"

import HomeNav from "../../components/HomeNav"
import Layout from "../../components/Layout/Layout"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

import AU from "../../images/teams/logos/australia.png"
import EN from "../../images/teams/logos/england.png"
import IN from "../../images/teams/logos/india.png"
import NZ from "../../images/teams/logos/new_zealand.png"
import PK from "../../images/teams/logos/pakistan.png"
import SA from "../../images/teams/logos/south_africa.png"
import WI from "../../images/teams/logos/west_indies.png"
import SL from "../../images/teams/logos/sri_lanka.png"
import SearchInput from "../../components/SearchInput/SearchInput"

const symbols = {
    India: IN,
    "South Africa": SA,
    Australia: AU,
    Pakistan: PK,
    "West Indies": WI,
    "Sri Lanka": SL,
    "New Zealand": NZ,
    England: EN,
}

const RECORD_LIMIT = 10
const SEARCH_AFTER_MILLISECS = 500

function firstFew(data) {
    return data.filter((x, key) => key < RECORD_LIMIT)
}

export default function Home({ data }) {
    const timer = useRef()
    const players = data.allPlayersCsv.nodes
    const [records, setRecords] = useState(firstFew(players))
    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        let currentVal = e.target.value
        setSearch(e.target.value)
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            const regexStr = currentVal.split(/\s+/)
            const firstNameRegex =
                regexStr[0] && new RegExp(`^${regexStr[0]}`, "i")
            const lastNameRegex =
                regexStr[1] && new RegExp(`${regexStr[1]}$`, "i")
            setRecords(
                players.filter((player) => {
                    if (!firstNameRegex) {
                        return false
                    }
                    if (!lastNameRegex) {
                        const tempRegex = new RegExp(`${regexStr[0]}$`, "i")
                        return (
                            firstNameRegex.test(player.Player_Name) ||
                            tempRegex.test(player.Player_Name)
                        )
                    }
                    return (
                        firstNameRegex.test(player.Player_Name) ||
                        lastNameRegex.test(player.Player_Name)
                    )
                })
            )
        }, SEARCH_AFTER_MILLISECS)
    }

    return (
        <div>
            <HomeNav />
            <Layout>
                <SearchInput value={search} onChange={handleSearch} />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {records.map((record) => {
                        const { Player_Name, ...profile } = record
                        return (
                            <ProfileCard
                                symbol={symbols[profile.Country]}
                                key={`${Player_Name}-${profile.Country}`}
                                name={Player_Name}
                                profile={profile}
                            />
                        )
                    })}
                </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
    query MyAllPlayerQuery {
        allPlayersCsv {
            nodes {
                Player_Name
                Country
                DOB
                Batting_Hand
                Bowling_Skill
            }
        }
    }
`
