import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <div className="component2-container1">
        <span className="component2-text">{props.text}</span>
      </div>
      <div className="component2-container2">
        <span className="component2-text1">{props.text1}</span>
        <span className="component2-text2">{props.text2}</span>
        <span className="component2-text3">{props.text3}</span>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  text2:
    'AMA Sessions: Schedule and promote monthly AMA sessions with artists and creators on platforms like Discord or Twitter Spaces, focusing on different themes each month.',
  text1:
    "> Engagement Strategies: Develop weekly content calendars for social media to engage the community with trivia, polls, and discussions related to Lord Ram's stories and the art.",
  text: 'Community Building',
  text3:
    'Loyalty Program: Implement a rewards system where community members earn points for engagement, which can be redeemed for exclusive content or discounts on future NFT purchases.',
}

Component2.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default Component2
