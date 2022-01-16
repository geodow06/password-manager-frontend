import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe('<Footer/>', () => {
    test('Footer componenet renders Footer text', () => {
        render(<Footer/>);
        const divElement = screen.getByText(/Footer/i);
        expect(divElement).toBeInTheDocument();
    })
})