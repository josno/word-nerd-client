import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import renderer from 'react-test-renderer';

describe('<Login/>', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Login />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('renders as expected', () => {
		const tree = renderer.create(<Login />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
