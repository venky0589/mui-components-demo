import { Button } from '@mui/material';



export function ContainedButtonComponent() {
    const clickMe = (msg: string) => {
        alert("Clicked on " + msg);
    };
    return <><Button variant="contained" onClick={() => { clickMe('Contained Button'); }}>Contained</Button>
        <Button variant="contained" disabled onClick={() => { clickMe('Contained Button Disabled'); }}>Disabled</Button>
        <Button variant="contained" href="#contained-buttons" onClick={() => { clickMe('Contained Button Using Hyperlink'); }}>Link</Button>
    </>;
}