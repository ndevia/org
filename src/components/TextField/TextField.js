import "./TextField.css"

const TextField = (props) => {
  var placeholder = ""
  if(props.title !== "Color") {
    placeholder = `${props.placeholder} ${props.title.toLowerCase()}`
  } else {
    placeholder = `${props.placeholder} ${props.title.toLowerCase()} en Hex`
  }
    
  const manejarCambio = (event) => {
    props.actualizarValor(event.target.value)
  }
  return <div className="textfield">
    <label>{props.title}</label>
    <input placeholder={placeholder} required={props.required} value={props.valor} onChange={manejarCambio} />
  </div>
}

export default TextField