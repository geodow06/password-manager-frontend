import AppContext, { MyContextType } from 'appContext';
import PasswordCard from 'layout/components/content/PasswordCard';
import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { setAccounts } from 'redux/actions/AccountsActions';
import { RootState } from 'redux/store';
import { Accounts } from 'types';

type dashboardState = {
    accounts: Accounts
}

class Dashboard extends Component<DashboardProps, dashboardState> {
    appContext: MyContextType;

    constructor(props: DashboardProps, context: MyContextType) {
        super(props);

        this.appContext = context;
    }

    render() {
        const { accounts } = this.props;
        // Add boolean to reducer
        const hasAccounts = accounts.length > 0;

        console.log(accounts)
        return (
            <div data-testid="dashboard" className="dashboard">
                {hasAccounts &&
                    <div className="password-card-grid flex flex-left">
                        {accounts.map((account, index) => (
                            <div className="ml-16 mt-20" key={index}>
                                <PasswordCard account={account}/>
                            </div>
                        ))}
                    </div>
                }
                {!hasAccounts && 
                    <div>No accounts found</div>
                }
            </div>
        );
    }
}

const mapState = (state: RootState) => ({
    accounts: state.accounts
});

const mapDispatch = {
    setCurrentUserAccounts: ( proposedAccounts: Accounts ) => setAccounts(proposedAccounts)
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type DashboardProps = RouteComponentProps & PropsFromRedux;

Dashboard.contextType = AppContext;

export default withRouter(connector(Dashboard));