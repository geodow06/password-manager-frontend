import { Grid } from '@material-ui/core';
import PasswordCard from 'layout/components/PasswordCard';
import React, { Component } from 'react'
import { Account } from 'types';

class Dashboard extends Component {
    render() {
        const testAccounts: Account[] = [
            {
                name: "google", 
                encryptedValue:"dcxsfesa"
            },
            {
                name: "facebook",
                encryptedValue: "dsagasg"
            }
        ];

        return (
            <div data-testid="dashboard" className="dashboard">
                <Grid container spacing={3}>
                    {testAccounts.map((account, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <PasswordCard account={account}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default Dashboard;