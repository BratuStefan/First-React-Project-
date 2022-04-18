import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import NavItemHome from "./navbar items/NavItemHome";
import NavItemService from "./navbar items/NavItemService";
import NavItemPages from "./navbar items/NavItemPages";
import NavItemBlocks from "./navbar items/NavItemBlocks";
import "../../App.css";

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.state = {
			dropdownOpen: false,
			isOpen: false,
		};
	}
	toggle() {
		this.setState((prevState) => ({
			dropdownOpen: !prevState.dropdownOpen,
		}));

		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	onMouseEnter() {
		this.setState({ dropdownOpen: true });
	}

	onMouseLeave() {
		this.setState({ dropdownOpen: false });
	}

	render() {
		return (
			<div>
				<Navbar light expand='md' className='nav_contaienr'>
					<NavbarBrand>
						<img
							src='http://trydo.rainbowit.net/assets/images/logo/logo.png'
							alt='Brand'
							className='navbar_brand'
						/>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className='ml-auto navbar_main' navbar>
							<NavItemHome></NavItemHome>
							<NavItemService></NavItemService>
							<NavItem>
								<NavLink href='http://trydo.rainbowit.net/about'>
									<span className='toggle_item_text'>About</span>
								</NavLink>
							</NavItem>
							<NavItemPages></NavItemPages>
							<NavItemBlocks></NavItemBlocks>
							<NavItem>
								<NavLink href='http://trydo.rainbowit.net/contact'>
									<span className='toggle_item_text'>Contact</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<button type='button' class='btn btn-outline-secondary'>
									BUY NOW
								</button>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
