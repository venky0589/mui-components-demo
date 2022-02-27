import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {
    Route,
    Routes
} from "react-router-dom";
import { ButtonComponent, PIComponent } from './mui/components';
interface NavigationPath {
    path: string;
    exact?: boolean;
    linkname: string;
    component: any;
}

interface NavigationCategory {
    name: string;
    items: NavigationPath[]
}

const ListLinkCustom = (props: { primary: any; path: any; }) => {
    const { primary, path } = props;
    return <ListItemButton component="a" href={path}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={primary} />
    </ListItemButton>
}


//export const ButtonComponent = (props: any) => (<h2>Button</h2>);
//export const PIComponent = (props: any) => (<h2>Progress Indicator</h2>);

export const routes: NavigationCategory[] =
    [{
        name: "COMPONENTS",
        items: [{
            path: "/Button",
            exact: true,
            linkname: 'Button',
            component: ButtonComponent
        },
        {
            path: "/ProgressIndicator",
            linkname: "Progress Indicator",
            component: PIComponent
        }]
    }];

export const items = (
    <React.Fragment>
        {routes.map((route, index) => (<><ListSubheader key="{ index}" component="div" inset>
            {route.name}
        </ListSubheader>
            {route.items.map((item, index) => (<ListLinkCustom key={index} primary={item.linkname} path={item.path} />))}
        </>
        ))
        }

    </React.Fragment>
);


export const itemsBody = (
    <Routes >
        {
            routes.flatMap(r => r.items.map(i => i)).map((route, i) => (
                <Route
                    path={route.path}
                    element={<route.component />}
                />
            ))
        }
    </Routes >
)

export const mainListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            COMPONENTS
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Button" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Progress Indicator" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Icons" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Date Time Picker" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Modal Dialog Box" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            CONTAINERS
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Card" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tabs" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Data Grid" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Pagination" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Breadcrumbs" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="App Bar" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Alert" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Drawer" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Link" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText primary="Table" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Radio" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Form Control" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="MenuItem" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Select" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Table" />
        </ListItemButton>


    </React.Fragment>
);
