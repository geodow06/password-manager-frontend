import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound/>", () => {
    test("NotFound renders not found text", () => {
        render(<NotFound/>);
        const divElement = screen.getByText(/Not found/i);
        expect(divElement).toBeInTheDocument();
    })
})