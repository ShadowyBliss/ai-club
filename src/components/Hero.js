import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

import "@fortawesome/fontawesome-free/css/all.min.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the AI Club</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Join a vibrant community of learners",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Join a vibrant community of innovators",
            1000,
            "Join a vibrant community of tech enthusiasts ",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <p>
          Join us in exploring the fascinating world of Artificial Intelligence
          and technology!
        </p>
        <div class="main">
          <a href="/Instagram" class="nav-item">
            <div class="nav-links">
              <i class="fab fa-instagram"></i>
            </div>
            <span class="nav-link-text">Instagram</span>
          </a>
          <a href="/Twitter" class="nav-item">
            <div class="nav-links transition-all">
              <i class="fab fa-twitter"></i>
            </div>
            <span class="nav-link-text">Twitter</span>
          </a>
          <a href="/Youtube" class="nav-item">
            <div class="nav-links transition-all">
              <i class="fab fa-youtube"></i>
            </div>
            <span class="nav-link-text">Youtube</span>
          </a>
          <a href="/LinkedIn" class="nav-item">
            <div class="nav-links transition-all">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <span class="nav-link-text">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;