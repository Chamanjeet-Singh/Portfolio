import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    title: "PayzPal",
    category: "Financial App",
    tools: "Next.js, TypeScript, React, Node.js, PostgreSQL, AWS, Tailwind, Plaid, Dwolla API",
    image: "/images/payzpal.png",
    link: "https://payz-pal.vercel.app",
  },
  {
    num: "02",
    title: "Uber Clone",
    category: "Real-Time Ride Platform",
    tools: "React, Next.js, Node.js, Express.js, MongoDB, Socket.io, JWT, TypeScript",
    image: "/images/uber.png",
    link: "https://github.com/Chamanjeet-Singh",
  },
  {
    num: "03",
    title: "NexBuy",
    category: "E-Commerce Store",
    tools: "React, Next.js, Node.js, Express.js, MongoDB, TypeScript, Admin & User Dashboard",
    image: "/images/nexbuy.jpg",
    link: "https://github.com/Chamanjeet-Singh/nexbuy",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = Math.max(0, rect.width * box.length - (rectLeft + parentWidth) + padding);
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: translateX > 0,
        id: "work",
        onToggle: (self) => {
          const pinned = document.querySelector(".work-section") as HTMLElement;
          if (pinned) {
            pinned.style.zIndex = self.isActive ? "10" : "";
          }
        },
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
