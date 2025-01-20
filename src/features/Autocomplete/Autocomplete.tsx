import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { RepositoryList } from '@widgets/RepositoryList/RepositoryList';
import { fetchRepos } from '@shared/api/api';
import { Input } from '@shared/ui/Input/Input';

export const Autocomplete = observer(() => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchRepos({ query: inputValue || undefined })
        }, 500);

        return () => clearTimeout(timer);
    }, [inputValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search"
                className="search_input"
            />
            <RepositoryList />
        </>
    );
});
