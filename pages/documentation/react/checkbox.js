import React, { useState } from 'react';
import Header from 'components/Documentation/Header';
import Container from 'components/Documentation/Container';
import Navbar from 'components/Documentation/Navbar';
import Heading from 'components/Documentation/Heading';
import CheckboxCode from 'components/Documentation/JavaScript/React/CheckboxCode';

export default function Checkbox() {
    const [copy, setCopy] = useState(null);

    return (
        <>
            <Header title="React Checkbox" />
            <Navbar />
            <Container>
                <Heading
                    title="React Checkbox"
                    description="Easy to use Material Tailwind checkbox component."
                />
                <CheckboxCode
                    copyText={copy === 'Alerts' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Alerts' : '')}
                />
            </Container>
        </>
    );
}
