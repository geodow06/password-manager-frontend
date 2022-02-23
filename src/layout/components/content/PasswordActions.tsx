import { useCustomSelector } from "redux/reduxTypes";

const PasswordActions = () => {
    const selected = useCustomSelector(state => state.selected);
    return (
        <div>
            {selected.length === 0 && <div>none selected</div>}
            {selected.map((account, index) => (
                <div key={index}>{account.accountName}</div>
            ))}
        </div>
    );
};

export default PasswordActions;