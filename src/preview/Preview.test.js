import React from 'react';
import Enzyme from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Preview from './Preview';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('<Preview/>', () => {
	it('renders as expected', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<Preview />
				</BrowserRouter>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders nothing when no props given', () => {
		const wrapper = shallow(<Preview />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('renders with props', () => {
		const tree = renderer.create(<Preview id={3} word={'red'} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
