import React from "react"
// import { Link } from "gatsby"

import { MdOpenInNew } from "react-icons/md"
import Layout from "../components/layout"
// import Image from "../components/image"
import { SEO } from "../components/seo"

const IndexPage = () => (
  <Layout navLocation="career-timeline">
    <SEO title="Career Timeline | rohchakr" />

    <a href="https://rohchakr.github.io/resume/RohitChakraborty_Resume.pdf" target="_blank" style={{textDecoration: `none`}}><button className="resumeButton"><p>Resume</p><MdOpenInNew /></button></a>

    <h5>2020</h5>
    <p>Invested more in code quality and design patterns. Learnt data visualization concepts. Interacted more with the strategy team. Designed and developed advanced visualizations for Oracle Construction Intelligence Cloud. My first github PR got merged. Started working for my website.</p>

    <h5>2019</h5>
    <p>Introduced to full-stack web development based on JavaEE-JSP stack. Actively participated in code-reviews and documentation. Fixed security vulnerabilities. Got a better understanding of the Software Development life-cycle and various cross-teams involved with it. Contributed towards debugging and fixing production issues.</p>

    <h5>2018</h5>
    <p>Started job at Oracle as an Applications Developer. Worked with Docker and Kubernetes(minikube). Contributed towards development of docker image for Oracle Primavera Analytics Administration application.</p>
    
    <h5>2017</h5>
    <p>Introduced to Machine Learning and Natural Language Processing. Carried out a research work in Twitter Network Analysis which got published in 2019.</p>

    <h5>2016</h5>
    <p>Got started with Android Development. Developed and deployed an app in Google Play Store. Studied Algorithms, Graph Theory, Database Management Systems, Operating Systems and Networking. Learnt simple assembly level adders and multipliers for Intel-8085 processor.</p>

    <h5>2015</h5>
    <p>Introduced to Linux and open source softwares for the first time. Learnt about dual-boot and disk partitions. Learnt basic CSS and JavaScript. Studied Data Structures, Discrete Mathematics, Logic Circuits and Communication protocols in detail.</p>

    <h5>2014</h5>
    <p>Started B.Tech course in Computer Science and Engineering at National Institute of Technology, Agartala, India. Got started with C and gcc compiler. Practised algorithmic problems in CodeChef.</p>

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
