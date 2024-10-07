import React, { useState } from "react";
import './css/Mycss.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    InputGroup,
    InputRightElement,
    Button
} from '@chakra-ui/react';
import axios from 'axios';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const handleClick = () => setShow(!show);

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signin', { username, password });
            console.log('Signin successful:', response.data);
            alert('Signin successful');
        } catch (error) {
            console.error('Error during signin:', error);
            setError('Invalid username or password');
        }
    };

    return (
        <ChakraProvider>
            <div className="container col-lg-12">
                <div className="form pl-3 pr-3">
                    <h4 className="pt-3 text-left">SIGN IN</h4><hr></hr>
                    <form onSubmit={handleSubmit}>
                        <FormControl isInvalid={!!error}>
                            <FormLabel fontSize={'14px'}>Username <sup style={{ color: 'red' }}>*</sup></FormLabel>
                            <Input
                                type='text'
                                name="username"
                                placeholder="Enter your username"
                                value={username}
                                errorBorderColor='gray.100'
                                onChange={handleUsername}
                            />
                        </FormControl>

                        <FormControl mt={4} isInvalid={!!error}>
                            <FormLabel fontSize={'14px'}>Password <sup style={{ color: 'red' }}>*</sup></FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    name="password"
                                    placeholder='Enter your password'
                                    value={password}
                                    errorBorderColor='gray.100'
                                    onChange={handlePassword}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {error && <FormErrorMessage ml={1}>{error}</FormErrorMessage>}
                        </FormControl>

                        <Button colorScheme='green' mt={5} type="submit" style={{ width: '100%' }}>
                            Sign-In
                        </Button>
                    </form>
                </div>
            </div>
        </ChakraProvider>
    );
};

export default Signin;
