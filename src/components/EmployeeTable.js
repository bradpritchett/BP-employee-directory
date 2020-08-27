import React, { Component } from "react";
import API from "../utils/API";

class EmployeeTable extends Component {

	state = {
		data: [],
		sortOrder: "descending"
	};

	componentDidMount() {
		API.employees()
			.then(res => this.setState({ data: res.data.results }))
			.catch(err => console.log(err));
	};


	setSortedField = (field) => {
		let results = this.state.data;
		if (field === "name") {
			results.sort(this.compareName)
		} else {
			results.sort(this.compareLocation)
		}
		this.setState({ data: [...results] })
	};

	compareName = (a, b) => {

		const bandA = a.name.last.toUpperCase();
		const bandB = b.name.last.toUpperCase();

		let comparison = 0;
		if (bandA > bandB) {
			comparison = 1;
		} else if (bandA < bandB) {
			comparison = -1;
		}
		return comparison;
	}

	compareLocation = (a, b) => {

		const bandA = a.location.state.toUpperCase();
		const bandB = b.location.state.toUpperCase();

		let comparison = 0;
		if (bandA > bandB) {
			comparison = 1;
		} else if (bandA < bandB) {
			comparison = -1;
		}
		return comparison;
	}
	render() {

		return (
			<table>
				<caption>Our Employees</caption>
				<thead>
					<tr>
						<th colSpan="5">

						</th>
					</tr>
					<tr>
						<th></th>
						<th><button type="button" onClick={() => this.setSortedField("name")}>Name</button></th>
						<th>Phone</th>
						<th><button type="button" onClick={() => this.setSortedField("location")}>Location</button></th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.data.map(employee => (
							<tr key={employee.phone}>
								<td><img src={employee.picture.large} className="img-fluid" alt="{employee.name.first} {employee.name.last}" /></td>
								<td>{employee.name.first} {employee.name.last}</td>
								<td>{employee.phone}</td>
								<td>{employee.location.city}, {employee.location.state}</td>
								<td>{employee.email}</td>
							</tr>
						))
					}

				</tbody>
			</table >
		)
	};
};

export default EmployeeTable;