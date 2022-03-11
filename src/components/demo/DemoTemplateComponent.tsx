import { Card, Typography, Divider, Paper } from '@mui/material';
import { CoolCodeBlockComponent } from '../CoolCodeBlockComponent';
import React, { useState } from 'react';

import './DemoTemplateComponent.css';
import API from '../utils/API';
interface Props {
  path: string;
  name: string;
  component: any;
}
export const DemoTemplateComponent: React.FC<Props> = ({ name, path, component }) => {
  const [content, setContent] = useState('');

  const CustomComponent = component;

  API.get(path).then((response) => {
    setContent(response.data);
  });

  return (
    <Card className="internal-paper">
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexGrow: 1,
        }}
      >
        {name}
      </Typography>
      <Divider />
      <Paper elevation={0}
        sx={{
          margin: '15px 0 15px 0',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <CustomComponent />
      </Paper>
      <CoolCodeBlockComponent
        code={content}
        language="tsx"
        showLineNumbers={false}
        startingLineNumber={1}
      />
    </Card>
  );
};
