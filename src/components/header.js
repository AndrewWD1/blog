import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background: #477e5b;
  margin-bottom: 1.54rem;
`

const HeaderDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const HeaderH1 = styled.h1`
  margin: 0;
`

const HeaderLink = styled(Link)`
  color: rgba(255, 255, 255);
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderDiv>
      <HeaderH1>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </HeaderH1>
    </HeaderDiv>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
