import { render } from "@testing-library/react"
import { Account } from "types"
import PasswordCard from "./PasswordCard"

describe('<PasswordCard/>', () => {
    test('Should render account prop name', () => {
        const account: Account = {
            name: "test name",
            encryptedValue: "test value"
        } 
        const { getByText } = render(<PasswordCard account={account}/>);
        expect(getByText(/test name/i)).toBeInTheDocument();
    })

})