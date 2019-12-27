import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import EntryOption from './EntryOption';

describe('<EntryOption/>', () => {
	it('renders as expected', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<EntryOption />
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
