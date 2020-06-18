import React from "react";
<<<<<<< HEAD
import { render } from "@testing-library/react";
import App from "./App";
=======
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("Credential Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("renders the page", () => {
    expect(wrapper).toBeDefined();
  });
});
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
