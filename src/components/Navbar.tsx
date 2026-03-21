import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          MANAS SIDH
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=manas.codewritter@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-connect"
          data-cursor="disable"
        >
          manas.codewritter@gmail.com
        </a>
        <button
          className={`nav-toggle ${menuOpen ? "nav-toggle-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          data-cursor="disable"
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
        <ul className={menuOpen ? "nav-open" : ""}>
          <li>
            <a data-href="#about" href="#about" onClick={handleLinkClick}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#whatido" href="#whatido" onClick={handleLinkClick}>
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career" onClick={handleLinkClick}>
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a
              data-href="#certificates"
              href="#certificates"
              onClick={handleLinkClick}
            >
              <HoverLinks text="AWARDS" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={handleLinkClick}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a
              data-href="#techstack"
              href="#techstack"
              onClick={handleLinkClick}
            >
              <HoverLinks text="TECH" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={handleLinkClick}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
