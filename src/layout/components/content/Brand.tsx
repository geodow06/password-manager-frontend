import { Component } from "react";

class Brand extends Component {
    render() {
        return (
            <div className="flex flex-middle flex-space-between brand-area">
                <div className="flex flex-middle brand" > 
                    <span className="brand__text">Password Manager...</span>
                </div>
            </div>
        );
    }
}

export default Brand;