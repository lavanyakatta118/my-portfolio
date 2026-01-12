import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="badge">CCNA Certified: Z6J5K8JFFC1EQJ91</div>
        <h1>Lavanya Katta</h1>
        <p className="subtitle">SR. NETWORK SECURITY & CLOUD ENGINEER</p>
        <p>6+ Years Experience | Palo Alto | Fortinet | AWS | Azure</p>
        
        {/* Buttons Section */}
        <div style={{ marginTop: '30px' }}>
          <a href="mailto:lavanyakatta118@gmail.com" className="btn-primary">
            Get In Touch
          </a>
          
          <a href="/Resume_Lavanya.pdf" download className="btn-primary" style={{ marginLeft: '15px' }}>
            Download Resume
          </a>
        </div>
      </header>

      <section>
        <h2>Technical Expertise</h2>
        <div className="card">
          <div className="badge">Palo Alto Networks</div>
          <div className="badge">Fortinet NSE</div>
          <div className="badge">AWS Security</div>
          <div className="badge">Azure Networking</div>
          <div className="badge">Python Automation</div>
          <div className="badge">Ansible</div>
          <div className="badge">F5 BIG-IP</div>
          <div className="badge">Cisco ACI</div>
        </div>
      </section>

      <section>
        <h2>Work Experience</h2>
        <div className="card">
          <h3>Sr. Network Security Engineer</h3>
          <p style={{color: '#00d4ff'}}>R+L Carriers | 2024 - Present</p>
          <ul>
            <li>Managing Palo Alto & Fortinet Firewalls across global sites.</li>
            <li>Leading SD-WAN transformation and cloud security migration.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Network Engineer</h3>
          <p style={{color: '#00d4ff'}}>Fidelity Investments | 2021 - 2024</p>
          <ul>
            <li>Expertise in F5 Load Balancing and Cisco Nexus switching.</li>
            <li>Automated routine tasks using Python and Ansible.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App