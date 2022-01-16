import PasswordCard from 'layout/components/content/PasswordCard';
import React, { Component } from 'react'
import { Account } from 'types';
class Dashboard extends Component {
    render() {
        const testAccounts: Account[] = [
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
        ];
        return (
            <div data-testid="dashboard" className="dashboard">
                    <div className="password-card-grid flex flex-left">
                    {testAccounts.map((account, index) => (
                        <div className="ml-16 mt-20" key={index}>
                            <PasswordCard account={account}/>
                        </div>
                    ))}
                    </div>
            </div>
        );
    }
}

export default Dashboard;