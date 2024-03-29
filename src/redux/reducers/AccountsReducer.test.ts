import { SetAccountsAction } from "redux/actions/AccountsActions";
import { Accounts } from "types";
import reducer, { AccountsState } from "./AccountsReducer";

const initialState: AccountsState = [];

const previousStateAccounts = [
        {
            accountId: "1",
            accountName: "test1",
            value:"testValue1",
            imageSource: "testImg1",
            url: "testUrl1",
            userId: "1",
        },
        {
            accountId: "2",
            accountName: "test2",
            value: "testValue2",
            imageSource: "testImg2",
            userId: "2"
        }
];

describe('Accounts Reducer', () => {
    describe('When passed no arguments', () => {
            test('Should return previous state', () => {
            expect(reducer()).toEqual(initialState);
        });
    });

    describe('When no action is provided', () => {
        test('Should return previous state', () => {
            expect(reducer(previousStateAccounts)).toEqual(previousStateAccounts);
        });
    });

    describe('Set Accounts', () => {
        const newAccountsPayload: Accounts = [
            {
                accountId: "1",
                accountName: "test1",
                value:"testValue1",
                imageSource: "testImg1",
                url: "testUrl1",
                userId: "1",
            },
            {
                accountId: "2",
                accountName: "test2",
                value: "testValue2",
                imageSource: "testImg2",
                userId: "2"
            },
            {
                accountId: "3",
                accountName: "test3",
                value:"testValue3",
                imageSource: "testImg3",
                url: "testUrl3",
                userId: "1",
            }
        ]

        test('Should correctly update the states accounts array', () => {
            const newAccounts = newAccountsPayload;

            const setAccountsAction = new SetAccountsAction(newAccountsPayload);
            expect(reducer(undefined, setAccountsAction)).toEqual(newAccounts);
        });
    });
});
