import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';
import renderer from 'react-test-renderer';

describe('<SignUp/>', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SignUp />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('renders as expected', () => {
		const tree = renderer.create(<SignUp />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
