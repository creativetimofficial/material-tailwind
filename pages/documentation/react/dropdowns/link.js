import React, { useState } from 'react';
import Header from 'components/Documentation/Header';
import Container from 'components/Documentation/Container';
import Navbar from 'components/Documentation/Navbar';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';
import DropdownCode from 'components/Documentation/JavaScript/React/DropdownCode';

export default function Dropdowns() {
    const [copy, setCopy] = useState(null);

    return (
        <>
            <Header title="React Dropdowns" />
            <Navbar />
            <Container>
                <Heading
                    title="React Dropdowns"
                    description="Toggle contextual overlays for displaying lists of links and more with the Material Tailwind dropdown plugin."
                />
                <SmallHeading title="Dropdown" />
                <DropdownCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="link"
                    placement="bottom-start"
                    size="regular"
                    rounded={false}
                    buttonText="Dropdown"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Rounded Dropdown" />
                <DropdownCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="link"
                    placement="bottom-start"
                    size="regular"
                    rounded={true}
                    buttonText="Rounded Dropdown"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Small Dropdown" />
                <DropdownCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placement="bottom-start"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    buttonText="Small Dropdown"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Regular Dropdown" />
                <DropdownCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placement="bottom-start"
                    buttonType="link"
                    size="regular"
                    rounded={false}
                    buttonText="Regular Dropdown"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Large Dropdown" />
                <DropdownCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placement="bottom-start"
                    buttonType="link"
                    size="lg"
                    rounded={false}
                    buttonText="Large Dropdown"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Block Level Dropdown" />
                <DropdownCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placement="bottom-start"
                    buttonType="link"
                    size="lg"
                    rounded={false}
                    buttonText="Block Level Dropdown"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={true}"
                    block
                />
            </Container>
        </>
    );
}
