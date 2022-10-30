import { css } from "@emotion/react"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div css={layoutStyle}>
      {children}
    </div>
  )
}

const layoutStyle = css`
  color: #00ff00;
`

export default Layout