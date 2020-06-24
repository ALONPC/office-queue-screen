import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

describe("Zeroq testing", () => {});
