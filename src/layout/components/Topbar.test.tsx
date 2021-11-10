import { render, screen } from "@testing-library/react";
import Topbar from "./Topbar";

describe('<Topbar/>', () => {
    test('Topbar componenet renders Topbar text', () => {
        render(<Topbar/>);
        const divElement = screen.getByText(/Topbar/i);
        expect(divElement).toBeInTheDocument();
    })
})