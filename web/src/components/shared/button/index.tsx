import { ButtonHTMLAttributes } from 'react'

import './styles.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

export function Button(props: Props) {
  return(
    <button className="action-button">{props.title}</button>
  )
}