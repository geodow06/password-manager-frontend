import AppContext, { MyContextType } from 'appContext';
import PasswordActions from 'layout/components/content/PasswordActions';
import PasswordCard from 'layout/components/content/PasswordCard';
import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { updateSelected } from 'redux/actions/SelectedActions';
import { RootState } from 'redux/store';
import { Account, Accounts } from 'types';

type DashboardState = {
    accounts: Accounts,
    selected: Accounts
}

class Dashboard extends Component<DashboardProps, DashboardState> {
    appContext: MyContextType;

    constructor(props: DashboardProps, context: MyContextType) {
        super(props);

        this.appContext = context;
    }

    onCardChecked = (account: Account) => {
        this.props.updateSelectedAccounts(account)
    };

    render() {
        const { accounts } = this.props;
        // Add boolean to reducer
        const hasAccounts = accounts.length > 0;

        return (
            <div data-testid="dashboard" className="dashboard">
                <PasswordActions/>
                {hasAccounts &&
                    <div className="password-card-grid flex flex-left">
                        {accounts.map((account, index) => (
                            <div className="ml-16 mt-20" key={index}>
                                <PasswordCard account={account} onChecked={this.onCardChecked}/>
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
    updateSelectedAccounts: (account: Account) => updateSelected(account)
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type DashboardProps = RouteComponentProps & PropsFromRedux;

Dashboard.contextType = AppContext;

export default withRouter(connector(Dashboard));
