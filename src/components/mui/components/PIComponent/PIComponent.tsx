import React from 'react';

import './PIComponent.css';

export interface PIComponentProps {
  prop?: string;
}

export function PIComponent({ prop = 'default value' }: PIComponentProps) {
  return <div className="PIComponent">PIComponent {prop}</div>;
}
