import React from "react";
import './about.css';

export function About() {
    return (
        <div className="about-wrapper">
            <div className="about-images">
                <img src="https://themewagon.github.io/baker/img/about-1.jpg" className="about-1 about-img"/>
                <img src="https://themewagon.github.io/baker/img/about-2.jpg" className="about-2 about-img"/>
                <div className="about-frame about-img"></div>
            </div>
            <div className="about-content">
                <h1>
                    We Bake Every Item From The Core Of Our Hearts
                </h1>
            </div>
        </div>
    )
}