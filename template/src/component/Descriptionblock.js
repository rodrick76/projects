import Button from "./Button"
import '../style/describe.css'

const descriptionblock = (props) => {
  return (
    <div className="des">
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
        <Button></Button>
    </div>
  )
}

export default descriptionblock