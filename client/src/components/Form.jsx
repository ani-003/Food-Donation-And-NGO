import React, { useState } from "react";
import './css/Mycss.css';
import { Link } from 'react-router-dom';
import { ChakraProvider, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react';
import axios from 'axios'; // Import axios

const DonSignup = () => {
  const [step, setStep] = useState(1);
  const initialFormState = {
    name: '',
    email: '',
    addresso: '',
    pincode: '',
    phoneNumber: '',
    username: '',
    password: '',
    passwordc: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const validatePageOne = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email address is invalid';
    }
    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Phone number must be a 10-digit number';
    }
    return validationErrors;
  };

  const validatePageTwo = () => {
    let validationErrors = {};
    if (!formData.username) validationErrors.username = 'Username is required';
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.passwordc) {
      validationErrors.passwordc = 'Password confirmation is required';
    } else if (formData.passwordc !== formData.password) {
      validationErrors.passwordc = 'Passwords do not match';
    }
    if (!formData.addresso) validationErrors.addresso = 'Address is required';
    if (!formData.pincode) {
      validationErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      validationErrors.pincode = 'Pincode must be a 6-digit number';
    }
    return validationErrors;
  };

  const handleNext = () => {
    const validationErrors = validatePageOne();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validatePageTwo();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Submit data to the backend
        await axios.post('http://localhost:5000/api/signup', formData);
        alert('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ChakraProvider>
      <div className="container col-lg-12" style={{ maxWidth: '600px', margin: 'auto' }}>
        <div className="form pl-3 pr-3">
          {step === 1 && (
            <>
              <h4 className="pt-3 text-left">SIGN UP - PAGE 1</h4><hr />
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
              </FormControl>
              <div className="row">
                <div className="col">
                  <FormControl isInvalid={errors.pincode}>
                    <FormLabel htmlFor="pincode">Pincode</FormLabel>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter your pincode"
                    />
                    {errors.pincode && <FormErrorMessage>{errors.pincode}</FormErrorMessage>}
                  </FormControl>
                </div>

                <div className="col">
                  <FormControl isInvalid={errors.addresso}>
                    <FormLabel htmlFor="addresso">Address</FormLabel>
                    <Input
                      id="addresso"
                      name="addresso"
                      value={formData.addresso}
                      onChange={handleChange}
                      placeholder="Enter your address"
                    />
                    {errors.addresso && <FormErrorMessage>{errors.addresso}</FormErrorMessage>}
                  </FormControl>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </FormControl></div>
                <div className="col">
                  <FormControl isInvalid={errors.phoneNumber}>
                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>}
                  </FormControl>
                </div>
              </div>

              <Button colorScheme="green" onClick={handleNext} mt={4}>
                Next
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="form2">
                <h4 className="pt-3 text-left">SIGN UP - PAGE 2</h4><hr />
                <FormControl isInvalid={errors.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                  />
                  {errors.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={errors.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={errors.passwordc}>
                  <FormLabel htmlFor="passwordc">Confirm Password</FormLabel>
                  <Input
                    id="passwordc"
                    name="passwordc"
                    type="password"
                    value={formData.passwordc}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                  {errors.passwordc && <FormErrorMessage>{errors.passwordc}</FormErrorMessage>}
                </FormControl>

                <span mt={4}>
                  <Link to="/tno">Terms and Conditions</Link>
                </span>

                <div className="col-12">
                  <Button colorScheme="yellow" type="button" onClick={() => setStep(1)} mt={4} mr={2}>
                    Back
                  </Button>
                  <Button colorScheme="green" type="submit" onClick={handleSubmit} mt={4}>
                    Submit
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ChakraProvider>
  );
};

export default DonSignup;
