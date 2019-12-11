import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GameHomePage from './GameHomePage';
import renderer from 'react-test-renderer';

describe('<Login/>', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<GameHomePage />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('renders as expected', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<GameHomePage />
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
