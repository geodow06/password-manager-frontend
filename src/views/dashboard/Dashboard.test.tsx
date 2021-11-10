import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("<Dashboard/>", () => {
    test("Dashboard renders div element with correct text",() => {
        render(<Dashboard/>);
        const divElement = screen.getByText(/Dashboard/i);
        expect(divElement).toBeInTheDocument();
    })
})