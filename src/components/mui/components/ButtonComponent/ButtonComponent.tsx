import { Button, Card, Container, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { CoolCodeBlockComponent } from '../../../CoolCodeBlockComponent';

import './ButtonComponent.css';

export interface ButtonComponentProps {
  prop?: string;
}

export function ButtonComponent({ prop = 'default value' }: ButtonComponentProps) {
  const code = '<Button variant="text" onClick={() => { clickMe("Text Button"); }}>Primary</Button>\n' +
    '<Button variant="text" onClick={() => { clickMe("Text Button Disabled"); }} disabled>Disabled</Button>\n' +
    '<Button variant="text" onClick={() => { clickMe(\'Text Button using link\'); }} href="#text-buttons">Link</Button>';
  const clickMe = (msg: string) => {
    alert("Clicked on " + msg);
  };
  const contained_code = '<Button variant="contained" onClick={() => { clickMe(\'Contained Button\'); }}>Contained</Button>\n' +
    '<Button variant="contained" disabled onClick={() => { clickMe(\'Contained Button Disabled\'); }}>Disabled</Button>\n' +
    '<Button variant="contained" href="#contained-buttons" onClick={() => { clickMe(\'Contained Button Using Hyperlink\'); }}>Link</Button>\n';

  const outlined_code =
    '<Button variant="outlined" onClick={() => { clickMe(\'Outlined Button\'); }}>Primary</Button>\n' +
    '<Button variant="outlined" disabled onClick={() => { clickMe(\'Outlined Button Disabled\'); }}> Disabled</Button>\n' +
    '<Button variant="outlined" href="#outlined-buttons" onClick={() => { clickMe(\'Outlined Button  Using Hyperlink\'); }}>Link</Button>';
  return <div className="ButtonComponent">
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
      Button
    </Typography>
    <Card className="internal-paper">
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexGrow: 1
        }}
      >
        Text Button
      </Typography>
      <Divider />
      <Paper elevation={0} sx={{ margin: '15px 0 15px 0', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Button variant="text" onClick={() => { clickMe('Text Button'); }}>Primary</Button>
        <Button variant="text" onClick={() => { clickMe('Text Button Disabled'); }} disabled>Disabled</Button>
        <Button variant="text" onClick={() => { clickMe('Text Button using link'); }} href="#text-buttons">Link</Button>
      </Paper>
      <CoolCodeBlockComponent code={code} language="tsx" showLineNumbers={false} startingLineNumber={1} />
    </Card>
    <Card className="internal-paper">
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexGrow: 1
        }}
      >
        Contained button
      </Typography>
      <Divider />
      <Paper elevation={0} sx={{ margin: '15px 0 15px 0', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Button variant="contained" onClick={() => { clickMe('Contained Button'); }}>Contained</Button>
        <Button variant="contained" disabled onClick={() => { clickMe('Contained Button Disabled'); }}>Disabled</Button>
        <Button variant="contained" href="#contained-buttons" onClick={() => { clickMe('Contained Button Using Hyperlink'); }}>Link</Button>
        {/* <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button> */}
      </Paper>
      <CoolCodeBlockComponent code={contained_code} language="tsx" showLineNumbers={false} startingLineNumber={1} />
    </Card>
    <Card className="internal-paper">
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexGrow: 1
        }}
      >
        Outlined button
      </Typography>
      <Divider />
      <Paper elevation={0} sx={{ margin: '15px 0 15px 0', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Button variant="outlined" onClick={() => { clickMe('Outlined Button'); }}>Primary</Button>
        <Button variant="outlined" disabled onClick={() => { clickMe('Outlined Button Disabled'); }}>Disabled</Button>
        <Button variant="outlined" href="#outlined-buttons" onClick={() => { clickMe('Outlined Button with Hyperlink'); }}>Link</Button>

      </Paper>
      <CoolCodeBlockComponent code={outlined_code} language="tsx" showLineNumbers={false} startingLineNumber={1} />
    </Card>
  </div >;
}
