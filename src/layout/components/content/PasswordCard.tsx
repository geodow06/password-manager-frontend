import { Button, Card, CardActionArea, Typography } from "@material-ui/core";
import { Component } from "react";
import { Account } from "types";
import Hoverable from "../Hoverable";
import PasswordCardOptions from "./PasswordCardOptions";

type PasswordCardProps = {
    account: Account
};

class PasswordCard extends Component<PasswordCardProps> implements Hoverable {
    hasImageSource: boolean;

    state = {
        showLaunch: false
    };

    constructor(props: PasswordCardProps) {
        super(props);

        this.hasImageSource = props.account.imageSource !== "";
    }

    handleOver = (): void => {
        if(this.props.account.url) {
            this.setState({showLaunch:true});
        }
    };

    handleLeave = (): void => {
        this.setState({showLaunch:false});
    };

    handleLaunch = (): void => {
        window.open(this.props.account.url);
    };

    render() {
        const { account } = this.props;
        return(
            <Card className="password-card">
                <CardActionArea onPointerLeave={this.handleLeave} onPointerOver={this.handleOver}>
                    <div data-testid="password-card-image" className="password-card-image flex flex-center">
                        <img  src={this.hasImageSource ? account.imageSource : "/logo192.png"} alt="img"/>
                        {this.state.showLaunch && <Button onClick={this.handleLaunch} className="password-card-image-button">Launch</Button>}
                    </div>
                    <div className="flex flex-space-between">
                        <Typography variant="h6" className="ml-10 my-8" component="div">{account.accountName}</Typography>
                        <PasswordCardOptions account={account}/>
                    </div>
                </CardActionArea>
            </Card>
        );
    }
}

export default PasswordCard;
