import React from "react"
import * as retroTimelineStyles from "./retro-timeline.module.scss"

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
const professionalData = {
    "JAN": ["Enhanced CRM Performance"],
    "FEB": ["Promoted to Senior Software Engineer", "Enhanced CRM Performance"],
    "MAR": ["Enhanced CRM Performance"],
    "APR": ["Built New CRM Foundation Features"],
    "MAY": ["Built New CRM Foundation Features"],
    "JUN": ["Built New CRM Foundation Features"],
    "JUL": ["Designed Authorization Enhancements"],
    "AUG": ["Received Llama Award", "Designed Authorization Enhancements", "Resolved Critical Customer Issues", "Facilitated Security Enhancements"],
    "SEP": ["Resolved Critical Customer Issues", "Facilitated Security Enhancements"],
    "OCT": ["Resolved Critical Customer Issues", "Facilitated Security Enhancements"],
    "NOV": ["Received Freddie Galactic Gratitude Award", "Transitioned to AI Agents Team", "Developed New AI Agent Features"],
    "DEC": ["Developed New AI Agent Features"]
}
const personalData = {
    "JAN": [],
    "FEB": [],
    "MAR": ["Grandmother’s Funeral in Kolkata", "Moved to a Larger Home"],
    "APR": ["Kodaikanal Trip"],
    "MAY": ["Purchased Air Conditioner"],
    "JUN": ["Bike Trip to Medak"],
    "JUL": [],
    "AUG": ["Purchased New Phone"],
    "SEP": ["Achieved Financial Milestone"],
    "OCT": [],
    "NOV": ["Bhaifota in Kolkata"],
    "DEC": ["Finalized Wedding Plans"]
}

const MonthBlock = ({ monthName }) => {
    let lineClassName = retroTimelineStyles.Line;
    if (monthName === "JAN") {
        lineClassName = retroTimelineStyles.LineFirst;
    } else if (monthName === "DEC") {
        lineClassName = retroTimelineStyles.LineLast;
    }

    const leftLineNeeded = personalData[monthName].length > 0;
    const rightLineNeeded = professionalData[monthName].length > 0;

    return (
        <div className={retroTimelineStyles.MonthBlock}>
            <div className={lineClassName}></div>
            <div className={retroTimelineStyles.PersonalExperienceBlock}>
                <ul>
                    {personalData[monthName].map((event, index) => <li key={index}>{event}</li>)}
                </ul>
            </div>
            <div className={retroTimelineStyles.MonthLabelBlock}>
                {leftLineNeeded && <div className={retroTimelineStyles.LeftLine}></div>}
                <div className={retroTimelineStyles.MonthLabelText}>{monthName}</div>
                {rightLineNeeded && <div className={retroTimelineStyles.RightLine}></div>}
            </div>
            <div className={retroTimelineStyles.ProfessionalExperienceBlock}>
                <ul>
                    {professionalData[monthName].map((event, index) => {
                        if (event.indexOf("Award") > -1 || event.indexOf("Promoted") > -1 || event.indexOf("Transitioned") > -1) {
                            return <li key={index} className={retroTimelineStyles.Award}>{event}</li>
                        }
                        return <li key={index}>{event}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default function RetroTimeline() {
    return (
        <div>
            <h2>Timeline</h2>
            {months.map((month, index) => <MonthBlock key={index} monthName={month} />)}
        </div>
    )
}