import React, { useEffect } from "react"
import * as d3 from "d3"

import Layout from "../components/layout"
import { SEO } from "../components/seo"
import IPLData from "../data/ipl-2020-data.json"

const createViz = (iplData) => {
    console.log(d3.version)
    console.log(iplData)
    // var svg = d3.select('#svgWrapper').append('svg')
    //     .attr('width',500).attr('height',500)
    //     .style('border', '1px solid grey')
    document.getElementById("svgWrapper").appendChild(chart(iplData))
    document.getElementById("chartCanvas").style.height = "50vh"
    // document.getElementById("chartCanvas").style.width = "80vw"
    // document.getElementById("chartCanvas").style.minWidth = "100%"
    document.getElementById("chartCanvas").style.maxWidth = "80vw"
}

const IPLTeamViz = () => {
    useEffect(
        () => createViz(IPLData),
        []
    )

    return (
        <Layout navLocation="misc">
            <SEO title="IPL 2020 Team Viz | rohchakr" />
            <div id='svgWrapper'>
            </div>
        </Layout>
    )
}

export default IPLTeamViz

const drag = simulation => {
  
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(event,d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    
    function dragended(event,d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged);
        // .on("end", dragended); // commented out to preserve the position after drag
}

const chart = (data) => {
const teams = data.map((team) => Object.keys(team)[0]);
let players = [];
data.forEach(item => {
    const team = Object.keys(item)[0];
    const squad = Object.values(item)[0];
    players = players.concat(squad.map(p => 
         ({"playerName":p.Name,"teamName":team, "price":p.Price})
    ));
});

const nodes = teams.map(t => ({"Name":t})).concat(players.map(p => ({"Name":p.playerName})))
const playerLinks = players.map(p => ({"source":p.playerName,"target":p.teamName}))
let teamLinks = []
teams.forEach((team1) => {
    teams.forEach((team2) => {
        if (team1 !== team2)
            teamLinks = teamLinks.concat({"source":team1, "target":team2})
    })
})

const links = playerLinks.concat(teamLinks)

const height = 300
const width = 400
const svg = d3.create("svg")
    .attr("id", "chartCanvas")
    .attr("viewBox", [-width/2, -height/2, width, height])

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.Name))
    .force("charge", d3.forceManyBody())
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    // .force("center", d3.forceCenter(250, 200))

const link = svg.append("g")
    .attr("stroke", "rgb(100, 60, 40)")
    .selectAll("line")
        .data(links)
        .join("line")
            .attr("stroke-width", 1)

const node = svg.append("g")
    // .attr("stroke", "blue")
    // .attr("stroke-width", 1.5)
    .selectAll("circle")
        .data(nodes)
        .join("circle")
            .attr("r", 5)
            .attr("fill", "rgb(225, 205, 200)")
            .call(drag(simulation))

    simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

//   invalidation.then(() => simulation.stop());

svg.call(d3.zoom()
    .extent([[0, 0], [width, height]])
    .scaleExtent([0.5, 8])
    .on("zoom", zoomed));

// function zoomed() {
//     node.attr("transform", d3.event.transform)
//     link.attr("transform", d3.event.transform)
// }

function zoomed({transform}) {
    node.attr("transform", transform)
    link.attr("transform", transform)
}

return svg.node();
}