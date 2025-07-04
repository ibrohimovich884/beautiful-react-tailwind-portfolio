import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Oybek Coder. All rights reserved.
      </p>
      <a href="#hero" className="footer-top-btn">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
