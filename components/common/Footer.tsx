import React from 'react'
import { css } from '@emotion/react'

const YEAR = 2023

const Footer: React.FC = () => {
  const now = new Date().getFullYear()
  const copyYear = now === YEAR ? `${YEAR}` : `${YEAR}-` + now

  return (
    <footer css={footerStyle}>
      &copy; {copyYear} Name
    </footer>
  )
}

const footerStyle = css`
  padding: 3px 0;
  background-color: #fff;
  text-align: center;
  font-size: 10pt;
  color: #999;
`

export default Footer