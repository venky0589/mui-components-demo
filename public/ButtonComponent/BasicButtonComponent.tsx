import { Button } from '@mui/material';



export function BasicButtonComponent() {
    const clickMe = (msg: string) => {
        alert("Clicked on " + msg);
    };
    return <><Button variant="text" onClick={() => { clickMe('Text Button'); }}>Primary</Button>
        <Button variant="contained" onClick={() => { clickMe('Contained Button'); }} >Button</Button>
        <Button variant="outlined" onClick={() => { clickMe('Outlined Button'); }} href="#text-buttons">Link</Button></>;
}