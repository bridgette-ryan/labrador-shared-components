import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import ButtonProps from './types/Button.types';

export const Button = (props: ButtonProps) => {
    return <BootstrapButton variant={ props.variant ? props.variant : 'primary'}>
        
        {props.label ? props.label : ''}
    </BootstrapButton>;
};

export default Button;
