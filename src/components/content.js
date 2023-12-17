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
            <section style={{ backgroundImage: `url(${heroImage})` }} className="hero-image container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="hero-text col-xs-12 col-sm-6 col-md-6 col-lg-4 offset-lg-1">
                            <h1 id="hero-h1">Mr.Bean</h1>
                            {/* Coffee database holder */}
                            <div id="coffee-to-go-nav-link"></div>
                            <br />
                            <h2 id="hero-h2">Your Gateway to Coffee Excellence</h2>
                            <br />
                            {/* button for coffee */}
                            <button className="btn btn-light" id="hero-button">Check Our Coffee</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="background-colour custom-section">
                <section>
                    <div className="container">
                        <h2>Coffee to Go</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <p>
                                    Experience the joy of coffee at Mr.Bean! We're thrilled to introduce our brand-new 'Coffee to Go' service in Cork. Discover our extensive selection of premium coffees, all prepared for takeaway. Don't miss out on our Christmas special Ginger Bread Latte!
                                </p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <p>
                                    At Mr.Bean, our expert baristas carefully craft each takeaway coffee using the finest quality coffee beans. Rest assured, your to-go coffee will deliver the same delightful flavors as our in-store brews, ensuring a truly satisfying coffee experience on the move.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Start Four Icons section */}
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-coffee my-icon" aria-hidden="true"></span>
                                <p>
                                    <strong>Sustainably Sourced<br />Coffee Beans</strong>
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-user my-icon" aria-hidden="true"></span>
                                <p>
                                    <strong>Artisanal<br />Brewing</strong>
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa-solid fa-wifi my-icon" aria-hidden="true"></span>
                                <p>
                                    <strong>WiFi and<br />Workspaces</strong>
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-map-marker my-icon" aria-hidden="true"></span>
                                {/* Bean Points nav link */}
                                <div id="bean-points-nav-link"></div>
                                <p>
                                    <strong>Community<br />Events</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End background color box around 'Coffee to Go' and 'Four Icons' sections */}
            </div>
            <div className="custom-section white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={coffeeBeansImage} className="img-fluid" alt="Coffee beans" />
                        </div>
                        <div className="col-md-6">
                            <h2>Bean Rewards Program</h2>
                            <p>
                                At Mr. Bean, we value your loyalty, and our Bean Rewards Program is our way of saying thank you!
                            </p>
                            <p>
                                For every coffee you enjoy with us, you'll earn 2 Bean Points. Once you've collected 12 Bean Points (equivalent to 6 coffees), you'll unlock a <strong>complimentary coffee</strong> of your choice. Getting started is simple:
                            </p>
                            <ol>
                                <li>Request a Bean Rewards card during your next visit</li>
                                <li>Receive a stamp on your card for every coffee purchase</li>
                                <li>Witness your Bean Points accumulate</li>
                                <li>Claim your free coffee once you've reached 12 points</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-section background-colour">
                <div className="container">
                    <div className="row">
                        <article className="col-12 col-sm-6">
                            <h2>About</h2>
                            <p>
                                Welcome to Mr. Bean, where coffee is an art and flavor is our masterpiece. Located in the heart of Cork, we're your destination for exceptional coffee experiences.
                            </p>
                            <p>
                                Our baristas are true coffee artisans, and our coffee beans are handpicked for their quality and flavor profiles. Every cup we serve reflects our dedication to coffee perfection.
                            </p>
                            <p>
                                Explore the world of coffee with us and discover your new favorite brew.
                            </p>

                        </article>
                        <div className="col-6 col-sm-3 about-column">
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