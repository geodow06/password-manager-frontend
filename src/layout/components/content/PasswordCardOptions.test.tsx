import { render, RenderResult, cleanup } from "@testing-library/react";
import PasswordCardOptions from "./PasswordCardOptions";
import { Account } from "types";

describe("<PasswordOptions/>", () => {
    
    const account: Account = {
        accountId: "1",
        accountName: "test name",
        value: "test value",
        imageSource: "",
        userId: "user1"
    } 
    
    describe("Should render IconButtons", () => {
        let renderResult: RenderResult;
        beforeEach(() => {
            renderResult = render(<PasswordCardOptions account={account}/>)
        });

        afterEach(cleanup);    

        test("Should render Edit IconButton", () => {
            expect(renderResult.getByTitle(/Edit/i)).toBeInTheDocument();
        });
        test("Should render Delete IconButton", () => {
            expect(renderResult.getByTitle(/Delete/i)).toBeInTheDocument();
        });
    });

    describe("Handle Events Tests", () => {
        let component: PasswordCardOptions;
        beforeAll(() => {
            component = new PasswordCardOptions({account});
        })
        test("Should return correct string for handleDelete", () => {
            expect(component.handleDelete()).toEqual(`Deleting account of id ${account.accountId}`);
        });

        test("Should return correct string for handleEdit", () => {
            expect(component.handleEdit()).toEqual(`Edit account of id ${account.accountId}`);
        });
    });
});