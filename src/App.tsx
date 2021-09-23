import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Amount from "./pages/Amount"
import Navbar from './components/Navbar'
import './components/stylesheets/index.css';

function App() {
	return (
	<div className="App">
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/amount" component={Amount} />
				<Route path="/transaction" component={Transaction} />
			</Switch>
		</Router>
	</div>
	);
}

const Homepage = () => {
	return (
		<React.Fragment>
			<h1>Homepage</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet molestiae blanditiis, sit labore eaque maxime perferendis, dolorum, iste quis non cumque unde illum atque placeat error soluta sint provident?</p>
		</React.Fragment>
	)
}

const Transaction = () => {
	return (
		<React.Fragment>
			<h1>Transaction Page</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet molestiae blanditiis, sit labore eaque maxime perferendis, dolorum, iste quis non cumque unde illum atque placeat error soluta sint provident?</p>
		</React.Fragment>
	)
}

export default App;
