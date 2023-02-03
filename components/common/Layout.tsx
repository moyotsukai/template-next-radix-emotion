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
  background-color: #f2faff;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`

export default Layout