import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import EndGamePage from './EndGamePage';

describe('<EndGamePage/>', () => {
	it('renders as expected', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<EndGamePage />
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
