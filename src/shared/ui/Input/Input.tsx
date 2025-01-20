import React, { InputHTMLAttributes } from 'react';
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = 'input_element', ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={`input ${className}`}
                {...props}
            />
        );
    }
);
