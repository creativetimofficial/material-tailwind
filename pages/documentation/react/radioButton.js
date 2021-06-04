import React, { useState } from 'react';
import Header from 'components/Documentation/Header';
import Container from 'components/Documentation/Container';
import Navbar from 'components/Documentation/Navbar';
import Heading from 'components/Documentation/Heading';
import RadioButtonCode from 'components/Documentation/JavaScript/React/RadioButtonCode';

export default function RadioButton() {
    const [copy, setCopy] = useState(null);

    return (
        <>
            <Header title="React Radio Button" />
            <Navbar />
            <Container>
                <Heading
                    title="React Radio Button"
                    description="Easy to use Material Tailwind radio button component."
                />
                <RadioButtonCode
                    copyText={copy === 'Alerts' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Alerts' : '')}
                />
            </Container>
        </>
    );
}
