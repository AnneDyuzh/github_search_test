import React from 'react';
import { Layout } from '@app/ui/Layout';
import { Autocomplete } from '@features/Autocomplete/Autocomplete';

export default function Home() {
    return (
        <Layout>
            <Autocomplete />
        </Layout>
    );
};

