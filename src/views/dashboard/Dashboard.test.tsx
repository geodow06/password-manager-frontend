import { screen } from "@testing-library/react";
import store from "redux/store";
import { renderWithConnectedRouter } from "testUtils";
import { Accounts } from "types";
import Dashboard from "./Dashboard";

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

describe("<Dashboard/>", () => {
    describe("On render", () => {
        describe("And there exists valid accounts in redux store", () => {
            test("Should render PasswordCards for each account", () => {
                const initialState = {...store.getState(), accounts: testAccounts}
                renderWithConnectedRouter(<Dashboard/>, initialState);
                const googleElement = screen.queryByText(/google/i);
                const facebookElement = screen.queryByText(/facebook/i);
                expect(googleElement).toBeInTheDocument();
                expect(facebookElement).toBeInTheDocument();
            });
        });

        describe("And the accounts array in initial state is empty", () => {
            test("Should display correct text", () => {
                renderWithConnectedRouter(<Dashboard/>, {...store.getState(), accounts: []})
                const element = screen.getByText(/No accounts found/i);
                expect(element).toBeInTheDocument();
            })
        });
    });
});
