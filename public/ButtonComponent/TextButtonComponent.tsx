import { Button } from '@mui/material';



export function TextButtonComponent() {
    const clickMe = (msg: string) => {
        alert("Clicked on " + msg);
    };
    return <><Button variant="text" onClick={() => { clickMe('Text Button'); }}>Primary</Button>
        <Button variant="text" onClick={() => { clickMe('Text Button Disabled'); }} disabled>Disabled</Button>
        <Button variant="text" onClick={() => { clickMe('Text Button using link'); }} href="#text-buttons">Link</Button></>;
}