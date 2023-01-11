const Card = (props) => {
	console.log(props)
	// const { imagePoulet, name, desc } = props
	return (
		<div className="cardGlobal">
			<img className="cardImg" src={props.imagePoulet} alt="imgCard" />
			<div className="cardText">
				<h4>
					{props.name.firstName} {props.name.lastName}
				</h4>
				<div>{props.desc}</div>
			</div>
		</div>
	)
}
export default Card
