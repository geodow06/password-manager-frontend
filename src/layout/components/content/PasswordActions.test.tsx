import { screen } from "@testing-library/react";
import store from "redux/store";
import { renderWithConnectedRouter } from "testUtils";
import { Accounts } from "types";
import PasswordActions from "./PasswordActions";

const testAccounts: Accounts = [
    {
        accountId: "1",
        accountName: "google",
        value:"dcxsfesa",
        imageSource: "",
        url: "https://google.com",
        userId: "1",
    },
    {
        accountId: "2",
        accountName: "facebook",
        value: "dsagasg",
        imageSource: "",
        userId: "2"
    },
    {
        accountId: "3",
        accountName: "jitter",
        value:"dcxsfesa",
        imageSource: "",
        userId: "2",
    },
    {
        accountId: "4",
        accountName: "pinstagram",
        value: "dsagasg",
        imageSource: "",
        userId: "3"
    },
    {
        accountId: "5",
        accountName: "soc",
        value: "dsagasg",
        imageSource: "",
        userId: "3"
    }
];

describe('<PasswordActions/>', () => {
    describe('On render', () => {
        describe('And there are no selected Accounts', () => {
            test('Should not render Actions button', () => {
                const initialState = {...store.getState()}
                renderWithConnectedRouter(<PasswordActions/>, initialState);
                expect(screen.queryByText(/Actions/i)).not.toBeInTheDocument();
            })
        })
        describe('And there are selected Accounts', () => {
            test('Should render Actions button', () => {
                const initialState = {...store.getState(), selected: testAccounts}
                renderWithConnectedRouter(<PasswordActions/>, initialState);
                const actionElement = screen.queryByText(/Actions/i);
                expect(actionElement).toBeInTheDocument();
            })
        })
    })
});
