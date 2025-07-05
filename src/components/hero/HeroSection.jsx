import { ArrowDown } from "lucide-react";
import './Hero.css';

export const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="fade-in"> Hi, I'm</span>
            <span className="fade-in-delay-1 primary-text"> Oybek</span>
            <span className="fade-in-delay-2 gradient-text"> Bekmirzayev</span>
          </h1>

          <p className="hero-subtitle fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="hero-button fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text"> Scroll </span>
        <ArrowDown className="scroll-icon" />
      </div>
    </section>
  );
};
