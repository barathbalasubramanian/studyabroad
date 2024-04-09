
"use client"
import React, { useState } from 'react';
import Styles from './contact.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        currentschool: '',
        yearofcompleting: '',
        currentcity: '',
        privacy: false,
        guardianOrStudent: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        if (name === 'guardianOrStudent') {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
                [value]: true
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: newValue
            }));
        }
    };

    const handleSubmit = () => {
        const emptyFields = Object.keys(formData).filter(key => formData[key] === '');
        if (emptyFields.length > 0) {
            toast.warning("Please fill in all fields");
            return;
        } else if (formData.phonenumber.length !== 10) {
            toast.warning("Phone number should have 10 characters");
            return;
        } else if (!isValidEmail(formData.email)) {
            toast.warning("Please enter a valid email address");
            return;
        } else {
            console.log(formData);
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                phonenumber: '',
                currentschool: '',
                yearofcompleting: '',
                currentcity: '',
                privacy: false,
                guardianOrStudent: ''
            });
            toast.success("Profile Created Successfully!");
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <div>
            <ToastContainer />
            <div className='flex items-center justify-center text-2xl m-auto'>Your Path to Your Dream University Starts Here!</div>
            <div className='flex items-center justify-center text-sm w-1/2 px-4 mt-3 text-center m-auto'>Fill in your details and express interest in a free education assessment, where you can get all your questions answered.</div>
            <div className={Styles.allinputDiv}>
                <div className={Styles.inputField}>
                    <div>Are you a Guardian or a Student?</div>
                    <div className={Styles.opts}>
                        <div
                            className={`${Styles.guardopt} ${formData.guardianOrStudent === 'Student' ? Styles.selected : ''}`}
                            onClick={() => handleChange({ target: { name: 'guardianOrStudent', value: 'Student', type: 'radio' } })}
                        >
                            Student
                        </div>
                        <div
                            className={`${Styles.guardopt} ${formData.guardianOrStudent === 'Guardian' ? Styles.selected : ''}`}
                            onClick={() => handleChange({ target: { name: 'guardianOrStudent', value: 'Guardian', type: 'radio' } })}
                        >
                            Guardian
                        </div>
                    </div>
                </div>
                <div className={Styles.inputField}>
                    <label htmlFor="firstname">First Name</label>
                    <input className={Styles.input} type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter Your First Name" />
                </div>
                <div className={Styles.inputField}>
                    <label htmlFor="lastname">Last Name</label>
                    <input className={Styles.input} type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Enter Your Last Name" />
                </div>
                <div className={Styles.inputField}>
                    <label htmlFor="email">Email</label>
                    <input className={Styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                </div>
                <div className={Styles.inputField}>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input className={Styles.input} type="tel" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} placeholder="Enter Your Phone Number" />
                </div>
                <div className={Styles.inputField}>
                    <label htmlFor="currentschool">Current School</label>
                    <input className={Styles.input} type="text" id="currentschool" name="currentschool" value={formData.currentschool} onChange={handleChange} placeholder="Enter Your Current School" />
                </div>
                <div className={Styles.inputField}>
                    <label htmlFor="yearofcompleting">Year of Completing</label>
                    <input className={Styles.input} type="text" id="yearofcompleting" name="yearofcompleting" value={formData.yearofcompleting} onChange={handleChange} placeholder="Enter Your Year of Completing" />
                </div>
                <div className={Styles.inputField}>
                    <label htmlFor="currentcity">Current City</label>
                    <input className={Styles.input} type="text" id="currentcity" name="currentcity" value={formData.currentcity} onChange={handleChange} placeholder="Enter Your Current City" />
                </div>
                <div>
                    <input type="checkbox" id="agree" name="privacy" checked={formData.privacy} onChange={handleChange} />
                    <label htmlFor="agree" className='px-4'>I agree with the privacy policy</label>
                </div>
                <div className='w-full flex items-center justify-center mt-8'>
                    <div className={Styles.subbtn} onClick={handleSubmit}>Submit</div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
