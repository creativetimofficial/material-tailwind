import React from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading";
import LeadText from "components/Typography/LeadText";

export default function QuickStart() {
  return (
    <>
      <Header title="License" />
      <Navbar />
      <Container>
        <Heading
          title="License"
          description="Learn more about the Material Tailwind license."
        />

        <LeadText color="gray">MIT License</LeadText>
        <LeadText color="gray">
          Copyright &copy; 2021 Material Tailwind by{" "}
          <a
            className="text-light-blue-500"
            href="https://creative-tim.com?ref=material-tailwind"
          >
            Creative Tim
          </a>
        </LeadText>

        <p className="text-gray-700 font-light mb-5 mt-6">
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          “Software”), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>

        <p className="text-gray-700 font-light mb-5">
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>

        <p className="text-gray-700 font-light">
          THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </Container>
    </>
  );
}
