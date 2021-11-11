import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("<Dashboard/>", () => {
    test("Dashboard renders PasswordCards per each account",() => {
        render(<Dashboard />);
        const googleElement = screen.getByText(/google/i);
        const facebookElement = screen.getByText(/facebook/i);
        expect(googleElement).toBeInTheDocument();
        expect(facebookElement).toBeInTheDocument();
    })
})