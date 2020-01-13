import React from './node_modules/react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from './node_modules/react-router-dom';
import renderer from './node_modules/react-test-renderer';
import PassTheBall from './PassTheBall';

describe('<PassTheBall />', () => {
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
