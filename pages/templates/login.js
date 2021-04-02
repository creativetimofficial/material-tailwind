import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import H5 from "components/Typography/Heading5";
import InputIcon from "components/Input/InputIcon";
import Button from "components/Button/Button";

export default function Login() {
  return (
    <div
      className="w-screen h-screen relative bg-position flex flex-col justify-between"
      style={{
        background: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${require("../../assets/img/background-1920x1280.jpg")})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Navbar />

      <div className="grid place-items-center">
        <div className="top-1/2 max-w-sm w-10/12">
          <Card>
            <div className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 -mt-12 rounded-lg text-white px-12 py-8 mb-8 text-center shadow-xl">
              <H5>Login</H5>
            </div>

            <CardBody>
              <div className="mb-8">
                <InputIcon
                  type="text"
                  color="lightBlue"
                  placeholder="First Name"
                  iconName="account_circle"
                />
              </div>
              <div className="mb-8">
                <InputIcon
                  type="email"
                  color="lightBlue"
                  placeholder="Email Address"
                  iconName="email"
                />
              </div>
              <div className="mb-8">
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
