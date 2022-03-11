import { Box, Button, Card, Container, Divider, Paper, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CoolCodeBlockComponent } from '../../../CoolCodeBlockComponent';

import './ButtonComponent.css';
import { TextButtonComponent } from './TextButtonComponent';

import API from '../../../utils/API';

export interface ButtonComponentProps {
  prop?: string;
}

class CodeContent {
  content: string = '';
}

//export function ButtonComponent({ prop = 'default value' }: ) {
export const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const [codeContent, setCodeContent] = useState<CodeContent>(new CodeContent());

  const code = '<Button variant="text" onClick={() => { clickMe("Text Button"); }}>Primary</Button>\n' +
    '<Button variant="text" onClick={() => { clickMe("Text Button Disabled"); }} disabled>Disabled</Button>\n' +
    '<Button variant="text" onClick={() => { clickMe(\'Text Button using link\'); }} href="#text-buttons">Link</Button>';

  const contained_code = '<Button variant="contained" onClick={() => { clickMe(\'Contained Button\'); }}>Contained</Button>\n' +
    '<Button variant="contained" disabled onClick={() => { clickMe(\'Contained Button Disabled\'); }}>Disabled</Button>\n' +
    '<Button variant="contained" href="#contained-buttons" onClick={() => { clickMe(\'Contained Button Using Hyperlink\'); }}>Link</Button>\n';

  const outlined_code =
    '<Button variant="outlined" onClick={() => { clickMe(\'Outlined Button\'); }}>Primary</Button>\n' +
    '<Button variant="outlined" disabled onClick={() => { clickMe(\'Outlined Button Disabled\'); }}> Disabled</Button>\n' +
    '<Button variant="outlined" href="#outlined-buttons" onClick={() => { clickMe(\'Outlined Button  Using Hyperlink\'); }}>Link</Button>';
  const clickMe = (msg: string) => {
    alert("Clicked on " + msg);
  };

  API.get('./TextButtonComponent.tsx').then((response) => {
    setCodeContent({ content: response.data });
  })
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
        <TextButtonComponent />
      </Paper>
      <CoolCodeBlockComponent code={codeContent.content} language="tsx" showLineNumbers={false} startingLineNumber={1} />
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
      {/* <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        {switch(value){
        case {0}:
        <Box sx={{ p: 3 }}>
          <Typography>Item One</Typography>
        </Box>
        break;
        case {1}:
        <Box sx={{ p: 3 }}>
          <Typography>Item One</Typography>
        </Box>
        case 2:
        <Box sx={{ p: 3 }}>
          <Typography>Item One</Typography>
        </Box>
        default: <></>
        
        }}


      </Box>  */}
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
