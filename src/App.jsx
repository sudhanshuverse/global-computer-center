import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, ChevronRight, Award, Users, Target, Zap, BookOpen, Code, FileText, Keyboard, Database, Check, Facebook, Instagram, Clock, Menu, X, Star, TrendingUp, GraduationCap, Send } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'why', 'courses', 'facilities', 'outcomes', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
      });
    }, 3000);
  };

  const courses = [
    {
      title: "ADCA",
      subtitle: "Advanced Diploma in Computer Applications",
      duration: "6–12 Months",
      icon: <Award className="w-8 h-8" />,
      topics: ["Computer Basics & Hardware", "MS Word, Excel, PowerPoint", "Internet & Email Management", "Tally ERP 9 Basics", "Advanced Typing Skills", "PDF & Document Handling"],
      color: "from-emerald-500 to-teal-600",
      price: "Contact for fees",
      popular: true
    },
    {
      title: "Basic Computer Course",
      subtitle: "Foundation for Beginners",
      duration: "2–3 Months",
      icon: <BookOpen className="w-8 h-8" />,
      topics: ["Computer Fundamentals", "MS Office Suite (Word, Excel, PPT)", "Internet & Email Usage", "File Management", "Windows Operating System", "Basic Troubleshooting"],
      color: "from-blue-500 to-indigo-600",
      price: "Contact for fees",
      popular: false
    },
    {
      title: "MS Office Expert",
      subtitle: "Master Office Productivity",
      duration: "1–2 Months",
      icon: <FileText className="w-8 h-8" />,
      topics: ["MS Word Advanced Features", "MS Excel (Formulas & Charts)", "MS PowerPoint Presentations", "Professional Document Formatting", "Data Analysis & Visualization", "Mail Merge & Templates"],
      color: "from-orange-500 to-red-600",
      price: "Contact for fees",
      popular: false
    },
    {
      title: "Typing Course",
      subtitle: "Hindi & English",
      duration: "1–2 Months",
      icon: <Keyboard className="w-8 h-8" />,
      topics: ["Keyboard Practice & Shortcuts", "Speed Building Exercises", "Accuracy Training", "Professional Typing Standards", "Online Typing Tests", "Certificate Preparation"],
      color: "from-purple-500 to-pink-600",
      price: "Contact for fees",
      popular: false
    },
    {
      title: "Data Entry Training",
      subtitle: "Job-Ready Skills",
      duration: "1–2 Months",
      icon: <Database className="w-8 h-8" />,
      topics: ["Fast & Accurate Typing", "Excel Data Handling", "Online Form Filling", "Database Entry Skills", "Quality Control Methods", "Job Interview Preparation"],
      color: "from-cyan-500 to-blue-600",
      price: "Contact for fees",
      popular: true
    }
  ];

  const features = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Experienced Trainers",
      description: "Trained professionals with real computer knowledge and industry experience"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Practical Training",
      description: "Hands-on practice in a real computer lab with individual attention"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Affordable Fees",
      description: "Budget-friendly courses designed for students and beginners"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Job-Oriented Courses",
      description: "Skills that help in government and private sector employment"
    }
  ];

  const facilities = [
    "Fully equipped computer lab with latest computers",
    "High-speed internet access for practical learning",
    "Air-conditioned classroom environment",
    "Small batch sizes for personalized attention",
    "Regular practice sessions and doubt clearing",
    "Government recognized certificate upon completion",
    "Flexible class timings (Morning & Evening batches)",
    "Free study materials and notes"
  ];

  const outcomes = [
    "Apply for data entry jobs with confidence",
    "Work efficiently in cyber cafes and offices",
    "Fill online forms and government applications",
    "Prepare for computer sections in competitive exams",
    "Start freelancing work from home",
    "Enhance career prospects in IT sector",
    "Get job placement assistance",
    "Build confidence in digital skills"
  ];

  const testimonials = [
    {
      name: "Rahul Kumar",
      course: "ADCA Graduate",
      text: "Best computer institute in Jhajha! Practical training helped me get a data entry job.",
      rating: 5
    },
    {
      name: "Priya Singh",
      course: "MS Office Expert",
      text: "Excellent teaching staff and supportive environment. Learned everything from basics to advanced.",
      rating: 5
    },
    {
      name: "Amit Sharma",
      course: "Data Entry Training",
      text: "Affordable fees and quality education. Now I'm working confidently in a private firm.",
      rating: 5
    }
  ];

  const stats = [
    { number: "1000+", label: "Students Trained", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "Expert Courses", icon: <BookOpen className="w-8 h-8" /> },
    { number: "100%", label: "Practical Training", icon: <Target className="w-8 h-8" /> },
    { number: "10+", label: "Years Experience", icon: <Award className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                scrolled ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-white'
              }`}>
                <Code className={`w-7 h-7 ${scrolled ? 'text-white' : 'text-emerald-600'}`} />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-slate-900 tracking-tight">Global Computer Center STS</h1>
                <p className="text-xs text-slate-600">Dhobiyakura jhajha</p>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-1">
              {['Home', 'About', 'Courses', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Enroll Now
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-900"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Courses', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-lg font-semibold"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 opacity-60"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-[fadeInUp_0.8s_ease-out]">
              <div className="inline-block">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Trusted Computer Training Institute
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Learn. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Practice.</span> Succeed.
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Empowering students and job seekers with practical computer education and digital skills in Jhajha, Bihar.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('courses')}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <span>View Courses</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold border-2 border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-200"
                >
                  Contact Us
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 lg:gap-8 pt-4">
                {stats.map((stat, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className="hidden sm:block w-px h-12 bg-slate-300"></div>}
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-slate-900">{stat.number}</div>
                      <div className="text-xs lg:text-sm text-slate-600">{stat.label}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-[fadeInRight_1s_ease-out]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full opacity-20 blur-3xl"></div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <Code className="w-48 h-48 text-emerald-600/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Global Computer Center</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-2xl p-8 lg:p-12 shadow-sm">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <span className="font-bold text-emerald-700">Global Computer Centre STS</span>, located at <span className="font-semibold text-emerald-700">Gram Dhobiyakura Chowk, Near Power Grid, Jhajha, Tola Barajor, Bihar 811308</span>, is a trusted computer training institute dedicated to providing quality, practical, and job-oriented digital education. Our mission is to bridge the digital skills gap by offering industry-relevant courses, hands-on training, and career guidance to students, professionals, and beginners across Jamui district.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Practical Learning Over Theory</h3>
                  <p className="text-slate-600">Focus on real-world application and hands-on experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Real Computer Lab Experience</h3>
                  <p className="text-slate-600">Practice on actual computers with modern software</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Affordable Education</h3>
                  <p className="text-slate-600">Quality training at prices every student can afford</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Career Development Focus</h3>
                  <p className="text-slate-600">Skills for jobs and self-employment opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Global Computer Center?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're committed to providing the best computer education experience in Jhajha
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-emerald-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Popular Courses</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry-relevant programs designed to make you job-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 relative"
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                  <p className="text-white/90 text-sm">{course.subtitle}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">What You'll Learn:</h4>
                  <ul className="space-y-2 mb-4">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Course Fee:</span>
                      <span className="font-bold text-emerald-600">{course.price}</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={() => {
                      setSelectedCourse(course.title);
                      scrollToSection('contact');
                    }}
                    className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Enroll Now</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Facilities</h2>
              <p className="text-lg text-slate-600 mb-8">
                We provide a modern, comfortable learning environment equipped with everything you need to succeed.
              </p>

              <div className="space-y-4">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-8 flex items-center justify-center">
                <BookOpen className="w-64 h-64 text-emerald-600/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What You Gain</h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              After completing our courses, you'll be equipped with skills that open doors to new opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <ChevronRight className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-white font-medium">{outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="gallery" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from our students who transformed their careers with our training
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-emerald-600">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-emerald-50 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful students who have transformed their careers with our practical computer training
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Apply for Admission</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-lg text-slate-600">
              Ready to start your learning journey? Get in touch with us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    <span className="font-semibold">Global Computer Centre STS</span><br />
                    Gram Dhobiyakura Chowk<br />
                    Near Power Grid, Jhajha<br />
                    Tola Barajor, Jamui<br />
                    Bihar — 811308
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Phone</h3>
                  <a href="tel:+919508XXXXXX" className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg">
                    +91 9508XXXXXX
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Call for admissions & course details</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Email</h3>
                  <a href="mailto:info@globalcomputercentre.com" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    info@globalcomputercentre.com
                  </a>
                  <p className="text-sm text-slate-500 mt-1">For course inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Class Timings</h3>
                  <p className="text-slate-600">
                    <span className="font-semibold">Morning Batch:</span> 8:00 AM - 12:00 PM<br />
                    <span className="font-semibold">Evening Batch:</span> 2:00 PM - 6:00 PM
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Monday to Saturday</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
                <h3 className="font-bold text-slate-900 mb-3">Follow Us on Social Media</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/globalcomputercentrests"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors group"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/globalcomputercentrests"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-colors group"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  Stay updated with latest courses and success stories
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-emerald-100 border-2 border-emerald-500 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">Thank You!</h4>
                  <p className="text-emerald-700">
                    Your inquiry has been submitted. We'll contact you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Interested Course
                    </label>
                    <select
                      name="course"
                      value={formData.course || selectedCourse || ''}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course.title}>{course.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      placeholder="Any questions or specific requirements?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 bg-slate-100 rounded-2xl p-4 h-96 overflow-hidden">
            <iframe
            
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6252823437153!2d86.37755027608567!3d24.80828157796344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f179ce988f9e61%3A0xab4b8ec8a51d4788!2sGLOBAL%20COMPUTER%20CENTRE%20STS!5e0!3m2!1sen!2sin!4v1770532843066!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Global Computer Centre Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Global Computer Center STS</h3>
                  <p className="text-xs text-slate-400">Jhajha, Bihar</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Empowering the youth of Jhajha with quality computer education and practical digital skills. Your trusted partner in career development.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/globalcomputercentrests"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/globalcomputercentrests"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-emerald-400 transition-colors">Our Courses</button></li>
                <li><button onClick={() => scrollToSection('facilities')} className="hover:text-emerald-400 transition-colors">Facilities</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-emerald-400 transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact Us</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">ADCA</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Basic Computer</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">MS Office Expert</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Typing Course</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Data Entry</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm text-center md:text-left">
                © 2026 Global Computer Centre STS | Gram Dhobiyakura, Jhajha, Bihar
              </p>
              <p className="text-slate-500 text-xs">
                Designed with ❤️
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}