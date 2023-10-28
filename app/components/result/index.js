export default function Result(props) {
  return (
    <div {...props}>{`${props.result ? `${props.result}Kcal` : ''} `}</div>
  )
}

