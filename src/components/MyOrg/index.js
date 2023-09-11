import "./MyOrg.css"

const MyOrg = (props) => {
  // State - Hooks
  // const [nombreVariable, funcionActualiza] = useState(valorInicial)
  return <section className="orgSection">
    <h3 className="title">Mi organización</h3>
    <img src="/img/add.png" alt="add button" onClick={props.cambiarMostrar} />
  </section>
}

export default MyOrg