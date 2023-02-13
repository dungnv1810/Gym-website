import React from "react";
import "../../../Styles/exercises.css"
import lunges from "../../../assets/img/lunges.png"
import yoga_pose from "../../../assets/img/yoga-pose.png"
import extended from "../../../assets/img/extended.png"
const Exercises = () => {
    return(
        <>
            <section id='schedule'>
                <div className="container exercises__container">
                    <div className="exercises__top">
                        <h2 className="exercises__title">Benefits of
                            <span className="highlights"> Exercises</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
                            Laboriosam repellendus odit fugit eos! Id, labore.
                        </p>
                    </div>
                    {/* ===== Exercises list ===== */}
                    <div className="exercises__wrapper">
                        <div className="exercises__item" data-aos="zoom-in" data-aos-duration="1500" >
                            <span className="exercises__icon">
                                <img src={lunges} alt=''/>
                            </span>
                            <div className="exercises__content" >
                                <h4>Healthy Life</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="exercises__item" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="2000">
                            <span className="exercises__icon">
                                <img src={yoga_pose} alt=''/>
                            </span>
                            <div className="exercises__content">
                                <h4>Increased Flexibility</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="exercises__item" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="2500">
                            <span className="exercises__icon">
                                <img src={extended} alt=''/>
                            </span>
                            <div className="exercises__content">
                                <h4>Reducing Blood Pressure</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Exercises