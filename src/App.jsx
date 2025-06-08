import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Download, 
  ExternalLink,
  Brain,
  Cpu,
  Network,
  Bot,
  Eye,
  Database,
  Award,
  BookOpen,
  Users,
  Code,
  GraduationCap,
  Calendar,
  Menu,
  X
} from 'lucide-react';
import './App.css';
import profilePhoto from './assets/saurav_professional_photo.jpg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'research', 'publications', 'teaching', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const researchAreas = [
    { icon: <Network className="research-icon" />, title: "Blockchain Technology", description: "Distributed systems and smart contracts" },
    { icon: <Cpu className="research-icon" />, title: "Software Defined Networking", description: "Network virtualization and control" },
    { icon: <Bot className="research-icon" />, title: "IoT & Robotics", description: "Internet of Things and robotic systems" },
    { icon: <Brain className="research-icon" />, title: "Machine Learning", description: "AI algorithms and deep learning" },
    { icon: <Eye className="research-icon" />, title: "Computer Vision", description: "Image processing and pattern recognition" },
    { icon: <Database className="research-icon" />, title: "Bioinformatics", description: "Computational biology and data analysis" }
  ];

  const publications = [
    {
      title: "Comprehensive Bioinformatics and Machine Learning Analysis for Breast Cancer Staging Using the TCGA Dataset",
      journal: "Briefings in Bioinformatics, Oxford Press",
      year: "2025",
      authors: "Saurav Chandra Das, Uzzal Kumar Acharjee, Wahia Tasnim, Monowarul Islam",
      doi: "https://doi.org/10.1093/bib/bbae628"
    },
    {
      title: "Integrative Machine Learning and Bioinformatics Approach for Identifying Key Biomarkers in Gallbladder Cancer Diagnosis and Progression",
      journal: "IET Systems Biology, Wiley",
      year: "2025",
      authors: "Rabea khatun, Wahia Tasnim, Monowarul Islam, Md.Ashraf Uddin, Saurav Chandra Das, Zulfiker Mahmud",
      doi: "10.1049/syb2.70022"
    },
    {
      title: "Priority-based Traceability in Crude Oil Refined Products Supply Chain through Blockchain",
      journal: "6th International Conference on Sustainable Technologies for Industry 5.0 (STI 2024)",
      year: "2024",
      authors: "Md. Jahidul Islam, Md Naimul Pathan, Anichur Rahman, Shamima Islam, Abida Sultana and Saurav Chandra Das",
      doi: "10.1109/STI64222.2024.10951058"
    }
  ];

  const projects = [
    {
      title: "Plant Disease Detection Application (Green Doctor)",
      description: "Built a deep learning framework to detect plant diseases from leaf images and integrated it with an Android application. Currently working on detecting rice and jute leaf diseases.",
      technologies: ["Deep Learning", "Android", "Computer Vision", "TensorFlow"]
    },
    {
      title: "Fire Alarm System (Bracathon – 2017)",
      description: "Developed a web-based software to assist fire stations by tracking fire accident locations and guiding firefighters using maps with IoT integration.",
      technologies: ["Web Development", "IoT", "Maps API", "Real-time Systems"]
    },
    {
      title: "Restaurant Management System",
      description: "Developed a comprehensive web-based system to manage restaurant operations including table booking, ordering, and payment processing.",
      technologies: ["Bootstrap", "JavaScript", "C#", "Database Management"]
    }
  ];

  const skills = [
    "C++", "C", "Java", "Python", "PHP", "JavaScript", "HTML", "CSS", "SQL",
    "Machine Learning", "Deep Learning", "Computer Vision", "Blockchain", "IoT",
    "React", "Spring Framework", "Android Development", "MATLAB", "LaTeX"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="navbar-fixed">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gradient">
              Saurav Chandra Das
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Research', 'Publications', 'Teaching', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {['Home', 'About', 'Research', 'Publications', 'Teaching', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-background min-h-screen flex items-center">
        <div className="hero-content container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Saurav Chandra Das
              </h1>
              <h2 className="text-xl md:text-2xl text-emerald-200 mb-6">
                Lecturer & Researcher in Computer Science
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Specializing in Machine Learning, IoT, Blockchain Technology, and Bioinformatics. 
                Currently serving as Lecturer at Gazipur Digital University with expertise in 
                cutting-edge research and innovative teaching methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center gap-2">
                  <Download size={20} />
                  Download CV
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={profilePhoto}
                alt="Saurav Chandra Das"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I am a dedicated lecturer and researcher with a passion for advancing the frontiers 
                  of computer science. With a Master's degree in Computer Science and Engineering from 
                  Jagannath University (CGPA: 3.98/4.0, 1st position), I bring both academic excellence 
                  and practical industry experience to my work.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  My research focuses on the intersection of machine learning, blockchain technology, 
                  and IoT systems. I have published several papers in prestigious journals and conferences, 
                  contributing to the advancement of bioinformatics and computational systems biology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently serving as a Lecturer at Gazipur Digital University, I am committed to 
                  fostering innovation in education and research while mentoring the next generation 
                  of computer scientists and engineers.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <GraduationCap className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-gray-600">M.Sc & B.Sc in CSE, Jagannath University</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Award className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Recognition</h3>
                    <p className="text-gray-600">Best Paper Award, IEEE Bangladesh Chapter 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <BookOpen className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Publications</h3>
                    <p className="text-gray-600">5+ Research Papers in International Journals</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              Research Interests
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md card-hover text-center"
                >
                  <div className="flex justify-center mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              Recent Publications
            </h2>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="publication-card"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Authors:</strong> {pub.authors}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Journal:</strong> {pub.journal} ({pub.year})
                  </p>
                  {pub.doi && (
                    <a
                      href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Publication
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Experience */}
      <section id="teaching" className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              Teaching Experience
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="timeline-item">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Lecturer</h3>
                  <p className="text-blue-600 font-medium mb-2">Gazipur Digital University</p>
                  <p className="text-gray-600 mb-3">August 2024 - Present</p>
                  <p className="text-gray-700">
                    Department of Internet of Things and Robotics Engineering. 
                    Teaching advanced courses in IoT, robotics, and emerging technologies.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Adjunct Lecturer</h3>
                  <p className="text-blue-600 font-medium mb-2">Uttara University</p>
                  <p className="text-gray-600 mb-3">January 2025 - May 2025</p>
                  <p className="text-gray-700">
                    Department of Computer Science and Engineering. 
                    Conducting courses in machine learning and software engineering.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Lecturer</h3>
                  <p className="text-blue-600 font-medium mb-2">Green University Of Bangladesh</p>
                  <p className="text-gray-600 mb-3">January 2022 - July 2024</p>
                  <p className="text-gray-700 mb-4">
                    Department of Computer Science and Engineering. 
                    Taught multiple courses including Machine Learning, AI, Algorithm Design, and Operating Systems.
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Courses Taught:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "Artificial Intelligence", "Algorithm Design", "Operating Systems", "Software Engineering", "Compiler Design"].map((course) => (
                        <span key={course} className="skill-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              Notable Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md card-hover border-l-4 border-emerald-500"
                >
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              Technical Skills
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
              Get In Touch
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-blue-600" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:saurav0001@bdu.ac.bd" className="text-blue-600 hover:underline">
                        saurav0001@bdu.ac.bd
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="text-blue-600" size={24} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+8801521434695" className="text-blue-600 hover:underline">
                        +880 1521 434695
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-blue-600" size={24} />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a href="#" className="text-blue-600 hover:underline">
                        Saurav Chandra Das
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Github className="text-blue-600" size={24} />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <a href="https://github.com/dassaurav404" className="text-blue-600 hover:underline">
                        dassaurav404
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="text-blue-600" size={24} />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Gazipur Digital University, Kaliakair, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                <form className="contact-form">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" placeholder="Message Subject" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows="5" placeholder="Your message here..."></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container-max">
          <div className="text-center">
            <p className="mb-4">© 2025 Saurav Chandra Das. All rights reserved.</p>
            <p className="text-gray-400">
              Lecturer & Researcher | Computer Science & Engineering
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

