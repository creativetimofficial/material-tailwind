import React, { useState } from 'react';
import Header from 'components/Documentation/Header';
import Container from 'components/Documentation/Container';
import Navbar from 'components/Documentation/Navbar';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';
import TextareaCode from 'components/Documentation/JavaScript/React/TextareaCode';

export default function Textarea() {
    const [copy, setCopy] = useState(null);
    return (
        <>
            <Header title="React Textarea" />
            <Navbar />
            <Container>
                <Heading
                    title="React Textarea"
                    description="Easily create textarea with different status and sizes using Material Tailwind textarea component"
                />
                <SmallHeading title="Textarea" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Textarea"
                    size="regular"
                    outline={false}
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Outline Textare" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Outline Textarea"
                    size="regular"
                    outline={true}
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Small Textarea" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Small Textarea"
                    size="sm"
                    outline={false}
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Large Textarea" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Large Textarea"
                    size="lg"
                    outline={false}
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Small Outline Textarea" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Small Outline Textarea"
                    size="sm"
                    outline={true}
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Large Outline Textarea" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Large Outline Textarea"
                    size="lg"
                    outline={true}
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Textarea with Error" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Textarea with Error"
                    size="Regular"
                    outline={false}
                    errorMessage="Its an error"
                    error="Its an error"
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Outline Textarea with Error" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Outline Textarea with Error"
                    size="Regular"
                    outline={true}
                    errorMessage="Its an error"
                    error="Its an error"
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Textarea with Success" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Textarea with Success"
                    size="Regular"
                    outline={false}
                    successMessage="Its a success"
                    success="Its a success"
                />

                <div className="h-20">&nbsp;</div>

                <SmallHeading title="Outline Textarea with Success" />
                <TextareaCode
                    copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                    onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                    placeholder="Outline Textarea with Success"
                    size="Regular"
                    outline={true}
                    successMessage="Its a success"
                    success="Its a success"
                />
            </Container>
        </>
    );
}
