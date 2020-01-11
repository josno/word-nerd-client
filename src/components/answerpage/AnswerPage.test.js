import React from 'react';
import Enzyme from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AnswerPage from './AnswerPage';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('<AnswerPage/>', () => {
	it('renders as expected', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<AnswerPage />
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders nothing when no props given', () => {
		const wrapper = shallow(<AnswerPage />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('renders with answer prop when given', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<AnswerPage word={'blue'} />
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
