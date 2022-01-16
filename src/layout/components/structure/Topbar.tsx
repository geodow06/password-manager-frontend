import { Component } from "react";
import Brand from "../content/Brand";

class Topbar extends Component {
    render() {
        return(
            <div data-testid="topbar" className="topbar">
                <div className="topbar-hold">
                    <Brand/>
                </div>
            </div>
        );
    }
}

export default Topbar;