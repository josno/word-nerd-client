import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PassTheBall from './PassTheBall';

describe('<PassTheBall/>', () => {
	it('renders as expected', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<PassTheBall />
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
