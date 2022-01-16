import reducer from "./AccountsReducer";

const initialState = {
    accounts: []
};

const previousStateAccounts = {
    accounts: [
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
    ]
};

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
});