import React, { useState } from 'react';

export default function GlobalComputerCentre() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', course: '', message: '' });
    }, 3000);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    { title: "ADCA", duration: "6-12 Months", color: "from-emerald-500 to-teal-600" },
    { title: "Basic Computer", duration: "2-3 Months", color: "from-blue-500 to-indigo-600" },
    { title: "Data Entry", duration: "1-2 Months", color: "from-cyan-500 to-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* SEO Meta Tags - Add to index.html */}
      {/* 
      <title>Global Computer Centre STS Jhajha | Website by Gravity - Web Design & SEO</title>
      <meta name="description" content="Computer training in Jhajha, Bihar. ADCA, Basic Computer, Data Entry courses. Professional website by Gravity - Expert Web Design, SEO & Digital Marketing Agency." />
      <meta name="keywords" content="computer training jhajha, ADCA course bihar, web design agency, Gravity web design, SEO services, digital marketing, website development, UI UX design, Gravity services" />
      <meta name="author" content="Gravity - Web Design & Development Agency" />
      */}

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">G</div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Global Computer Center</h1>
              <p className="text-xs text-slate-600">Dhobiyakura Jhajha</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => scrollTo('home')} className="text-sm font-medium text-slate-700 hover:text-emerald-600">Home</button>
            <button onClick={() => scrollTo('courses')} className="text-sm font-medium text-slate-700 hover:text-emerald-600">Courses</button>
            <button onClick={() => scrollTo('gravity')} className="text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg">⚡ By Gravity</button>
            <button onClick={() => scrollTo('contact')} className="text-sm font-medium bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Learn. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Practice.</span> Succeed.</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">Quality computer education in Jhajha, Bihar. ADCA, Basic Computer & Data Entry courses.</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => scrollTo('courses')} className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg">View Courses</button>
            <button onClick={() => scrollTo('contact')} className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50">Contact Us</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">About Us</h3>
          <p className="text-lg text-slate-700 text-center leading-relaxed">
            <strong>Global Computer Centre STS</strong> at Gram Dhobiyakura Chowk, Near Power Grid, Jhajha, Bihar 811308 offers practical, job-oriented computer training.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Courses</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                  <div className="text-sm font-semibold mb-2">{course.duration}</div>
                  <h4 className="text-2xl font-bold">{course.title}</h4>
                </div>
                <div className="p-6">
                  <button onClick={() => scrollTo('contact')} className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600">
                    Enroll Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRAVITY SECTION - Main SEO Section */}
      <section id="gravity" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Gravity Hero */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl font-bold">G</div>
              <div className="text-left">
                <h2 className="text-4xl font-bold">Gravity</h2>
                <p className="text-emerald-400">Building Digital Excellence</p>
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Building Digital Excellence with Gravity
            </h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              We design intelligent websites and mobile apps that don't just look good — they perform. At Gravity, we blend creativity, technology, and precision to transform your brand into a powerful digital experience.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="tel:+919142003626" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl">Contact Gravity</a>
            </div>
          </div>

          {/* Gravity Services */}
          <div className="mb-16">
            <h4 className="text-3xl font-bold text-center mb-12">Our Services</h4>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Website Development", icon: "🌐" },
                { name: "Website Maintenance", icon: "🔧" },
                { name: "SEO Optimization", icon: "🚀" },
                { name: "UI/UX Design", icon: "🎨" },
                { name: "Performance Optimization", icon: "⚡" },
                { name: "Business Consultation", icon: "💼" },
                { name: "Content Management", icon: "📝" },
                { name: "Digital Marketing", icon: "📱" }
              ].map((service, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all hover:-translate-y-1">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h5 className="text-lg font-bold text-emerald-400">{service.name}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Gravity */}
          <div className="mb-16">
            <h4 className="text-3xl font-bold text-center mb-12">Why Choose Gravity</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h5 className="text-2xl font-bold mb-3">Fast Working Process</h5>
                <p className="text-slate-300">At Gravity, we plan, design, and deliver projects quickly — without compromising quality.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">👥</div>
                <h5 className="text-2xl font-bold mb-3">Dedicated Team</h5>
                <p className="text-slate-300">Our skilled professionals work with passion and precision to bring your digital vision to life.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h5 className="text-2xl font-bold mb-3">24/7 Support</h5>
                <p className="text-slate-300">We're always available to assist, update, and support you — anytime you need us.</p>
              </div>
            </div>
          </div>

          {/* Gravity Contact */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-10 text-center">
            <h4 className="text-3xl font-bold mb-4">CONTACT GRAVITY</h4>
            <p className="text-lg mb-6 opacity-90">I would love to hear about your project and how I could help.</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <h5 className="font-bold mb-2">📞 Phone</h5>
                <a href="tel:+919142003626" className="block text-white font-semibold hover:underline">+91-9142003626</a>
                <a href="tel:+919508414506" className="block text-white font-semibold hover:underline">+91-9508414506</a>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <h5 className="font-bold mb-2">✉️ Email</h5>
                <a href="mailto:mail.gravityservices@gmail.com" className="text-white font-semibold hover:underline">mail.gravityservices@gmail.com</a>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4">
                <h5 className="font-bold mb-2">🌐 Social</h5>
                <div className="flex gap-3 justify-center">
                  <a href="https://twitter.com/gravity" className="text-white hover:text-emerald-200">Twitter</a>
                  <a href="https://instagram.com/gravity" className="text-white hover:text-emerald-200">Instagram</a>
                  <a href="https://facebook.com/gravity" className="text-white hover:text-emerald-200">Facebook</a>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <a href="tel:+919142003626" className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:shadow-2xl">Call Now</a>
              <a href="mailto:mail.gravityservices@gmail.com" className="bg-white/20 border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-emerald-600">Send Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-slate-900 mb-12">Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 text-2xl">📍</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-slate-600">Global Computer Centre STS<br/>Gram Dhobiyakura Chowk, Near Power Grid<br/>Jhajha, Bihar — 811308</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 text-2xl">📞</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <a href="tel:+919508XXXXXX" className="text-emerald-600 font-semibold hover:underline">+91 9508XXXXXX</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 text-2xl">✉️</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href="mailto:info@globalcomputercentre.com" className="text-emerald-600 font-semibold hover:underline">info@globalcomputercentre.com</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              {submitted ? (
                <div className="bg-emerald-100 border-2 border-emerald-500 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h4 className="text-2xl font-bold text-emerald-900 mb-2">Thank You!</h4>
                  <p className="text-emerald-700">We'll contact you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Course</label>
                    <select name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none">
                      <option value="">Select a course</option>
                      <option value="ADCA">ADCA</option>
                      <option value="Basic Computer">Basic Computer</option>
                      <option value="Data Entry">Data Entry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-bold hover:shadow-xl">Submit Inquiry</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Global Computer Center</h4>
              <p className="text-slate-400 text-sm">Quality computer education in Jhajha, Bihar</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Gravity Services</h4>
              <div className="text-slate-400 text-sm space-y-1">
                <p>Web Design & Development</p>
                <p>SEO Optimization</p>
                <p>Digital Marketing</p>
                <p>UI/UX Design</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Gravity</h4>
              <p className="text-slate-400 text-sm"><a href="tel:+919142003626" className="hover:text-emerald-400">+91-9142003626</a></p>
              <p className="text-slate-400 text-sm"><a href="tel:+919508414506" className="hover:text-emerald-400">+91-9508414506</a></p>
              <p className="text-slate-400 text-sm"><a href="mailto:mail.gravityservices@gmail.com" className="hover:text-emerald-400">mail.gravityservices@gmail.com</a></p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p className="mb-2">© 2026 Global Computer Centre STS | Gram Dhobiyakura, Jhajha, Bihar</p>
            <p>Website Designed & Developed by <a href="https://gravityservices.com" className="text-emerald-400 font-semibold hover:text-emerald-300">Gravity</a> | Professional <a href="https://gravityservices.com" className="text-emerald-400 hover:text-emerald-300">Web Design</a>, <a href="https://gravityservices.com" className="text-emerald-400 hover:text-emerald-300">SEO</a> & <a href="https://gravityservices.com" className="text-emerald-400 hover:text-emerald-300">Digital Marketing</a> Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
}