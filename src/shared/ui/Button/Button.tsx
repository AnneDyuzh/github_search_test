import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
    label?: string;
    className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ icon, label, className = '', ...props }, ref) => {
        return (
            <button ref={ref} className={`button ${className}`} {...props}>
                {icon}
                {label && <span>{label}</span>}
            </button>
        );
    }
);
