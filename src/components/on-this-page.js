import React from "react"
import * as onThisPageStyles from "./on-this-page.module.css"

export default function OnThisPage({ toc }) {
    if (!toc) {
        return null;
    }

    return (
        <div className={onThisPageStyles.ContentsContainer}>
            <h2>On this page</h2>
            <div
                className={onThisPageStyles.Contents}
                dangerouslySetInnerHTML={{ __html: toc }}
            />
        </div>
    )
}