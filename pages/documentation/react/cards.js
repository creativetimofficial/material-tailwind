import React, { useState } from 'react';
import Header from 'components/Documentation/Header';
import Container from 'components/Documentation/Container';
import Navbar from 'components/Documentation/Navbar';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading';
import BlogCardCode from 'components/Documentation/JavaScript/React/Cards/BlogCardCode';
import LoginCardCode from 'components/Documentation/JavaScript/React/Cards/LoginCardCode';
import StatusCardCode from 'components/Documentation/JavaScript/React/Cards/StatusCardCode';

export default function Cards() {
    const [copy, setCopy] = useState(null);
    return (
        <>
            <Header title="React Cards" />
            <Navbar />
            <Container>
                <Heading
                    title="React Cards"
                    description="Material Tailwind cards provide a flexible and extensible content container with multiple variants and options, more cards coming soon."
                />
                <SmallHeading title="Blog Card" />
                <BlogCardCode
                    copyText={copy === 'Alerts' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Alerts' : '')}
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Login Card" />
                <LoginCardCode
                    copyText={copy === 'Alerts' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Alerts' : '')}
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Status Card" />
                <StatusCardCode
                    copyText={copy === 'Alerts' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Alerts' : '')}
                />
            </Container>
        </>
    );
}
