import React, { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { Checkbox, Center, Button } from "@chakra-ui/react";
import { useRef } from "react";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputRightElement,
    InputGroup
} from "@chakra-ui/react";


const Ngo = () => {
    const [user, setuser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        username: '',
        password: '',
        confirmpassword: '',

    })
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [address, setaddress] = useState('')
    const [pincode, setpincode] = useState('')
    const [username, setusername] = useState('')
    const [show, setShow] = useState(false)
    // const [agree, setAgree] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('')


    const handlename = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        setname(e.target.value)
        console.log(user)
    }
    const handleemail = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        setemail(e.target.value)
        console.log(user)
    }
    const handlephone = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        setphone(e.target.value)
        console.log(user)
    }
    const handleaddress = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        setaddress(e.target.value)
        console.log(user)
    }
    const handlepincode = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        setpincode(e.target.value)
        console.log(user)
    }
    const handleuser = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        setusername(e.target.value)
        console.log(user)
    }
    const handlepassword = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        setPassword(e.target.value)
        console.log(user)
    }
    const handleconfirmpassword = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        setconfirmpassword(e.target.value)
        console.log(user)
    }
    const handleClick = () => setShow(!show)
    const handleCheckboxChange = () => setAgreed(!agreed);



    const isErrorname = name === ''
    const isErrorEmail = email === ''
    const isErrorMobile = phone === ''
    const isErrorAddress = address === ''
    const isErrorPincode = pincode === ''
    const isErrorUser = username === ''
    const isErrorPassword = password === ''
    const isErrorConfirmpassword = confirmpassword === ''


    const nameValid = useRef(null);
    const emailValid = useRef(null);
    const phoneValid = useRef(null);
    const addressValid = useRef(null);
    const pincodeValid = useRef(null);
    const userValid = useRef(null);
    const passwordValid = useRef(null);
    const confirmpasswordValid = useRef(null);
    const clickValid = useRef(null);

    const RegisterData = async (e) => {
        e.preventDefault()
        const { name, email, phone, address, pincode, username, password, confirmpassword } = user
        if (!name) {
            // alert("please enter the name")
            nameValid.current.focus();
        } else if (!email) {
            // alert("please enter the Email")
            emailValid.current.focus();
        } else if (!phone) {
            // alert("please enter your Phone Number")
            phoneValid.current.focus();
        } else if (phone.length !== 10) {
            alert("please enter your Phone Number")
            phoneValid.current.focus();
        } else if (!address) {
            // alert("please enter the address")
            addressValid.current.focus();
        } else if (!pincode) {
            // alert("please enter the pincode")
            pincodeValid.current.focus();
        } else if (!username) {
            // alert("please enter the username")
            userValid.current.focus();
        } else if (!password) {
            // alert("please enter the password")
            passwordValid.current.focus();
        } else if (!confirmpassword) {
            // alert("please enter the confirm password")
            confirmpasswordValid.current.focus();
        } else if (password !== confirmpassword) {

            alert("enter the same password")
            confirmpasswordValid.current.focus();

        } else if (!agreed) {
            alert("click on the agree check box")
            clickValid.current.focus();
        }

    }
    const handleReset = () => {
        setname('');
        setemail('');
        setphone('')
        setaddress('');
        setpincode('');
        setusername('');
        setPassword('');
        setconfirmpassword('');
        setAgreed('');
    };
    return (
        <>
            <ChakraProvider>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <div className="form pl-3 pr-3">
                                <Center>
                                    <u><h4 className="pt-3"><b>NGO Registration Form</b></h4></u>
                                </Center>
                                <hr></hr>
                                <form>
                                    <FormControl isInvalid={isErrorname}>
                                        <FormLabel fontSize={'14px'}>NGO Name: <sup style={{ color: 'red' }}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='text'
                                            name="name"
                                            placeholder="Enter the Name"
                                            ref={nameValid}
                                            value={name}
                                            onChange={handlename} />
                                        {!isErrorname ? (
                                            <FormHelperText>

                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <FormControl isInvalid={isErrorEmail}>
                                        <FormLabel fontSize={'14px'} mt={4}>Email Address: <sup style={{ color: 'red' }}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='email'
                                            name="email"
                                            placeholder="abcd123@gmail.com"
                                            ref={emailValid}
                                            value={email}
                                            onChange={handleemail} />
                                        {!isErrorEmail ? (
                                            <FormHelperText>

                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <FormControl isInvalid={isErrorMobile}>
                                        <FormLabel fontSize={'14px'} mt={4}>Phone No. : <sup style={{ color: 'red' }}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='number'
                                            name="phone"
                                            placeholder="Enter your Mobile.No"
                                            ref={phoneValid}
                                            value={phone}
                                            onChange={handlephone} />
                                        {!isErrorMobile ? (
                                            <FormHelperText>

                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <FormControl isInvalid={isErrorAddress}>
                                        <FormLabel fontSize={'14px'} mt={4}>Address. : <sup style={{ color: 'red' }}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='text'
                                            name="address"
                                            placeholder="Enter your current address"
                                            ref={addressValid}
                                            value={address}
                                            onChange={handleaddress} />
                                        {!isErrorAddress ? (
                                            <FormHelperText>

                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <FormControl isInvalid={isErrorPincode}>
                                        <FormLabel fontSize={'14px'} mt={4}>Pincode : <sup style={{ color: 'red' }}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='number'
                                            name="pincode"
                                            placeholder="Enter your pincode"
                                            ref={pincodeValid}
                                            value={pincode}
                                            onChange={handlepincode} />
                                        {!isErrorPincode ? (
                                            <FormHelperText>

                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <hr></hr>
                                    <Center>
                                        <h5>User Details</h5>
                                    </Center>
                                    <hr></hr>
                                    <FormControl isInvalid={isErrorUser}>
                                        <FormLabel fontSize={'14px'} mt={4}>User Name : <sup style={{ color: 'red' }}><span>*</span></sup></FormLabel>
                                        <Input
                                            type='text'
                                            name="username"
                                            placeholder="Enter user name"
                                            ref={userValid}
                                            value={username}
                                            onChange={handleuser} />
                                        {!isErrorUser ? (
                                            <FormHelperText>

                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>
                                    <br />

                                    <FormControl isInvalid={isErrorPassword}>
                                        <FormLabel fontSize={'14px'} mt={4}>Password : <sup style={{ color: 'red' }}><span>*</span></sup></FormLabel>
                                        <InputGroup size='md'>

                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                name="password"
                                                value={password}
                                                ref={passwordValid}
                                                onChange={handlepassword}
                                                placeholder='Enter password'
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? 'Hide' : 'Show'}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        {!isErrorPassword ? (
                                            <FormHelperText>

                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isInvalid={isErrorConfirmpassword} >
                                        <FormLabel fontSize={'14px'} mt={4}> Confirm password : <sup style={{ color: 'red' }}><span>*</span></sup></FormLabel>
                                        <InputGroup size='md'>

                                            <Input
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Enter same password'
                                                name='confirmpassword'
                                                value={confirmpassword}
                                                onChange={handleconfirmpassword}
                                                ref={confirmpasswordValid}
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? 'Hide' : 'Show'}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        {!isErrorConfirmpassword ? (
                                            <FormHelperText>

                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>


                                    <div>
                                        <Checkbox
                                            isChecked={agreed}
                                            onChange={handleCheckboxChange}
                                            ref={clickValid}
                                        >
                                            I agree to the terms and conditions
                                        </Checkbox>

                                    </div>
                                    <Center>  <Button colorScheme='red' ml={5} mr={2}
                                        onClick={handleReset}
                                        style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>Reset</Button>

                                        <Button onClick={RegisterData}
                                            colorScheme={agreed ? 'red' : 'orange'} // Change colors as needed
                                            style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}
                                        >
                                            Register
                                        </Button>



                                    </Center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </ChakraProvider>
        </>
    )
}
export default Ngo;