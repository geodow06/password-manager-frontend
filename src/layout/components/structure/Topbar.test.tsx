import { render, screen } from "@testing-library/react";
import Topbar from "./Topbar";

describe('<Topbar/>', () => {
    test('Topbar component renders Brand component', () => {
        render(<Topbar/>);
        expect(screen.getByText(/Password Manager\.\.\./i)).toBeInTheDocument();
    });
})
