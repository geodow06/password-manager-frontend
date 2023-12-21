import { useCustomSelector } from "redux/reduxTypes";
import { Button, Menu, MenuItem } from "@material-ui/core"
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { CLEAR_SELECTED } from "redux/actions/SelectedActions";

const PasswordActions = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const selected = useCustomSelector(state => state.selected);
    const dispatch: AppDispatch = useDispatch();
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const close = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        selected.forEach(account => console.log(`Deleting account ${account.accountId}`));
        dispatch({ type: CLEAR_SELECTED});
        close()
    };

    const handleCopy = () => {
        console.log(`Copying password for account ${selected[0].accountId}`);
        copy(selected[0].value);
        close()
    };

    const handleEdit = () => {
        console.log(`Editing account ${selected[0].accountId}`);
        close()
    };

    const copy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const multipleSelected = selected.length > 1;

    return (
        <div>
            {selected.length !== 0 &&
            <div>
                    <div>{selected.length} items selected</div>
                    <Button onClick={handleClick}>
                        Actions
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={close}
                    >
                        <MenuItem disabled={multipleSelected} onClick={handleEdit} disableRipple>
                            Edit
                        </MenuItem>
                        <MenuItem disabled={multipleSelected} onClick={handleCopy} disableRipple>
                            Copy Password
                        </MenuItem>
                        <MenuItem onClick={handleDelete} disableRipple>
                            Delete
                        </MenuItem>
                    </Menu>
            </div>
            }
        </div>
    );
};

export default PasswordActions;
