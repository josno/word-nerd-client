import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import GuessTheWord from './GuessTheWord';

describe('<GuessTheWord/>', () => {
	it('renders as expected', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<GuessTheWord />
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
