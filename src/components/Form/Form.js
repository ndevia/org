import { useState } from "react"
import "./Form.css"                             // Si se nombra al archivo como index.js, se puede omitir
import TextField from "../TextField/TextField"  // al llamarlo. Sólo es necesario usar el nombre de la   
import OptionList from "../OptionList"          // carpeta que lo contiene.
import Button from "../Button"

const Formulario = (props) => {
  //Formulario colaborador
  const [nombre,actualizarNombre] = useState("")
  const [puesto,actualizarPuesto] = useState("")
  const [foto,actualizarFoto] = useState("")
  const [equipo,actualizarEquipo ] = useState("")

  //Formulario equipo
  const [titulo,actualizarTitulo] = useState("")
  const [color,actualizarColor ] = useState("")
  
  const { registrarColaborador, crearEquipo } = props

  const manejarEnvio = (event) => {
    event.preventDefault()
    let datosAEnviar = {
      nombre,  // Estos son elementos clave-valor, es lo mismo que {nombre: nombre, puesto: puesto, foto: foto,}
      puesto,
      foto,
      equipo,
    }
    registrarColaborador(datosAEnviar)
  }

  const manejarNuevoEquipo = (event) => {
    event.preventDefault()
    crearEquipo({ titulo, colorPrimario: color})  // Es lo mismo que {titulo: titulo, colorPrimario: color}
  }

  return <section className="formulario">
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador.</h2>
      <TextField 
        title="Nombre" 
        placeholder="Ingresar" 
        required  // required es lo mismo que required={true} 
        valor={nombre}
        actualizarValor={actualizarNombre}
        />  
      <TextField 
        title="Puesto" 
        placeholder="Ingresar" 
        required 
        valor={puesto}
        actualizarValor={actualizarPuesto}
        />
      <TextField 
        title="Foto" 
        placeholder="Ingresar enlace de" 
        required 
        valor={foto}
        actualizarValor={actualizarFoto}
      />
      <OptionList 
        valor={equipo}
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos}
      />
      <Button>    {/* También se podría agregar como <Button text="Crear" /> */}
        Crear     {/* y luego llamarse con {props.text} en el archivo .js en */}
      </Button>   {/* lugar de {props.children} */}
    </form>
    <form onSubmit={manejarNuevoEquipo}>
      <h2>Rellena el formulario para crear el equipo.</h2>
      <TextField 
        title="Título" 
        placeholder="Ingresar" 
        required  // required es lo mismo que required={true} 
        valor={titulo}
        actualizarValor={actualizarTitulo}
      />  
      <TextField 
        title="Color" 
        placeholder="Ingresar"
        required 
        valor={color}
        actualizarValor={actualizarColor}
      />
      <Button>
        Registrar equipo
      </Button>
    </form>
  </section>  
}

export default Formulario