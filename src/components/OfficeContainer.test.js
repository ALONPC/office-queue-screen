import React from "react";
import { render } from "@testing-library/react";

import { shallow } from "enzyme";
import { OfficeContainer } from "./OfficeContainer";

describe("Zeroq testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OfficeContainer />);
  });
});
