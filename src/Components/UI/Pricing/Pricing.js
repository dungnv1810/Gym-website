import React from "react";
import "../../../Styles/pricing.css"
const Pricing = () => {
    return(
        <>
            <section id='prising'>
                <div className="container">
                    <div className="pricing__top">
                        <h2 className="section__title">
                            Gym <span className="highlights">Pricing</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing <br/> elit.
                            Laboriosam repellendus odit fugit eos! Id, labore.
                        </p>
                    </div>
                    {/*  */}
                    <div className="pricing__wrapper">
                        <div className="pricing__item" data-aos="fade-up" data-aos-duration="1500">
                            <div className="pricing__card-top">
                                <h2 className="section__title">Regular Member</h2>
                                <h2 className="pricing">
                                    $50 <span>/month</span>
                                </h2>
                            </div>
                            <div className="services">
                                <ul>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Unlimited access to the gym</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Customer support</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Personal trainer</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Standard options</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>5 classes per week</span></li>
                                </ul>

                                <button className="register__btn">Join Now</button>
                            </div>
                        </div>
                        <div className="pricing__item pricing__item-02" data-aos="fade-up" data-aos-duration="1500">
                            <div className="pricing__card-top">
                                <h2 className="section__title">Premium Member</h2>
                                <h2 className="pricing">
                                    $70 <span>/month</span>
                                </h2>
                            </div>
                            <div className="services">
                                <ul>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Unlimited access to the gym</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Customer support</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Personal trainer</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Standard options</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>5 classes per week</span></li>
                                </ul>

                                <button className="register__btn">Join Now</button>
                            </div>
                        </div>
                        <div className="pricing__item" data-aos="fade-up" data-aos-duration="1500">
                            <div className="pricing__card-top">
                                <h2 className="section__title">Regular Member</h2>
                                <h2 className="pricing">
                                    $100 <span>/month</span>
                                </h2>
                            </div>
                            <div className="services">
                                <ul>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Unlimited access to the gym</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Customer support</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Personal trainer</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>Standard options</span></li>
                                    <li><i class="ri-checkbox-blank-circle-fill"></i><span>5 classes per week</span></li>
                                </ul>

                                <button className="register__btn">Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     )
}
export default Pricing