import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	CardText,
} from "reactstrap";
import "../../App.css";

function Footer() {
	return (
		<div className='section_footer'>
			<Container>
				<Row>
					<Col lg={{ size: 4 }}>
						<h2>Services</h2>
						<p>
							There are many variations of passages pf Lorem Ipsum available,
							but the majority have suffered alteration.
						</p>
						<span class='footer_text'>Request Custom Service</span>
					</Col>
					<Col lg={{ size: 8 }}>
						<Container>
							<Row>
								<Col lg={{ size: 6 }} md={{ size: 6 }} sm={{ size: 6 }}>
									<div className='footer_upper_card'>
										<Card>
											<CardBody>
												<div className='icon'>
													<svg
														stroke='currentColor'
														fill='none'
														stroke-width='2'
														viewBox='0 0 24 24'
														stroke-linecap='round'
														stroke-linejoin='round'
														height='4em'
														width='4em'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6'></path>
														<line x1='2' y1='20' x2='2' y2='20'></line>
													</svg>
												</div>
												<CardTitle tag='h3'>Business Strategy</CardTitle>
												<CardText>
													I throw myself down amongthe tall grass by stream as i
													lie close to the earth.
												</CardText>
											</CardBody>
										</Card>
									</div>
								</Col>
								<Col lg={{ size: 6 }} md={{ size: 6 }} sm={{ size: 6 }}>
									<div className='footer_upper_card'>
										<Card>
											<CardBody>
												<div className='icon'>
													<svg
														stroke='currentColor'
														fill='none'
														stroke-width='2'
														viewBox='0 0 24 24'
														stroke-linecap='round'
														stroke-linejoin='round'
														height='4em'
														width='4em'
														xmlns='http://www.w3.org/2000/svg'>
														<polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
														<polyline points='2 17 12 22 22 17'></polyline>
														<polyline points='2 12 12 17 22 12'></polyline>
													</svg>
												</div>
												<CardTitle tag='h3'>Website Development</CardTitle>
												<CardText>
													I throw myself down amongthe tall grass by stream as i
													lie close to the earth.
												</CardText>
											</CardBody>
										</Card>
									</div>
								</Col>
							</Row>
							<Row>
								<Col lg={{ size: 6 }} md={{ size: 6 }} sm={{ size: 6 }}>
									<div className='footer_bottom_card'>
										<Card>
											<CardBody>
												<div className='icon'>
													<svg
														stroke='currentColor'
														fill='none'
														stroke-width='2'
														viewBox='0 0 24 24'
														stroke-linecap='round'
														stroke-linejoin='round'
														height='4em'
														width='4em'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
														<circle cx='9' cy='7' r='4'></circle>
														<path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
														<path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
													</svg>
												</div>
												<CardTitle tag='h3'>Marketing & Reporting</CardTitle>
												<CardText>
													I throw myself down amongthe tall grass by stream as i
													lie close to the earth.
												</CardText>
											</CardBody>
										</Card>
									</div>
								</Col>
								<Col lg={{ size: 6 }} md={{ size: 6 }} sm={{ size: 6 }}>
									<div className='footer_bottom_card'>
										<Card style={{ color: "green" }}>
											<CardBody>
												<div className='icon'>
													<svg
														stroke='currentColor'
														fill='none'
														stroke-width='2'
														viewBox='0 0 24 24'
														stroke-linecap='round'
														stroke-linejoin='round'
														height='4em'
														width='4em'
														xmlns='http://www.w3.org/2000/svg'>
														<rect
															x='2'
															y='3'
															width='20'
															height='14'
															rx='2'
															ry='2'></rect>
														<line x1='8' y1='21' x2='16' y2='21'></line>
														<line x1='12' y1='17' x2='12' y2='21'></line>
													</svg>
												</div>
												<CardTitle tag='h3'>Mobile App Delelopment</CardTitle>
												<CardText>
													I throw myself down amongthe tall grass by stream as i
													lie close to the earth.
												</CardText>
											</CardBody>
										</Card>
									</div>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
