import React from "react"
import * as d3 from "d3"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IPLData from "../data/ipl-2020-data.json"

const IPLTeamViz = () => {
    console.log(d3.version)
    const iplData = IPLData
    
    return (
        <Layout navLocation="misc">
            <SEO title="Blog" />
            {
                console.log(iplData)
            }
        </Layout>
)}

export default IPLTeamViz