import "./Button.css"

const Button = (props) => {
    return <button className="button">{props.children}</button>  // Si se declara más de 1 elemento
}                                                                // props.children se guarda como array
export default Button