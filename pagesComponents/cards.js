import React from 'react';
import Card from 'components/Card/Card';
import CardImage from 'components/Card/CardImage';
import CardRow from 'components/Card/CardRow';
import CardStatus from 'components/Card/CardStatus';
import CardStatusFooter from 'components/Card/CardStatusFooter';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import H5 from 'components/Typography/Heading5';
import H6 from 'components/Typography/Heading6';
import Paragraph from 'components/Typography/Paragraph';
import Button from 'components/Button/Button';
import InputIcon from 'components/Input/InputIcon';
import Icon from 'components/Icon/Icon';

export function RegularCard() {
    return (
        <Card>
            <CardImage
                src="https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
                alt="Card Image"
            />

            <CardBody>
                <H6 color="gray">Card Title</H6>
                <Paragraph color="gray">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
}

export function LoginCard() {
    return (
        <Card>
            <CardHeader color="lightBlue">
                <H5 color="white" style={{ marginBottom: 0 }}>
                    Login
                </H5>
            </CardHeader>

            <CardBody>
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        type="text"
                        color="lightBlue"
                        placeholder="First Name"
                        iconName="account_circle"
                    />
                </div>
                <div className="mb-8 px-4">
                    <InputIcon
                        type="email"
                        color="lightBlue"
                        placeholder="Email Address"
                        iconName="email"
                    />
                </div>
                <div className="mb-4 px-4">
                    <InputIcon
                        type="password"
                        color="lightBlue"
                        placeholder="password"
                        iconName="lock"
                    />
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex justify-center">
                    <Button
                        color="lightBlue"
                        buttonType="link"
                        size="lg"
                        ripple="dark"
                    >
                        Get Started
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export function StatusCard() {
    return (
        <Card>
            <CardRow>
                <CardHeader color="lightBlue" iconOnly>
                    <Icon name="groups" size="4xl" color="white" />
                </CardHeader>

                <CardStatus title="Users" amount="350,000" />
            </CardRow>

            <CardStatusFooter color="green" amount="97%" date="Since one week">
                <Icon color="green" name="arrow_upward" />
            </CardStatusFooter>
        </Card>
    );
}
