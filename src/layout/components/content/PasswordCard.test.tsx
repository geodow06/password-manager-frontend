import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import PasswordCard from "./PasswordCard"

describe('<PasswordCard/>', () => {
    describe("When account has accountName property", () => {
        const withAccountNameAccount = {
            accountId: "1",
            accountName: "test name",
            value: "test value",
            imageSource: "dummySource",
            userId: "user1"
        };
        test('Should render account prop name', () => {
            const renderResult = render(<PasswordCard account={withAccountNameAccount}/>)
            expect(renderResult.getByText(/test name/i)).toBeInTheDocument();
        });
    });

    describe("When account has imageSource property", () => {
        describe("and it is an incorrect source",() => {
            const withImgAccount = {
                accountId: "1",
                accountName: "test name",
                value: "test value",
                imageSource: "dummySource",
                userId: "user1"
            };
            test("Should render alt text", () => {
                const renderResult = render(<PasswordCard account={withImgAccount}/>)
                expect(renderResult.getByAltText(/img/i)).toBeInTheDocument();
            });
        });
    });

    describe("When the user", () => {
        describe("Hovers over the card", () => {
            describe("And the account has a url property", () => {
                const withUrlAccount = {
                    accountId: "1",
                    accountName: "test name",
                    value: "test value",
                    imageSource: "dummySource",
                    userId: "user1",
                    url: "https://google.com"
                };
                test("Should render launch button", () => {
                    const renderResult = render(<PasswordCard account={withUrlAccount}/>)
                    userEvent.hover(renderResult.getByTestId(/password-card-image/i))
                    expect(renderResult.getByText(/Launch/i)).toBeInTheDocument();
                });

                describe("And they click the launch button", () => {
                    test("Window open should be called", async () => {
                        const mockedOpen: jest.Mock<any, any> = jest.fn();
                        Object.defineProperty(window, "open", {
                            value: mockedOpen
                        });

                        const renderResult = render(<PasswordCard account={withUrlAccount}/>);

                        userEvent.hover(renderResult.getByTestId(/password-card-image/i))
                        expect(await screen.findByText(/Launch/i)).toBeInTheDocument();

                        userEvent.click(renderResult.getByText(/Launch/i));
                        expect(mockedOpen).toBeCalled();
                        jest.clearAllMocks();
                    });
                });

                describe("And then leaves the card", () => {
                    test("The launch button should removed from the dom", () => {
                        const renderResult = render(<PasswordCard account={withUrlAccount}/>)
                        const card = renderResult.getByTestId(/password-card-image/i);
                        userEvent.hover(card)
                        expect(renderResult.getByText(/Launch/i)).toBeInTheDocument();
                        userEvent.unhover(card);
                        expect(renderResult.queryByText(/Launch/i)).toBe(null);
                    });
                });
            });

            describe("And the account has no url property", () => {
                const noUrlAccount = {
                    accountId: "1",
                    accountName: "test name",
                    value: "test value",
                    imageSource: "dummySource",
                    userId: "user1"
                };
                test("Should not render launch button", () => {
                    const renderResult = render(<PasswordCard account={noUrlAccount}/>);
                    userEvent.hover(renderResult.getByTestId(/password-card-image/i))
                    expect(renderResult.queryByText(/Launch/i)).toBe(null);
                });
            });
        });
    });
});
