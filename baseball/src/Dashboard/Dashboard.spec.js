import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard.js";

describe('<Dashboard /> ', () => {
  it("should render test", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/no dashboard/i)
  });

});
