import React, { useState } from 'react';
import { 
  Plane, 
  Ruler, 
  Camera, 
  Home, 
  Building2, 
  Map, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  Menu, 
  X,
  ScanLine,
  Layers,
  ShieldCheck,
  ClipboardCheck
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <Plane className="h-8 w-8 text-sky-500 rotate-45" />
              <span className="text-2xl font-bold tracking-tighter text-white">AIRIAL<span className="text-sky-500">.</span></span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Services', 'About', 'Technical', 'Pricing', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-sky-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105"
                >
                  Get Quote
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Services', 'About', 'Technical', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left hover:bg-slate-800 px-3 py-4 rounded-md text-base font-medium text-slate-300 hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-900/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-900/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide uppercase text-slate-400">Professional Aviation Standards</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              Precision Reality Capture <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                From The Sky
              </span>
            </h1>
            <p className="mt-4 text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Ultra-accurate 3D models, point clouds, and orthomosaics. Piloted by a professional test pilot for unmatched safety and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-sky-900/20"
              >
                Book Free Site Visit
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-bold text-lg transition-all"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/USP Bar */}
      <div className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-lg font-semibold text-white">Professional Test Pilot</h3>
              <p className="text-sm text-slate-400 mt-2">Deep understanding of aviation rules & complex safety protocols.</p>
            </div>
            <div className="flex flex-col items-center">
              <ScanLine className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-lg font-semibold text-white">10-50mm Accuracy</h3>
              <p className="text-sm text-slate-400 mt-2">RTK & Engineering survey methods for precise digital replicas.</p>
            </div>
            <div className="flex flex-col items-center">
              <Layers className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-lg font-semibold text-white">Advanced Outputs</h3>
              <p className="text-sm text-slate-400 mt-2">High density point clouds, DEMs, contours & orthomosaics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not Just a Drone Operator.<br/>An Aviation Professional.</h2>
              <div className="space-y-6 text-slate-400 text-lg">
                <p>
                  At Airial Limited, we combine the discipline of professional test piloting with state-of-the-art surveying technology. 
                </p>
                <p>
                  Operating in the complex airspace of the UK requires more than just a drone license. It requires a deep understanding of aviation law, risk management, and operational safety.
                </p>
                <p>
                  Whether you are a major construction firm needing a site model or a homeowner needing a roof inspection, you get the same level of rigorous safety planning and professional execution.
                </p>
                {/* UPDATED: More punchy title */}
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <span className="block text-xl font-bold text-white mb-1">Operational Risk Expert</span>
                    <span className="text-sm text-slate-500">Complex Environments</span>
                  </div>
                  {/* UPDATED: CAA Tile with Logo */}
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="block text-xl font-bold text-white mb-1">CAA</span>
                      <span className="text-sm text-slate-500">Compliant & Licensed</span>
                    </div>
                    {/* Placeholder for CAA Logo - You can replace the src with a local file later if needed */}
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/b/b8/Civil_Aviation_Authority_%28United_Kingdom%29_logo.svg" 
                      alt="CAA Logo" 
                      className="h-10 w-auto opacity-80" 
                      onError={(e) => {e.target.style.display='none'}} // Hides image if it fails to load
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 transform rotate-3 rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <Plane className="h-8 w-8 text-sky-500 mr-3" />
                  <h3 className="text-xl font-bold text-white">The Pilot's Standard</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Ex-Military / Test Pilot Experience",
                    "Engineering Grade Survey Equipment",
                    "Advanced Mission Planning",
                    "Full Insurance & Liability Cover",
                    "Complex Environment Specialists"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Tailored solutions for construction professionals and property owners.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial / B2B */}
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-sky-500/50 transition-colors group">
              <div className="h-12 w-12 bg-sky-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
                <Building2 className="h-6 w-6 text-sky-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Construction & Architecture</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Rapid data capture for site progress, planning, and design. We convert physical sites into digital assets.
              </p>
              <ul className="space-y-3">
                {[
                  "High Density Point Clouds",
                  "Digital Elevation Models (DEM)",
                  "2D Orthomosaics (Maps)",
                  "Contour Generation",
                  "Volumetric Analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm">
                    <ArrowRight className="h-4 w-4 text-sky-500 mr-2 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Residential / B2C */}
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-sky-500/50 transition-colors group">
              <div className="h-12 w-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <Home className="h-6 w-6 text-indigo-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Residential & Real Estate</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Cost-effective surveys for maintenance, sales, and landscaping. No scaffolding required.
              </p>
              <ul className="space-y-3">
                {[
                  "Roof Condition Surveys (4K)",
                  "Chimney & Gutter Inspection",
                  "Bird's Eye View Photography",
                  "Landscaping Surveys",
                  "Property Marketing Assets"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm">
                    <ArrowRight className="h-4 w-4 text-indigo-500 mr-2 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultancy / Expert (New Service) */}
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-teal-500/50 transition-colors group">
              <div className="h-12 w-12 bg-teal-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <ClipboardCheck className="h-6 w-6 text-teal-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aviation Consultancy & T&E</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Independent consultant providing SME input into R&D, T&E and bid phases of aerospace and defence projects.
              </p>
              <ul className="space-y-3">
                {[
                  "SORA Application Support",
                  "Helicopter Flight Test Categories",
                  "Simulator Test Flight Activities",
                  "Risk Management for Flight Trials",
                  "Theoretical & Practical Advice"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm">
                    <ArrowRight className="h-4 w-4 text-teal-500 mr-2 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Showcase */}
      <section id="technical" className="py-24 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 pr-8">
              <h2 className="text-3xl font-bold text-white mb-6">Engineering Grade Precision</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Ruler className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">RTK Positioning</h4>
                    <p className="text-slate-400 text-sm mt-1">Real-Time Kinematics allow us to position the drone to within centimeters, ensuring your map overlays perfectly with existing CAD data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Map className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">10-50mm Accuracy</h4>
                    <p className="text-slate-400 text-sm mt-1">Our workflows are verified against ground control points to deliver verifiable accuracy for engineering applications.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Camera className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">High Resolution Sensors</h4>
                    <p className="text-slate-400 text-sm mt-1">We use large sensor cameras to capture incredible detail, allowing you to zoom in on a single roof tile or brick.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Abstract Representation of Point Cloud */}
            <div className="lg:w-1/2 relative h-80 bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
               <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-1 opacity-20">
                  {[...Array(72)].map((_, i) => (
                    <div key={i} className={`bg-sky-500 rounded-sm ${Math.random() > 0.7 ? 'opacity-100' : 'opacity-0'}`}></div>
                  ))}
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <p className="text-sky-500 font-mono text-sm mb-2">PROCESSING POINT CLOUD...</p>
                   <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
                     <div className="w-2/3 h-full bg-sky-500"></div>
                   </div>
                   <p className="text-slate-500 text-xs mt-2 font-mono">15,402,100 POINTS GENERATED</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p className="text-slate-400">Professional services tailored to your project's scale.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {/* Card 1 */}
             <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 flex flex-col">
               <div className="mb-4">
                 <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wide">Residential</span>
                 <h3 className="text-2xl font-bold text-white mt-1">Roof Surveys</h3>
               </div>
               <div className="mb-6">
                 <span className="text-3xl font-bold text-white">From £99</span>
               </div>
               <ul className="space-y-3 mb-8 flex-1">
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> High-Res Inspection Photos</li>
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Safer than ladders</li>
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> 48hr Turnaround</li>
               </ul>
               <button onClick={() => scrollToSection('contact')} className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                 Enquire Now
               </button>
             </div>

             {/* Card 2 */}
             <div className="bg-slate-950 p-8 rounded-xl border-2 border-sky-600 relative flex flex-col transform md:-translate-y-4">
               <div className="absolute top-0 right-0 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
               <div className="mb-4">
                 <span className="text-sky-400 font-semibold text-sm uppercase tracking-wide">Commercial</span>
                 <h3 className="text-2xl font-bold text-white mt-1">Point Clouds</h3>
               </div>
               <div className="mb-6">
                 <span className="text-3xl font-bold text-white">From £350</span>
                 <span className="text-slate-500 text-sm block">per flight</span>
               </div>
               <ul className="space-y-3 mb-8 flex-1">
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-sky-500 mr-2" /> High Density Point Cloud</li>
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-sky-500 mr-2" /> Orthomosaic Map</li>
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-sky-500 mr-2" /> Elevation Model</li>
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-sky-500 mr-2" /> Engineering Accuracy</li>
               </ul>
               <button onClick={() => scrollToSection('contact')} className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors">
                 Get Quote
               </button>
             </div>

             {/* Card 3 */}
             <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 flex flex-col">
               <div className="mb-4">
                 <span className="text-teal-400 font-semibold text-sm uppercase tracking-wide">Consultation</span>
                 <h3 className="text-2xl font-bold text-white mt-1">Site Visit</h3>
               </div>
               <div className="mb-6">
                 <span className="text-3xl font-bold text-white">Free</span>
               </div>
               <ul className="space-y-3 mb-8 flex-1">
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Site Feasibility Check</li>
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Safety Assessment</li>
                 <li className="text-slate-400 text-sm flex"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Custom Project Scope</li>
               </ul>
               <button onClick={() => scrollToSection('contact')} className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                 Book Visit
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Ready to Deploy?</h2>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-slate-950 rounded-lg border border-slate-800">
                <div className="h-10 w-10 bg-sky-900/30 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-sky-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Us</p>
                  <p className="text-white font-medium">matt2.ward@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-slate-950 rounded-lg border border-slate-800">
                <div className="h-10 w-10 bg-sky-900/30 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-sky-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Us</p>
                  <p className="text-white font-medium">07798672266</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-slate-500 text-sm mb-4">Or fill out the form below to request a call back</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="bg-slate-950 border border-slate-700 text-white rounded-lg p-3 w-full focus:ring-2 focus:ring-sky-500 focus:outline-none" />
                    <input type="text" placeholder="Phone" className="bg-slate-950 border border-slate-700 text-white rounded-lg p-3 w-full focus:ring-2 focus:ring-sky-500 focus:outline-none" />
                  </div>
                  <input type="email" placeholder="Email Address" className="bg-slate-950 border border-slate-700 text-white rounded-lg p-3 w-full focus:ring-2 focus:ring-sky-500 focus:outline-none" />
                  <textarea placeholder="Tell us about your project..." rows={4} className="bg-slate-950 border border-slate-700 text-white rounded-lg p-3 w-full focus:ring-2 focus:ring-sky-500 focus:outline-none"></textarea>
                  <button className="w-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:scale-[1.02]">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Plane className="h-6 w-6 text-sky-500 rotate-45" />
            <span className="text-xl font-bold text-slate-200">AIRIAL<span className="text-sky-500">.</span></span>
          </div>
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Airial Limited. All rights reserved.</p>
            <p className="mt-1">Registered in England & Wales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;