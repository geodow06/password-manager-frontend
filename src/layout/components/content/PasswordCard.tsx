import { Button, Card, CardActionArea, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import { Component } from "react";
import { Account } from "types";
import Hoverable from "../Hoverable";
import PasswordCardOptions from "./PasswordCardOptions";

type PasswordCardProps = {
    account: Account,
    onChecked(account: Account): void,
    classes: any
};

const styles = {
    selected: {
        "border-style": "solid",
        "border-color": "royalBlue",
        "border-width": "medium"
    }
}

class PasswordCard extends Component<PasswordCardProps> implements Hoverable {
    hasImageSource: boolean;

    state = {
        showLaunch: false,
        showOptions: false,
        checked: false,
        border: null,
    };

    constructor(props: PasswordCardProps) {
        super(props);

        this.hasImageSource = props.account.imageSource !== "";
    }

    handleOver = (): void => {
        if(this.props.account.url) {
            this.setState({showLaunch:true});
        }
        this.setState({showOptions: true});
    };

    handleLeave = (): void => {
        this.setState({showLaunch: false, showOptions: false});
    };

    handleLaunch = (): void => {
        window.open(this.props.account.url);
    };

    handleOnClick = (): void => {
        const { account, onChecked, classes } = this.props;
        this.setState({checked: !this.state.checked, border: !this.state.checked ? classes.selected : null})
        onChecked(account);
    };

    render() {
        const { border } = this.state;
        const { account } = this.props;
        return(
            <Card className={classNames(border,"password-card")}>
                <CardActionArea onPointerLeave={this.handleLeave} onPointerOver={this.handleOver} onClick={this.handleOnClick}>
                    <div data-testid="password-card-image" className="password-card-image flex flex-center">
                        <img  src={this.hasImageSource ? account.imageSource : "/logo192.png"} alt="img"/>
                        {this.state.showLaunch && <Button onClick={this.handleLaunch} className="password-card-image-button">Launch</Button>}
                    </div>
                    <div className="flex flex-space-between">
                        <Typography variant="h6" className="ml-10 my-8" component="div">{account.accountName}</Typography>
                        {this.state.showOptions && <PasswordCardOptions account={account}/>}
                    </div>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(PasswordCard);
