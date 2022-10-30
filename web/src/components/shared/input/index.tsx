import './styles.css'

type Props = {
  label: string
  id: string
  type: string
  placeholder: string
}

export function Input(props: Props) {
  return(
    <fieldset className="fieldset-content">
      <label>{props.label}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </fieldset>
  )
}