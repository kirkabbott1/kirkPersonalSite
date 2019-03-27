import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        &#169; 2019 Kirk Abbott 
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
