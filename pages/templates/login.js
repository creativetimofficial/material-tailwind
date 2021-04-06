import LoginPage from "./Login/LoginPage";
import LoginNavbar from "./Login/LoginNavbar";
import LoginFooter from "./Login/LoginFooter";
import LoginContainer from "./Login/LoginContainer";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import H5 from "components/Typography/Heading5";
import InputIcon from "components/Input/InputIcon";
import Button from "components/Button/Button";

export default function Login() {
  return (
    <LoginPage>
      <LoginNavbar />
      <LoginContainer>
        <Card>
          <CardHeader color="lightBlue">
            <H5>Login</H5>
          </CardHeader>

          <CardBody>
            <div className="mb-8 px-4">
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
            <div className="mb-8 px-4">
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
      </LoginContainer>
      <LoginFooter />
    </LoginPage>
  );
}
