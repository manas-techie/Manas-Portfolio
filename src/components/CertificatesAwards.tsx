import "./styles/CertificatesAwards.css";

const certificates = [
  {
    icon: "📜",
    title: "Explore Web Development with Node.js",
    organization: "LinkedIn",
    year: "2026",
    description:
      "Completed intensive training in MongoDB, Express.js, and Node.js for backend development.",
  },
  {
    icon: "🎓",
    title: "Machine Learning Specialization",
    organization: "Coursera",
    year: "2026",
    description:
      "Mastered supervised and unsupervised learning, neural networks, and best practices in ML engineering.",
  },
  {
    icon: "⭐",
    title: "Top 5% in my year",
    organization: "UEM",
    year: "2024 - 2026",
    description:
      "Recognized for outstanding academic performance and maintaining a top GPA in the department.",
  },
  {
    icon: "💻",
    title: "React Developer Certification",
    organization: "IBM",
    year: "2026",
    description:
      "Earned certification in advanced React concepts including hooks, state management, and performance optimization.",
  },
  {
    icon: "🤖",
    title: "Generative AI: Introduction and Applications",
    organization: "Coursera",
    year: "2026",
    description:"Completed comprehensive training in generative AI techniques, including GANs and transformer models, with practical applications in content creation and data augmentation.",
  },
  {
    icon: "📊",
    title: "Introduction to Machine Learning",
    organization: "NPTEL",
    year: "2026",
    description:"Completed comprehensive training in machine learning fundamentals, including supervised and unsupervised learning, with practical applications in Python.",
  },
  {
    icon: "📚",
    title: "The Complete Full-Stack Web Development Bootcamp",
    organization: "Udemy",
    year: "2025",
    description:"Completed an intensive full-stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
  },
];

const CertificatesAwards = () => {
  return (
    <div className="certificates-section section-container" id="certificates">
      <div className="certificates-container">
        <h2>
          Certificates <span>&</span>
          <br /> Awards
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-icon">{cert.icon}</div>
              <h4>{cert.title}</h4>
              <h5>{cert.organization}</h5>
              <span className="certificate-year">{cert.year}</span>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesAwards;
