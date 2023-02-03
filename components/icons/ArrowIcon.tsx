import { SerializedStyles } from '@emotion/react'
import React from 'react'

type Props = {
  size?: string
  color?: string
  css?: SerializedStyles
}

const ArrowIcon: React.FC<Props> = ({ size, color, css }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24px"}
      height={size || "24px"}
      viewBox="0 0 24 24"
      fill={color || "#000"}
      css={css || ""}
    >
      <path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  )
}

export default ArrowIcon