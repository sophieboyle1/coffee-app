import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setSubmitted(false);
        setSubmitError(false);

        // Simulate form submission delay and response
        try {
            setTimeout(() => {
                setSubmitting(false);
                setSubmitted(true);
                // Reset form fields
                setFormData({ name: '', email: '', message: '' });
            }, 2000);
        } catch (error) {
            // If there was an error during submission, update state accordingly
            setSubmitting(false);
            setSubmitError(true);
        }
    };
    return (
        <div>
            <section className="custom-section">
                <div className="container">
                    <div className="row">
                        {/* Google maps */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <iframe
                                src="https://maps.google.com/maps?q=Main%20Street,%20Cork&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                frameBorder="0"
                                style={{ border: 0, width: '100%', height: '400px' }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Location Map">
                            </iframe>
                        </div>
                        {/* Opening hours and find us */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h2>Opening Hours</h2>
                            <p>Monday - Friday: 9.00am - 17.00pm</p>
                            <p>Saturday: 9.00am - 16.00pm</p>
                            <p>Sunday: 9.00am - 15.00pm</p>
                            <h2>Find Us</h2>
                            <p>Mr.Bean</p>
                            <p>Paranell Street</p>
                            <p>Blackburn</p>
                            <p>Cork</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="custom-section form-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Contact</h2>
                            <FontAwesomeIcon icon={faPhone} className="fontawesome-icons" aria-hidden="true" />
                            <span className="contact-number">(021) 123 4567</span>
                            <FontAwesomeIcon icon={faEnvelope} className="fontawesome-icons" aria-hidden="true" />
                            <span className="contact-email"><a href="mailto:mrbeancoffee@example.com">mrbeancoffee@example.com</a></span>
                        </div>
                    </div>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="row contact-form-text">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="your-name" className="contact-form-text">Your Name</label>
                                <input type="text" id="your-name" className="form-control" required />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="email" className="contact-form-text">Your Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <br />
                            <div className="col-12">
                                <label htmlFor="form-message" className="contact-form-text">What can we help you with?</label>
                                <textarea className="form-control" id="form-message" rows="3" required></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-light float-right" id="contact-btn-form">Submit {submitting ? 'Sending...' :''}</button>
                                {submitted && !submitError && <p className="success-message">Email sent successfully!</p>}
                                {submitError && <p className="error-message">There was an error sending the email.</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;