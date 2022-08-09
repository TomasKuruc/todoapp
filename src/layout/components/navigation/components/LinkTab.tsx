import React from 'react';
import {Tab} from "@mui/material";
import {Link} from "react-router-dom";

interface Props {
    label: string,
    href: string
}

const LinkTab = (props: Props) => {
    return (
        <Link to={props.href}>
            <Tab
                component="span"
                label={props.label}
            />
        </Link>
    );
};

export default LinkTab;