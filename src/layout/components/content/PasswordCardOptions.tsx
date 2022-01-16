import { Build, Delete } from "@material-ui/icons";
import { Component } from "react";
import { Account } from "types";
import TooltipIconButton from "../functional/TooltipIconButton";

type PasswordCardOptionsProps = {
    account: Account;
}

class PasswordCardOptions extends Component<PasswordCardOptionsProps> {

    handleEdit = () => {
        return `Edit account of id ${this.props.account.accountId}`;
    }

    handleDelete = () => {
        return `Deleting account of id ${this.props.account.accountId}`;
    }

    render() {
        return(
            <div className="password-card-options">
                <TooltipIconButton title="Edit" handleOnClick={this.handleEdit}>
                    <Build/>
                </TooltipIconButton>
                <TooltipIconButton title="Delete" handleOnClick={this.handleDelete}>
                    <Delete/>
                </TooltipIconButton>
            </div>
        );
    }
}

export default PasswordCardOptions;