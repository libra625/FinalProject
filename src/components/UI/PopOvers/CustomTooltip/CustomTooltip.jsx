import {styled} from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import {tooltipClasses} from "@mui/material";

const CustomTooltip = styled(({className, children, title}) => (
    <Tooltip title={title} arrow classes={{popper: className}}>
        {children}
    </Tooltip>
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "16px",
        width: '280px',
        padding: "8px 12px",
        borderRadius: "4px",
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: "#fff",
    },
}));

export default CustomTooltip;
