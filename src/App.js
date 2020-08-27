import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeTable"


class App extends Component {


	// Map over this.state.friends and render a FriendCard component for each friend object
	render() {
		return (
			<>
				<EmployeeCard />
			</>
		);
	}
}

export default App;
