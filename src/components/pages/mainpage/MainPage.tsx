import { Container, Typography } from '@mui/material';
import { DemoTemplateComponent } from '../../demo/DemoTemplateComponent';
import './MainPage.css';

interface Props {
    prop?: string;
    linkname: string;
    childs: any[];
}
export const MainPage: React.FC<Props> = ({ linkname, prop, childs }) => {


    return <div >
        <Typography
            component="h1"
            variant="h4"
            color="inherit"
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexGrow: 1
            }}
        >
            {linkname}
        </Typography>


        {childs.map((component, index) => {

            return <DemoTemplateComponent className="CustomComponent" {...component} />;
        })
        }

    </div>;
}