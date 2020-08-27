import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import App from './App';


ReactDOM.render(
	<React.StrictMode>
		<div className="container">
			<div className="jumbotron">
				<h1>Rose Video Employee Directory</h1>
				<h3>Where it's always 1995</h3>
			</div>
			<App />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

