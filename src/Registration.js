import React, { useState, useEffect } from "react";
import { Container, Row, Col, BDiv, Form, Button } from "bootstrap-4-react";

const Registration = () => {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    country: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must vbe atleast 3 characters long";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile Number is required";
    } else if (values.mobile.length !== 10) {
      errors.mobile = "Mobile Number must be 10 digits";
    }
    if (!values.city) errors.city = "City is required";
    if (!values.state) errors.state = "State is required";
    if (!values.country) errors.country = "Country is required";
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setFormValues(initialValues);
    }
  }, [formErrors, formValues, isSubmit]);

  return (
    <>
      <Container p="5">
        <BDiv bg="primary" text="center white" p="3" mb="3">
          Registration Form
        </BDiv>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <BDiv bg="success" text="white" p="2" m="1">
            Form Validation Success
          </BDiv>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
        <Form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col col="md">
              <Form.Group>
                <label htmlFor="name">Name</label>
                <Form.Input
                  placeholder="Enter your name"
                  type="text"
                  value={formValues.name}
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </Form.Group>
              {formErrors.name && (
                <BDiv bg="danger" text="white" p="1">
                  {formErrors.name}
                </BDiv>
              )}
            </Col>
            <Col col="md">
              <Form.Group>
                <label htmlFor="Email">Email address</label>
                <Form.Input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="Enter email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </Form.Group>
              {formErrors.email && (
                <BDiv bg="danger" text="white" p="1">
                  {formErrors.email}
                </BDiv>
              )}
            </Col>
          </Row>
          <Row>
            <Col col="md">
              <Form.Group>
                <label htmlFor="Mobile">Mobile Number</label>
                <Form.Input
                  type="number"
                  id="Mobile"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={formValues.mobile}
                  onChange={handleChange}
                />
                <Form.Text text="muted">Please enter 10 digits only </Form.Text>
              </Form.Group>
              {formErrors.mobile && (
                <BDiv bg="danger" text="white" p="1">
                  {formErrors.mobile}
                </BDiv>
              )}
            </Col>
            <Col col="md">
              <Form.Group>
                <label htmlFor="city">City</label>
                <Form.Input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter city"
                  value={formValues.city}
                  onChange={handleChange}
                />
              </Form.Group>
              {formErrors.city && (
                <BDiv bg="danger" text="white" p="1">
                  {formErrors.city}
                </BDiv>
              )}
            </Col>
          </Row>
          <Row>
            <Col col="md">
              <Form.Group>
                <label htmlFor="state">State</label>
                <Form.Input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Enter state"
                  value={formValues.state}
                  onChange={handleChange}
                />
              </Form.Group>
              {formErrors.state && (
                <BDiv bg="danger" text="white" p="1">
                  {formErrors.state}
                </BDiv>
              )}
            </Col>
            <Col col="md">
              <Form.Group>
                <label htmlFor="country">Country</label>
                <Form.Input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter country"
                  value={formValues.country}
                  onChange={handleChange}
                />
              </Form.Group>
              {formErrors.country && (
                <BDiv bg="danger" text="white" p="1">
                  {formErrors.country}
                </BDiv>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <label htmlFor="message">User Note (If any)</label>
                <Form.Textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formValues.message}
                  onChange={handleChange}
                ></Form.Textarea>
                {/* <Form.Input
                  type="text"
                  id="message"
                  placeholder="Enter message"
                /> */}
              </Form.Group>
            </Col>
          </Row>
          <BDiv text="center">
            <Button primary type="submit">
              Submit
            </Button>
          </BDiv>
        </Form>
      </Container>
    </>
  );
};

export default Registration;
