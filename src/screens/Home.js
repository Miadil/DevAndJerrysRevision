import img01 from "../assets/01.jpg"
import img02 from "../assets/02.jpg"
import img03 from "../assets/03.jpg"
import Card from "../components/Card"

import "./Home.css"

const Home = () => {
	return (
		<div className="homeCardGlobal">
			<Card
				imagePoulet={img01}
				name="hello"
				desc="Lorem ipsum dolor sit amet."
			/>
			<Card
				imagePoulet={img02}
				name="hello 2"
				desc="Lorem ipsum dolor sit amet. 222"
			/>
			<Card
				imagePoulet={img03}
				name="hello 3"
				desc="Lorem ipsum dolor sit amet. 3333"
			/>
		</div>
	)
}

export default Home
