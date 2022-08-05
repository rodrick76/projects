import '../style/image.css'
const Image = (props) => {
  return (
    <div className="imgx">
        <img src={props.image} alt='product'/>
    </div>
  )
}

export default Image