import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

class Door extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: props.open
		};
	}

	toggleDoor(id) {
		if (!this.props.activeDoor) {
			return;
		}
		if (this.state.open) {
			document.getElementsByClassName(id)[0].style.display = 'flex';
			// var i = 0;
			// typeWriter(this.props.haiku);

			// Detect all clicks on the document
			document.addEventListener('click', function(event) {
				// If user clicks inside the element, do nothing
				if (event.target.id == 'typedtext') {
					return;
				} else {
					// If user clicks outside the element, hide it!
					document.getElementsByClassName(id)[0].style.display = 'none';
				}
			});
		} else {
			this.setState({
				open: !this.state.open
			});

			if (!this.state.open) {
				this.props.updateProgress(id);
				document.getElementsByClassName(id)[0].style.display = 'flex';
				// var i = 0;
				// typeWriter(this.props.haiku);

				// Detect all clicks on the document
				document.addEventListener('click', function(event) {
					// If user clicks inside the element, do nothing
					if (event.target.id == 'typedtext') {
						return;
					} else {
						// If user clicks outside the element, hide it!
						document.getElementsByClassName(id)[0].style.display = 'none';
					}
				});
			} else {
				this.props.updateProgress(parseInt(id) - 1);
				document.getElementsByClassName(id)[0].style.display = 'none';
			}
		}
	}

	render() {
		return (
			<div className="door">
				<div className={[ 'haiku', this.props.id ].join(' ')} id="typedtext">
					{this.props.haiku}
				</div>
				<div
					className={`door__frame ${this.props.activeDoor && !this.state.open ? 'door__frame--active' : ''}`}
				>
					<this.props.image width={70} height={90} />
					<div
						className={`door__frame__door ${this.state.open ? 'door__frame__door--open' : ''}`}
						onClick={() => this.toggleDoor(this.props.id)}
					>
						<div className="door__frame__door__handle" />
						<div className="door__frame__door__hinge top" />
						<div className="door__frame__door__hinge bottom" />
						<div className="door__frame__door__number">
							<p>{this.props.id}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Door;
