import React from "react"
import Giscus from "@giscus/react"

export default function Comments() {
    return (
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
    )
}