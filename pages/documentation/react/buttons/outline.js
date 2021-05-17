import React, { useState } from 'react';
import Header from 'components/Documentation/Header';
import Container from 'components/Documentation/Container';
import Navbar from 'components/Documentation/Navbar';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';
import ButtonCode from 'components/Documentation/JavaScript/React/ButtonCode';
import Icon from 'components/Icon/Icon';

export default function Buttons() {
    const [copy, setCopy] = useState(null);

    return (
        <>
            <Header title="React Buttons" />
            <Navbar />
            <Container>
                <Heading
                    title="React Buttons"
                    description="Use Material Tailwind buttons for actions in forms, dialogues, and more with support for multiple sizes, states, and more."
                />
                <SmallHeading title="Button" />
                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="regular"
                    rounded={false}
                    buttonChildren="Button"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                    withIconOnly="iconOnly={false}"
                >
                    Button
                </ButtonCode>

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Rounded Button" />
                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="regular"
                    rounded={true}
                    buttonChildren="Rounded Button"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                    withIconOnly="iconOnly={false}"
                >
                    Rounded Button
                </ButtonCode>

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Small Button" />
                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="sm"
                    rounded={false}
                    buttonChildren="Small Button"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                    withIconOnly="iconOnly={false}"
                >
                    Small Button
                </ButtonCode>

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Regular Button" />
                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="regular"
                    rounded={false}
                    buttonChildren="Regular Button"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                    withIconOnly="iconOnly={false}"
                >
                    Regular Button
                </ButtonCode>

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Large Button" />
                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="lg"
                    rounded={false}
                    buttonChildren="Large Button"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={false}"
                    withIconOnly="iconOnly={false}"
                >
                    Large Button
                </ButtonCode>

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Block Level Button" />
                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="lg"
                    rounded={false}
                    buttonChildren="Block Level Button"
                    rippleEffect='ripple="dark"'
                    ripple="dark"
                    blockLevel="block={true}"
                    withIconOnly="iconOnly={false}"
                    block
                >
                    Block Level Button
                </ButtonCode>

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="With Icon Before" />

                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="regular"
                    rounded={false}
                    rippleEffect='ripple="dark"'
                    hasIcon={true}
                    buttonChildren={`<Icon name="favorite" /> With Icon Before`}
                    ripple="dark"
                    blockLevel="block={false}"
                    withIconOnly="iconOnly={false}"
                >
                    <Icon name="favorite" />
                    With Icon Before
                </ButtonCode>

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="With Icon After" />

                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="regular"
                    rounded={false}
                    rippleEffect='ripple="dark"'
                    hasIcon={true}
                    buttonChildren={`With Icon After <Icon name="favorite" />`}
                    ripple="dark"
                    blockLevel="block={false}"
                    withIconOnly="iconOnly={false}"
                >
                    With Icon After
                    <Icon name="favorite" />
                </ButtonCode>

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="With Icon Only" />

                <ButtonCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    buttonType="outline"
                    size="regular"
                    rounded={true}
                    rippleEffect='ripple="dark"'
                    hasIcon={true}
                    buttonChildren={`<Icon name="favorite" size="sm" />`}
                    iconOnly
                    ripple="dark"
                    blockLevel="block={false}"
                    withIconOnly="iconOnly={true}"
                >
                    <Icon name="favorite" size="sm" />
                </ButtonCode>
            </Container>
        </>
    );
}
