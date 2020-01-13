import React from './node_modules/react';
import Enzyme from './node_modules/enzyme';
import { BrowserRouter } from './node_modules/react-router-dom';
import { shallow } from './node_modules/enzyme';
import Adapter from './node_modules/enzyme-adapter-react-16';
import renderer from './node_modules/react-test-renderer';
import Preview from './Preview';
import toJson from './node_modules/enzyme-to-json';

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
