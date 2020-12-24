import React, { useEffect } from "react"
import * as d3 from "d3"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CareerData from "../data/career-timeline.json"

const createViz = (careerData) => {
    console.log(d3.version)
    console.log(careerData)
    
    document.getElementById("svgWrapper").appendChild(chart(careerData))
}

const CareerTimelineViz = () => {
    useEffect(
        () => createViz(CareerData),
        []
    )

    return (
        <Layout navLocation="career-timeline">
            <SEO title="Career Timeline" />
            <div id='svgWrapper'>
            </div>
        </Layout>
    )
}

export default CareerTimelineViz

const chart = (data) => {
    // Main Timeline Axis
    const t1x = {}
    t1x.domain = [1990, 2025]
    t1x.tickValues = [1995, 2000, 2011, 2013, 2014, 2018, 2020]
    
    const height = 300
    const width = 400
    const svg = d3.create("svg")
        .attr("id", "chartCanvas")
        .attr("viewBox", [0, 0, width, height])

    const xGap = 10

    t1x.range = [xGap, width - xGap]
    t1x.scale = d3.scaleLinear().domain(t1x.domain).range(t1x.range)
    t1x.axis = d3.axisBottom(t1x.scale)
                    .tickValues(t1x.tickValues)
                    .tickFormat(d => d3.format("d")(d))
                    
    console.log(t1x)

    svg.append("g")
        .attr("class", "taxis")
        .attr("transform", "translate(0, 100)") // default tick size = 6
        .call(t1x.axis)
        .call(g => g.select('.domain').remove()) // https://observablehq.com/@d3/styled-axes

    let tbarPath = ''
    const halfTbarWidth = {
        "start": 2.5,
        "end": 10
    }
    console.log(halfTbarWidth)

    tbarPath = tbarPath.concat('m ' + xGap + '-' + halfTbarWidth.start)
        .concat(' l ' + halfTbarWidth.start + ' ' + halfTbarWidth.start)
        .concat(' l ' + (width - 2 * xGap - halfTbarWidth.end - halfTbarWidth.start) + ' 0')
        .concat(' l ' + halfTbarWidth.end + ' -' + halfTbarWidth.end)
        .concat(' l -' + halfTbarWidth.end + ' -' + halfTbarWidth.end)
        .concat(' l -' + (width - 2 * xGap - halfTbarWidth.end - halfTbarWidth.start) + ' ' + 2 * (halfTbarWidth.end - halfTbarWidth.start))
        .concat(' z')

    svg.append("path")
        .attr("class", "tbar")
        .attr("transform", "translate(0, 100)")
        .attr("stroke", "black")
        .attr("fill", "none")
        .attr("d", tbarPath)


    return svg.node();
}