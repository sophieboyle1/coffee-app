import React from 'react';
import '../App.css';
import heroImage from '../images/hero-image.jpg';
import coffeeBeansImage from '../images/beans.jpg';
import coffeeShopImage1 from '../images/coffee-1.jpg';
import coffeeShopImage2 from '../images/coffee-2.jpg';
import coffeeShopImage3 from '../images/coffee-3.jpg';
import coffeeShopImage4 from '../images/coffee-4.jpg';

function Content() {
    return (
        <div>
            {/* Hero section with background image */}
            <section style={{ backgroundImage: `url(${heroImage})` }} className="hero-image container-fluid">
                <div className="container">
                    <div className="row">
                        {/* Text content within hero section */}
                        <div className="hero-text col-xs-12 col-sm-6 col-md-6 col-lg-4 offset-lg-1">
                            <h1 id="hero-h1">Mr.Bean</h1>
                            {/* Placeholder for dynamic content or navigation */}
                            <div id="coffee-to-go-nav-link"></div>
                            <br />
                            <h2 id="hero-h2">Your Gateway to Coffee Excellence</h2>
                            <br />
                            {/* Button leading to coffee products or another section */}
                            <Link to="/read" className="btn btn-light" id="hero-button">
                                Check Our Coffee
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section describing the 'Coffee to Go' service */}
            <div className="background-colour custom-section">
                <section>
                    <div className="container">
                        <h2>Coffee to Go</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <p>
                                    Description of the 'Coffee to Go' service, highlighting new offerings and specials.
                                </p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <p>
                                    Additional details about the service, focusing on the quality and craftsmanship of the coffee.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section showcasing key features or values of the coffee shop */}
                <div>
                    <div className="container">
                        <div className="row">
                            {/* Each column represents a feature or value with an icon and text */}
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-coffee my-icon" aria-hidden="true"></span>
                                <p><strong>Sustainably Sourced<br />Coffee Beans</strong></p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-user my-icon" aria-hidden="true"></span>
                                <p><strong>Artisanal<br />Brewing</strong></p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa-solid fa-wifi my-icon" aria-hidden="true"></span>
                                <p><strong>WiFi and<br />Workspaces</strong></p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-map-marker my-icon" aria-hidden="true"></span>
                                {/* Placeholder for dynamic content or navigation */}
                                <div id="bean-points-nav-link"></div>
                                <p><strong>Community<br />Events</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section for the Bean Rewards Program */}
            <div className="custom-section white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* Image of coffee beans */}
                            <img src={coffeeBeansImage} className="img-fluid" alt="Coffee beans" />
                        </div>
                        <div className="col-md-6">
                            {/* Text content for Bean Rewards Program */}
                            <h2>Bean Rewards Program</h2>
                            <p>Details about the rewards program and how customers can participate.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About section with images and text */}
            <div className="custom-section background-colour">
                <div className="container">
                    <div className="row">
                        <article className="col-12 col-sm-6">
                            {/* Text content describing the coffee shop */}
                            <h2>About</h2>
                            <p>Introduction to Mr. Bean, focusing on the quality and experience of their coffee.</p>
                        </article>
                        <div className="col-6 col-sm-3 about-column">
                            {/* Images related to the coffee shop */}
                            <img src={coffeeShopImage1} className="img-fluid" alt="Waiter holding coffee in hands" />
                            <img src={coffeeShopImage2} className="img-fluid" alt="Coffee and pastries on wooden table" />
                        </div>
                        <div className="col-6 col-sm-3 about-column">
                            <img src={coffeeShopImage3} className="img-fluid" alt="Three hands holding coffee cups together" />
                            <img src={coffeeShopImage4} className="img-fluid" alt="Coffee machine" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
