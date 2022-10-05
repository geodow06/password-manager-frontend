import { ClearSelectedAction, UpdateSelectedAction } from 'redux/actions/SelectedActions';
import reducer, { SelectedState } from './SelectedReducer';

const emptyState: SelectedState = []

const TEST_ACCOUNT_ONE = {
    accountId: "1",
    accountName: "test1",
    value:"testValue1",
    imageSource: "testImg1",
    url: "testUrl1",
    userId: "1",
}

const TEST_ACCOUNT_TWO = {
    accountId: "2",
    accountName: "test2",
    value: "testValue2",
    imageSource: "testImg2",
    userId: "2"
}

const stateAccountOne = [TEST_ACCOUNT_ONE]
const stateAccountTwo = [TEST_ACCOUNT_TWO]

const multipleSelectedAccountsState = [
    TEST_ACCOUNT_ONE,
    TEST_ACCOUNT_TWO
];

describe('Selected Reducer', () => {
    describe('When passed no arguments', () => {
        test('Should return previous state', () => {
            expect(reducer()).toEqual(emptyState);
        });
    });

    describe('When no action is provided', () => {
        describe('And the initial state is empty', () => {
            test('Should return previous state', () => {
                expect(reducer(emptyState)).toEqual(emptyState);
            });
        });
        describe('And the initial state is not empty', () => {
            test('Should return previous state', () => {
                expect(reducer(multipleSelectedAccountsState)).toEqual(multipleSelectedAccountsState);
            });
        })
    });

    describe('Clear Action', () => {
        describe('When passed an empty array', () => {
            test('Should return an empty array', () => {
                expect(reducer(emptyState, new ClearSelectedAction())).toEqual(emptyState);
            });
        });
        describe('When passed an array of selected accounts', () => {
            test('Should return an empty array', () => {
                expect(reducer(multipleSelectedAccountsState, new ClearSelectedAction())).toEqual(emptyState);
            });
        });
    });

    describe('Update Action', () => {
        describe('When passing an account in the update selected payload', () => {
            const updateSelectedAction = new UpdateSelectedAction(TEST_ACCOUNT_ONE);
            describe('And the account is already selected', () => {
                test('Should remove that account from the selected state', () => {
                    expect(reducer(stateAccountOne, updateSelectedAction)).toEqual(emptyState);

                    expect(reducer(multipleSelectedAccountsState, updateSelectedAction)).toEqual(stateAccountTwo);
                });
            });
            describe('And the account is not selected', () => {
                test('Should add that account from the selected state', () => {
                    expect(reducer(stateAccountTwo, updateSelectedAction)).toIncludeSameMembers(multipleSelectedAccountsState);

                    expect(reducer(emptyState, updateSelectedAction)).toEqual(stateAccountOne);
                });
            });
        });
    });
});
