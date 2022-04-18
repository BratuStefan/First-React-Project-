import { Container, Row, Col } from "reactstrap";
import "../../../../App.css";
import BigText from "./BigText.png";

function BodySection1BigText() {
	return (
		<Container className='body_container'>
			<Row>
				<Col lg='col-4' md='6' sm='12'>
					<img src={BigText} alt='img' />
				</Col>
			</Row>
		</Container>
	);
}

export default BodySection1BigText;
