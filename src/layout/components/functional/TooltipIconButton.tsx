import { IconButton, Tooltip } from "@material-ui/core";
import { FC } from "react"

type TooltipIconButtonProps = {
    title: string;
    handleOnClick(): void;
}

const TooltipIconButton: FC<TooltipIconButtonProps> = ({ children, title, handleOnClick }) => (
    <Tooltip title={title}>
        <IconButton component="a" onClick={handleOnClick}>
            {children}
        </IconButton>
    </Tooltip>
);

export default TooltipIconButton;
