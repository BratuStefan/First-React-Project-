import React from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import "../../../App.css";

export default class NavItem extends React.Component {
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
			<Dropdown
				className='d-inline-block'
				nav
				inNavbar
				onMouseOver={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				isOpen={this.state.dropdownOpen}
				toggle={this.toggle}>
				<DropdownToggle nav no-caret>
					<span className='toggle_item_text'>Home</span>
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Main Demo</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Main Demo Dark</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Creative Agency</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Creative One Page</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Creative Portfolio</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Personal Portfolio</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Personal One Page</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Personal One Page 2</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Digital Agency</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Startup</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Paralax</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Minimal Portfolio</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Business</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Home Particles</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Studio Agency</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Designer Portfolio</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Interactive Agency</span>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
}
