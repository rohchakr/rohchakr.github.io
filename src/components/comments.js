import React from "react"
import Giscus from "@giscus/react"
import * as commentsStyles from "./comments.module.css"

export default function Comments() {
    return (
        <div className={commentsStyles.CommentsContainer}>
            <Giscus
                repo="rohchakr/rohchakr-comments-server"
                repoId="R_kgDOKJb3mw"
                category="Announcements"
                categoryId="DIC_kwDOKJb3m84CY0lb"
                mapping="title"
                strict="1"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light"
                lang="en"
                loading="lazy"
                crossorigin="anonymous"
                asyncConfig="1"
            />
        </div>
    )
}