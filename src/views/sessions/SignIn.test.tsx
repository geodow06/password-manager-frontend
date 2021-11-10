import React from "react";
import { render, screen } from "@testing-library/react";

import SignIn from "./SignIn";

describe("<SignIn />", () => {
    test("SignIn renders Signin text", () => {
        render(<SignIn/>);
        const divElement = screen.getByText(/Signin/i);
        expect(divElement).toBeInTheDocument();
    })
})