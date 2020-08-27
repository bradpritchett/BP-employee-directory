import React, { Component } from "react";
import API from "../utils/API";

class EmployeeCard extends Component {

	state = { data: [] };

	componentDidMount() {
		this.searchEmployees();
	}

	searchEmployees = () => {
		API.employees()
			.then(res => this.setState({ data: res.data.results }))
			.catch(err => console.log(err));
	};

	setSortedField = (field) => {
		console.log(field)
	}

	render() {
		return (
			<table>
				<caption>Our employees</caption>
				<thead>
					<tr>
						<th><button type="button" onClick={() => this.setSortedField('name')}>Name</button></th>
						<th><button type="button" onClick={() => this.setSortedField('phone')}>Phone</button></th>
						<th><button type="button" onClick={() => this.setSortedField('email')}>email</button></th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.data.map(employee => (
							<tr key={employee.phone}>
								<td>{employee.name.first} {employee.name.last}</td>
								<td>{employee.phone}</td>
								<td>{employee.email}</td>
							</tr>
						))
					}

				</tbody>
			</table >
		)
	}
}

export default EmployeeCard;