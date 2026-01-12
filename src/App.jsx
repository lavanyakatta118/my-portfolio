import React from 'react';
import './App.css';

function App() {
  const profile = {
    name: "Lavanya Katta",
    title: "Sr. Network, Cloud & Cyber Security Engineer",
    email: "lavanya.katta119@gmail.com",
    summary: "Senior Engineer with 6+ years of experience in securing enterprise networks and hybrid cloud infrastructures. Expert in Palo Alto, Fortinet, and AWS/Azure security.",
    skills: ["Palo Alto", "Fortinet", "AWS/Azure", "Python/Ansible", "F5 BIG-IP", "Cisco ACI"],
    experience: [
      { company: "R+L Carriers", role: "Sr. Network Security Engineer", duration: "2024 - Present" },
      { company: "Fidelity Investments", role: "Sr. Network Security Engineer", duration: "2022 - 2024" },
      { company: "Comcast", role: "Network Engineer", duration: "2021 - 2022" }
    ]
  };

  return (
    <div className="portfolio">
      <nav className="nav">
        <h1 className="logo">LK</h1>
        <a href={`mailto:${profile.email}`} className="contact-btn">Email Me</a>
      </nav>
      <header className="hero">
        <div className="badge">CCNA Certified</div>
        <h2>Hi, I'm {profile.name}</h2>
        <h3>{profile.title}</h3>
        <p className="summary">{profile.summary}</p>
      </header>
      <section className="section">
        <h3>Technical Expertise</h3>
        <div className="skill-grid">
          {profile.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
        </div>
      </section>
      <section className="section">
        <h3>Experience</h3>
        {profile.experience.map((exp, i) => (
          <div key={i} className="job-card">
            <h4>{exp.company}</h4>
            <p>{exp.role} | {exp.duration}</p>
          </div>
        ))}
      </section>
      <footer className="footer">
        <p>© 2026 Lavanya Katta | Built with Vite + React</p>
      </footer>
    </div>
  );
}

export default App;
