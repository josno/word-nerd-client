import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GameTypePage from "./GameTypePage";
import renderer from "react-test-renderer";

describe("<Login/>", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(
			<Router>
				<GameTypePage />
			</Router>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it("renders as expected", () => {
		const tree = renderer
			.create(
				<Router>
					<GameTypePage />
				</Router>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
