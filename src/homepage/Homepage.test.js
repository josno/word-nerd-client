import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Homepage from './Homepage';

describe('<Home/>', () => {
	it('renders as expected', () => {
		const tree = renderer.create(<Homepage />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
