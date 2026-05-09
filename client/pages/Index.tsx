import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Send } from 'lucide-react';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'CloudStack Engineer',
    'Networking Specialist',
    'BSIT Instructor'
  ];

  const skills = {
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    backend: ['Node.js', 'APIs', 'Databases', 'Express'],
    cloud: ['CloudStack', 'Linux', 'Networking', 'Server Management']
  };

  const projects = [
    {
      title: 'Immersive Web Experience',
      description: 'Interactive digital platform with cinematic animations and modern UI',
      tech: ['React', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Cloud Infrastructure Platform',
      description: 'Scalable cloud management system with real-time monitoring',
      tech: ['Node.js', 'CloudStack', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Enterprise Networking Solution',
      description: 'Advanced network design and configuration system with IP addressing, subnetting, VLAN management and trunk optimization',
      tech: ['IP Addressing', 'Subnetting', 'VLAN Tagging', 'Trunk Configuration'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Full-Stack Application',
      description: 'Complete web solution from frontend to backend with database integration',
      tech: ['Next.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#'
    }
  ];

  const experience = [
    { role: 'Frontend Developer', company: 'My Environment', period: '2025 - 2026' },
    { role: 'Backend Developer', company: 'My Own', period: '2022 - 2023' },
    { role: 'CloudStack Engineer', company: 'CSU INC.', period: '2026 - Present' },
    { role: 'Networking Specialist', company: 'Network Solutions', period: '2020 - 2021' },
    { role: 'BSIT Instructor', company: 'Benedicto College', period: '2025 - Present' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F863fd10b7c5f4ef9b37b30f927e8f3dd%2F706931f632124c15bd2f00149aee76b9?format=webp&width=800&height=1200"
                alt="Nightfurry"
                className="w-10 h-10 rounded-full object-cover shadow-glow-cyan"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Nightfurry</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-foreground/80 hover:text-cyan-light transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-white/10">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-foreground/80 hover:text-cyan-light hover:bg-white/5 rounded-lg transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl opacity-20 animate-drift"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Nightfurry
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Simple developer crafting <span className="text-cyan-light font-semibold">immersive digital experiences</span>
          </p>

          {/* Rotating Roles */}
          <div className="mb-12 min-h-16 flex items-center justify-center">
            <div className="text-2xl md:text-3xl font-semibold" key={`role-${activeRole}`}>
              <span className="text-cyan-light" key={activeRole}>
                {roles[activeRole]}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="glow-button group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects
                <ExternalLink size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-500/50 text-cyan-light rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-light hover:shadow-glow-cyan"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-light hover:text-cyan-light transition-all duration-300 shadow-glow-cyan-sm">
              <Github size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-light hover:text-cyan-light transition-all duration-300 shadow-glow-cyan-sm">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-light hover:text-cyan-light transition-all duration-300 shadow-glow-cyan-sm">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-cyan-light">Me</span>
          </h2>

          <div className="glass-card p-8 md:p-12">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a developer focused on building clean, functional, and user-friendly digital experiences. I work across frontend and backend development, with experience in cloud infrastructure and networking systems.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              As a BSIT part-time instructor, I also enjoy sharing knowledge and helping students grow in the field of technology. I value simple design, maintainable code, and practical solutions that work efficiently.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm always learning new technologies and improving my skills to create better web applications and systems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-cyan-light">Skills</span> & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="glass-card-hover p-8 group">
              <h3 className="text-2xl font-bold mb-6 text-cyan-light">Frontend</h3>
              <div className="space-y-3">
                {skills.frontend.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300 text-foreground/90"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="glass-card-hover p-8 group">
              <h3 className="text-2xl font-bold mb-6 text-cyan-light">Backend</h3>
              <div className="space-y-3">
                {skills.backend.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300 text-foreground/90"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Skills */}
            <div className="glass-card-hover p-8 group">
              <h3 className="text-2xl font-bold mb-6 text-cyan-light">Cloud & Networking</h3>
              <div className="space-y-3">
                {skills.cloud.map((skill) => (
                  <div
                    key={skill}
                    className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300 text-foreground/90"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-cyan-light">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="glass-card-hover p-8 relative group overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-cyan-light">{project.title}</h3>
                  <p className="text-foreground/80 mb-6">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-cyan-500/20 text-cyan-light rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-light transition-all duration-300"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-light rounded-lg hover:bg-cyan-500/30 transition-all duration-300"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Professional <span className="text-cyan-light">Experience</span>
          </h2>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="glass-card-hover p-8 relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-transparent opacity-50"></div>

                <div className="pl-6">
                  <h3 className="text-xl font-bold text-cyan-light mb-2">{exp.role}</h3>
                  <p className="text-foreground/70 mb-2">{exp.company}</p>
                  <p className="text-sm text-foreground/50">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Get In <span className="text-cyan-light">Touch</span>
          </h2>

          <div className="glass-card p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground/80 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-light focus:shadow-glow-cyan transition-all duration-300 text-foreground placeholder-foreground/40"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground/80 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-light focus:shadow-glow-cyan transition-all duration-300 text-foreground placeholder-foreground/40"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground/80 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-light focus:shadow-glow-cyan transition-all duration-300 text-foreground placeholder-foreground/40 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full glow-button flex items-center justify-center gap-2 group"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-center text-foreground/70 mb-6">Or connect with me on social media</p>
              <div className="flex justify-center gap-8">
                <a href="#" className="text-foreground/70 hover:text-cyan-light transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="text-foreground/70 hover:text-cyan-light transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-foreground/70 hover:text-cyan-light transition-colors duration-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-foreground/60">
          <p>© 2024 Nightfurry. Crafted with passion for immersive experiences.</p>
        </div>
      </footer>
    </div>
  );
}
