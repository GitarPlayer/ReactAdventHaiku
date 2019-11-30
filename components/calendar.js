import React from 'react';
import { Component } from 'react';
import Door from './door.js';
import ProgressBar from './progress-bar.js';
import doors from '../public/images/list.js';

// var dd = new Date().getDate();
let dd = 1;
class Calendar extends Component {
	constructor() {
		super();

		this.state = {
			progress: 0,
			activeDoor: 1
		};
	}

	handleUpdateProgress(newProgress) {
		let percentage = newProgress / 25 * 100;
		this.setState({
			// if the door is opening, increase the progress, if it is closing, decrease
			progress: percentage
		});
	}

	renderDoors() {
		return doors.map((door) => {
			if (door.id < dd) {
				return (
					<Door
						id={door.id}
						image={door.image}
						haiku={door.haiku}
						key={`door${door.id}`}
						updateProgress={this.handleUpdateProgress.bind(this)}
						/* we want to be able to open the door if it is active, and close it if the next door is active */
						activeDoor={true}
						open={true}
					/>
				);
			} else {
				return (
					<Door
						id={door.id}
						image={door.image}
						haiku={door.haiku}
						key={`door${door.id}`}
						updateProgress={this.handleUpdateProgress.bind(this)}
						/* we want to be able to open the door if it is active, and close it if the next door is active */
						activeDoor={this.state.activeDoor === door.id}
						open={false}
					/>
				);
			}
		});
	}

	render() {
		return (
			<div className="calendar">
				<div className="calendar__door-wrapper">{this.renderDoors()}</div>
				<ProgressBar percent={this.state.progress} />
			</div>
		);
	}
}

export default Calendar;
