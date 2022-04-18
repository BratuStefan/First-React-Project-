import { Container, Row, Col } from "reactstrap";
import "../../../App.css";

function BodySection2() {
	return (
		<div className='body_section_2_container'>
			<Container>
				<Row>
					<Col lg={{ size: 6 }} md={{ size: 12 }}>
						<div className='body_section_2_image'>
							<img
								src='http://trydo.rainbowit.net/assets/images/about/about-1.jpg'
								alt='section2_image'
							/>
						</div>
					</Col>
					<Col lg={{ size: 6 }} md={{ size: 12 }}>
						<div className='body_section_2_container_2'>
							<h2>About</h2>
							<p>
								There are many variations of pasages of Lorem Ipsum available,
								but the majority have suffered in some form, by injected humor,
								or randomised words which dont look even slighty belivable. If
								you are going to use a passage of Lorem Ipsum,
							</p>
							<div>
								<div className='body_section_2_container_2_inner'>
									<div>
										<h4>Who we are</h4>
										<p>
											There are many variations of pasages of Lorem Ipsum
											available, but the majority have suffere.
										</p>
									</div>
									<div>
										<h4>Who we are</h4>
										<p>
											There are many variations of pasages of Lorem Ipsum
											available, but the majority have suffere.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default BodySection2;
