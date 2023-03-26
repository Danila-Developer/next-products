import React, {FC, PropsWithChildren, useState} from 'react';
import style from './Button.module.css'
import Link from "next/link";

type ButtonTypes = 'default' | 'success' | 'danger'
type ButtonSize = 'default' | 'big'
type ButtonDisplay = 'block' | 'inline'

interface ButtonProps {
    type?: ButtonTypes;
    size?: ButtonSize;
    display?: ButtonDisplay;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
    disabled?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
     type= 'default',
     size= 'default',
     display = 'inline',
     href= '',
     onClick = () => {},
     children,
     isActive= false,
     disabled = false
}) => {
    const activeStyle = isActive ? 'active' : ''
    const disabledStyle = disabled ? 'disabled' : ''

    const clickHandler =  () => {
        if (disabled) return
        onClick()
    }

    return (
        <Link
            href={href}
            className={[
                style.button,
                style[`type_${type}`],
                style[`size_${size}`],
                style[`display_${display}`],
                style[activeStyle],
                style[disabledStyle]]
                .join(' ')
            }
            onClick={clickHandler}
        >
            {children}
        </Link>
    );
};

export default Button;