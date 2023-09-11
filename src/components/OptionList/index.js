import "./OptionList.css"

/* Para recorrer el arreglo se utiliza el método map:
   arreglo.map((equipo, index) => {return <option></option>}) */ 


const OptionList = (props) => {
  const manejarCambio = (event) => {
    props.actualizarEquipo(event.target.value)
  }
  
  return <div className="option-list">
    <label>Equipos</label>
    <select value={props.valor} onChange={manejarCambio}>
      <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
      {props.equipos.map((equipo, index) => {     
        return <option value={equipo} key={index}>{equipo}</option> // También se podría declarar en una línea un poco más simple: 
      })}                             {/* {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)} */}
    </select>
  </div>
}

export default OptionList