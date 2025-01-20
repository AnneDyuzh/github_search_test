import { SelectHTMLAttributes } from 'react';

import './select.css';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    values: {
        value: string;
        label: string;
    }[];
};

export const Select = ({ values, ...props }: SelectProps) => {
    return (
        <select {...props} className={'select'}>
            {values.map((value) => (
                <option key={value.value} value={value.value}>
                    {value.label}
                </option>
            ))}
        </select>
    );
};