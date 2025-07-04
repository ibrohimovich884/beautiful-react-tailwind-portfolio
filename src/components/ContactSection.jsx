import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="icon-bg">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <h4 className="contact-label">Email</h4>
                  <a href="mailto:bkbekmirzayev@gmail.com" className="contact-link">
                    bkbekmirzayev@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-bg">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <h4 className="contact-label">Phone</h4>
                  <a href="tel:+998978847864" className="contact-link">
                    +998 97 884 78 64
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-bg">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <h4 className="contact-label">Location</h4>
                  <span className="contact-link">Osiyo, O'zbekiston, Toshkent</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4 className="contact-label">Connect With Me</h4>
              <div className="social-icons">
                <a href="#"><Linkedin /></a>
                <a href="#"><Twitter /></a>
                <a href="https://instagram.com/ibrohimovich_o1" target="_blank"><Instagram /></a>
                <a href="#"><Twitch /></a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3 className="contact-info-title">Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  placeholder="Oybek Bekmirzayev..."
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="bkbekmirzayev@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="form-textarea"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("form-submit-button")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
