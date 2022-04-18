import { Container, Row, Col } from "reactstrap";
import "../../../../App.css";

function BodySection1Ads() {
	return (
		<Container>
			<Row className='body_ads_container'>
				<Col lg={{ size: 4 }} md={{ size: 6 }} sm={{ size: 12 }}>
					<div className='body_ads_container_1'>
						<img
							src='http://trydo.rainbowit.net/assets/images/icons/icon-01.png'
							alt='business_strategy_image'
						/>
						<h4>Business Strategy</h4>
						<p>
							There a re many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</p>
					</div>
				</Col>
				<Col lg={{ size: 4 }} md={{ size: 6 }} sm={{ size: 12 }}>
					<div className='body_ads_container_2'>
						<img
							src='http://trydo.rainbowit.net/assets/images/icons/icon-02.png'
							alt='website_development_image'
						/>
						<h4>Website Developement</h4>
						<p>
							There a re many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</p>
					</div>
				</Col>
				<Col lg={{ size: 4 }} md={{ size: 6 }} sm={{ size: 12 }}>
					<div className='body_ads_container_3'>
						<img
							src='	http://trydo.rainbowit.net/assets/images/icons/icon-03.png'
							alt='marketing_and_Reporting_image '
						/>
						<h4>Marketing & Reporting</h4>
						<p>
							There a re many variations of passages of Lorem Ipsum available,
							but the majority have suffered.
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default BodySection1Ads;
