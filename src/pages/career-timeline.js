import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout navLocation="career-timeline">
    <SEO title="Career Timeline" />

    <h5>2020</h5>
    <p>Learnt data visualization concepts. Designed and developed advanced visualizations using d3.js.</p>

    <h5>2019</h5>
    <p>Introduced to full-stack web development based on JavaEE-JSP stack. Fixed security vulnerabilities.</p>

    <h5>2018</h5>
    <p>Started job at Oracle as an Applications Developer. Worked with Docker and Kubernetes(minikube).</p>
    
    <h5>2017</h5>
    <p>Introduced to Machine Learning and Natural Language Processing. Carried out a research work in Twitter Network Analysis.</p>

    <h5>2016</h5>
    <p>Got started with Android Development. Developed and deployed an app in Google Play Store.</p>

    <h5>2015</h5>
    <p>Introduced to Linux and open source softwares for the first time. Learnt about dual-boot and disk partitions. Learnt basic CSS and JavaScript.</p>

    <h5>2014</h5>
    <p>Got started with C and gcc compiler. Practised algorithmic problems in CodeChef.</p>

    <h5>2012</h5>
    <p>Introduced to sorting algorithms - bubble sort, selection sort, insertion sort and merge sort. Completed my first application - A C++ Calender application as part of school project</p>

    <h5>2011</h5>
    <p>Introduced to Object Oriented Programming paradigm, linked-lists stack and queue data structures.</p>

    <h5>2008</h5>
    <p>Got started with C++ (Turbo C++ compiler)</p>

    <h5>2007</h5>
    <p>Learnt arrays, conditional statements and loops(GOTO statement).</p>

    <h5>2006</h5>
    <p>Worked with my first high-level programming language - BASIC. Learnt to create basic web page in HTML.</p>

    <h5>2005</h5>
    <p>Got first glimpse of algorithm, flowchart, programming and command line interface. Learnt to draw shapes and patterns in LOGO.</p>
    
    <h5>2003</h5>
    <p>First time studied Computer Science as a course curriculum in school. Got hands into Typing Tutor and MS-Paint.</p>
    
  </Layout>
)

export default IndexPage
