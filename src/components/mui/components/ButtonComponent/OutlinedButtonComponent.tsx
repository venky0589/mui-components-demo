import { Button } from '@mui/material';



export function OutlinedButtonComponent() {
    const clickMe = (msg: string) => {
        alert("Clicked on " + msg);
    };
    return <><Button variant="outlined" onClick={() => { clickMe('Outlined Button'); }}>Primary</Button>
        <Button variant="outlined" disabled onClick={() => { clickMe('Outlined Button Disabled'); }}>Disabled</Button>
        <Button variant="outlined" href="#outlined-buttons" onClick={() => { clickMe('Outlined Button with Hyperlink'); }}>Link</Button>
    </>;
}