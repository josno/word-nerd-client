import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GameHomePage from './GameHomePage';
import renderer from 'react-test-renderer';

describe('<Login/>', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Router>
				<GameHomePage />
			</Router>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('renders as expected', () => {
		const tree = renderer
			.create(
				<Router>
					<GameHomePage />
				</Router>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
