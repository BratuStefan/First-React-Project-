import React from "react";
import {
	Dropdown,
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
			<Dropdown
				className='d-inline-block'
				nav
				inNavbar
				onMouseOver={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				isOpen={this.state.dropdownOpen}
				toggle={this.toggle}>
				<DropdownToggle nav no-caret>
					<span className='toggle_item_text'>Blocks</span>
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Portfolio</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Team</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Service</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Video Popup</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Progressbar</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Gallery</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Counters</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Blog List</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Clint Logo</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Contact Form</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Google Map</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Columns</span>
					</DropdownItem>
					<DropdownItem>
						<span className='toggle_item_dropdown'>Pricing Table</span>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
}
