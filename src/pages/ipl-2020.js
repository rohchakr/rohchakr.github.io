import React, { useEffect } from "react"
import * as d3 from "d3"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IPLData from "../data/ipl-2020-data.json"

const createViz = (iplData) => {
    console.log(d3.version)
    console.log(iplData)
    var svg = d3.select('#svgWrapper').append('svg')
        .attr('width',500).attr('height',500)
        .style('border', '1px solid grey')
}

const IPLTeamViz = () => {
    useEffect(
        () => createViz(IPLData),
        []
    )

    return (
        <Layout navLocation="misc">
            <SEO title="IPL 2020 Team Viz" />
            <div id='svgWrapper'></div>
        </Layout>
    )
}

export default IPLTeamViz