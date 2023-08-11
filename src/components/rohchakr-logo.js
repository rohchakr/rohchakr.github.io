import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const RohChakrLogo = () => {
    return (
        <StaticImage src="../images/rohchakr_icon_512_512.png" alt="Logo" placeholder="blurred" layout="fixed" width={50} height={50} />
    )
}

export default RohChakrLogo;