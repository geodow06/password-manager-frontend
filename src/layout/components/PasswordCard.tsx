import { Card } from "@material-ui/core";
import { Component } from "react";
import { Account } from "types";

type PasswordCardProps = {
    account: Account
};

class PasswordCard extends Component<PasswordCardProps> {
    render() {
        return(
            <Card className="password-card">
                {this.props.account.name}
            </Card>
        );
    }
}

export default PasswordCard;