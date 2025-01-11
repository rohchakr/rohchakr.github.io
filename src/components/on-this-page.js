import React from "react"
import RetroTimeline from "../components/retro-timeline"
import * as onThisPageStyles from "./on-this-page.module.scss"

export default function OnThisPage({ toc, blogTitle }) {
    if (!toc) {
        return null;
    }

    let show2024Timeline = false;
    if (blogTitle === "2024: A Year of Growth | rohchakr") {
        show2024Timeline = true;
    }

    return (
        <div className={onThisPageStyles.ContentsContainer}>
            <h2>On this page</h2>
            <div
                className={onThisPageStyles.Contents}
                dangerouslySetInnerHTML={{ __html: toc }}
            />
            {show2024Timeline && (
                <RetroTimeline />
            )}
        </div>
    )
}