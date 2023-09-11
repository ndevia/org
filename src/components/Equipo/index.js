import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {
  const {titulo, colorPrimario, colorSecundario, id} = props.datos  // Destructuración, permite omitir props.datos de 
  const {colaboradores, eliminarColaborador, actualizarColor} = props  // props.datos.colorSecundario, por ejemplo
  
  const colorFondo = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)  // Se debe usar camelCase para las propiedades de css
  }

  const estiloTitulo = {
    borderColor: colorPrimario
  }

  return <>
    {
      colaboradores.length > 0 &&
      <section className="equipo" style={colorFondo}> 
        <input 
          type='color'
          className="input-color"
          value={hexToRgba(colorPrimario, 1)}
          onChange={(event) => {
            actualizarColor(event.target.value, id)
          }}
        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
          {
            colaboradores.map((colaborador, index) => <Colaborador 
              datos={colaborador} 
              key={index}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
            />)
          }
        </div>  
      </section>
    }
  </>
}

export default Equipo