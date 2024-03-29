import React from "react"

export const Head = () => (
  <>
    <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
  </>
)

const LnBadgeComponent = () => {

  return (
    <>
      <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="rohchakr"><a class="LI-simple-link" href='https://in.linkedin.com/in/rohchakr?trk=profile-badge'>Rohit Chakraborty</a></div>
    </>
  )
}

export default LnBadgeComponent