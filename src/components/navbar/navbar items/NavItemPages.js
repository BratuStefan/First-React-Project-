import React from "react";
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

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
			<UncontrolledDropdown
				className='d-inline-block'
				nav
				inNavbar
				onMouseOver={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				isOpen={this.state.dropdownOpen}
				toggle={this.toggle}>
				<DropdownToggle nav no-caret>
					<span className='toggle_item_text'>Pages</span>
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Blog List</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Service</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Service Details</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Portfolio</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Service Details</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>404</span>
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		);
	}
}
