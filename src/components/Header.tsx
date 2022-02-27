import { FC, ReactElement } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
// define interface to represent component props
interface Props {
    title: String
}


const Header: FC<Props> = ({ title }): ReactElement => {
    return (
        <div>
            {title}
            <Button variant="contained">Hello World</Button>
        </div>
    );
};

export default Header;