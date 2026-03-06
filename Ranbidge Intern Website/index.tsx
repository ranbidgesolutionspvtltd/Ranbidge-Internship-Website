import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Filter,
  X,
  ChevronRight,
  TrendingUp,
  Award,
  MapPin,
  Mail,
  ShieldAlert,
  FileText,
  Home,
  Star,
  Zap,
  Users,
  Briefcase,
  UserCircle,
  Bot,
  Plus,
  Minus,
  MessageSquare,
  Linkedin,
  Instagram,
  Youtube,
  Facebook
} from 'lucide-react';

// --- Types ---
interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  instructor: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  curriculum: string[];
}

type View = 'home' | 'privacy' | 'terms' | 'virtual-internship' | 'mentorship' | 'assistant';

// --- Constants ---
const LOGO_URL = "https://ik.imagekit.io/lg14qfjkg/COMPANY%20STAMP.jpeg";
const REGISTRATION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdrzYAVBF9rEFV7zcs_p0a_St8qGcnEsltEvdI-ZULHlO5Xbg/viewform?usp=publish-editor";
const VIRTUAL_INTERNSHIP_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeJ9tBwnyC4MQ0Mmy5AzbG9L04o4B-3wQ5qALtsbIqluT9I3A/viewform?usp=header";
const WHATSAPP_CHAT_LINK = "https://wa.me/8247392437?text=Hi%20RANBIDGE%2C%20I'm%20interested%20in%20your%20programs.%20Can%20you%20provide%20more%20information%3F";
const WHATSAPP_MENTORSHIP_LINK = "https://wa.me/8247392437?text=Hi%20RANBIDGE%2C%20I'm%20interested%20in%20the%20One%20on%20One%20Mentorship%20program.%20Can%20you%20provide%20more%20information%20about%20available%20mentors%20and%20tracks%3F";
const WHATSAPP_PAPER_WRITING_LINK = "https://wa.me/8247392437?text=Hi%20RANBIDGE%2C%20I'm%20interested%20in%20the%20Academic%20Paper%20Writing%20service.%20Can%20you%20provide%20more%20information%20about%20the%20writing%20services%2C%20pricing%2C%20and%20process%3F";
const LINKEDIN_LINK = "https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376/";
const INSTAGRAM_LINK = "https://www.instagram.com/ranbridgeserviceprivatelimited?igsh=MTYxOWU4NHJ0YzcwaA%3D%3D";
const YOUTUBE_LINK = "https://www.youtube.com/@RSPL-Academy";
const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=61578597456959";

// Header configuration
const HEADER_CONFIG = {
  transparentScrollThreshold: 50, // pixels scrolled before becoming transparent
  transparentBg: 'bg-white/80 backdrop-blur-md border-b border-slate-200/50',
  solidBg: 'bg-white/80 backdrop-blur-md border-b border-slate-200'
};

const COURSES: Course[] = [
  
  {
    id: 'frontend',
    title: 'Frontend Development',
    category: 'Engineering',
    duration: '10 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Develop responsive and interactive web applications for various platforms.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    curriculum: ['HTML & CSS Advanced', 'JS ES6+ Features', 'Frontend Optimization', 'State Management']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    category: 'Engineering',
    duration: '10 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Build scalable server-side applications and APIs for businesses and startups.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Node.js and Express Essentials', 'Database Design (MongoDB & MySQL)', 'RESTful API Development', 'Auth & Authorization']
  },
  {
    id: 'web-dev',
    title: 'Web Development Intern',
    category: 'Engineering',
    duration: '12 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Work on real-world web development projects using modern technologies and frameworks.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    curriculum: ['HTML, CSS, and JS Fundamentals', 'Responsive Web Design', 'React.js for Beginners', 'Advanced MERN Stack']
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development Intern',
    category: 'Engineering',
    duration: '16 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Gain comprehensive experience in both frontend and backend development workflows.',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Frontend with React.js', 'Backend with Node.js', 'Full Stack Project Dev', 'Deployment & Hosting']
  },
  
  {
    id: 'uiux',
    title: 'UI/UX Design Intern',
    category: 'Design',
    duration: '8 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Create user-friendly and visually appealing interfaces for modern applications.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    curriculum: ['UI Design Fundamentals', 'UX Research & Testing', 'Design Systems & Prototyping', 'Accessibility']
  },

  ,
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    category: 'Engineering',
    duration: '12 Weeks',
    instructor: 'Ranbidge Mobile',
    description: 'Build high-performance cross-platform mobile applications using React Native and Flutter.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    curriculum: ['React Native Fundamentals', 'Flutter & Dart Basics', 'Mobile UI/UX Principles', 'Firebase Integration']
  },
  
  {
    id: 'data-science',
    title: 'Data Science & ML Intern',
    category: 'Data Science',
    duration: '14 Weeks',
    instructor: 'Ranbidge Analytics',
    description: 'Master data analysis, visualization, and machine learning models using Python and R.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Python for Data Science', 'EDA & Data Visualization', 'Machine Learning Models', 'Deep Learning Basics']
  },
  
  {
    id: 'paper-writing',
    title: 'Academic Paper Writing Service',
    category: 'Business',
    duration: '8 Weeks',
    instructor: 'Ranbidge Writing',
    description: 'Master the art of academic and research paper writing, from structuring arguments to proper citation.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Research Methodology', 'Paper Structure & Formatting', 'Citation Styles (APA, MLA, Chicago)', 'Peer Review Process']
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack Intern',
    category: 'Engineering',
    duration: '14 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Comprehensive training in Python-based web development using Django and FastAPI.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Python Core & Advanced', 'Django Web Framework', 'FastAPI & RESTful APIs', 'PostgreSQL Databases']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Intern',
    category: 'Marketing',
    duration: '8 Weeks',
    instructor: 'Ranbidge Growth',
    description: 'Master SEO, social media marketing, and data-driven growth strategies for modern brands.',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Search Engine Optimization', 'Social Media Strategy', 'Google Ads & Analytics', 'Email Marketing']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Intern',
    category: 'Cloud',
    duration: '12 Weeks',
    instructor: 'Ranbidge Cloud',
    description: 'Learn to deploy and manage scalable infrastructure using AWS, Docker, and CI/CD pipelines.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    curriculum: ['AWS Core Services', 'Docker & Containerization', 'CI/CD with GitHub Actions', 'Kubernetes Basics']
  },
  {
    id: 'ai-genai',
    title: 'AI & Generative AI Intern',
    category: 'AI',
    duration: '14 Weeks',
    instructor: 'Ranbidge Intelligence',
    description: 'Explore the world of Large Language Models, Prompt Engineering, and building AI-powered apps.',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Intro to LLMs & Transformers', 'Prompt Engineering Techniques', 'OpenAI & LangChain', 'Building AI Chatbots']
  },
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Intern',
    category: 'Engineering',
    duration: '16 Weeks',
    instructor: 'Ranbidge Team',
    description: 'Build robust enterprise applications using Java, Spring Boot, and modern frontend frameworks.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Java SE/EE Fundamentals', 'Spring Boot Microservices', 'Hibernate & JPA', 'Angular Integration']
  },
  {
    id: 'embedded-iot',
    title: 'Embedded Systems & IoT',
    category: 'Engineering',
    duration: '10 Weeks',
    instructor: 'Ranbidge Robotics',
    description: 'Design smart devices and systems using microcontrollers, sensors, and IoT protocols.',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    curriculum: ['Microcontroller Basics (Arduino/ESP32)', 'C/C++ for Embedded Systems', 'Sensor Integration', 'IoT Protocols (MQTT/HTTP)']
  }
  
];

const CATEGORIES = ['All', 'Engineering', 'Design', 'Data Science', 'Security', 'Marketing', 'Cloud', 'AI', 'Business'];

const FAQS = [
  { q: "What are the eligibility criteria for the internship?", a: "We welcome students from CS, IT, and related engineering backgrounds. Basic knowledge of programming is a plus, but we provide foundational training for all tracks." },
  { q: "Is the internship remote or on-site?", a: "We offer both hybrid and remote options depending on the project requirements. You can discuss your preference during the interview phase." },
  { q: "Will I get a certificate upon completion?", a: "Yes, every successful intern receives a verified certificate from RANBIDGE Solutions Private Limited, along with a letter of recommendation for top performers." },
  { q: "Are these internships paid?", a: "Our internships are primarily focused on skill-building and industrial exposure. Select high-impact project roles may include stipends based on performance." }
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", role: "Software Engineer at TechCorp", text: "The MERN stack training at Ranbidge was life-changing. I went from knowing basic HTML to building full apps in 3 months.", avatar: "RS" },
  { name: "Ananya Iyer", role: "UI Designer at Creative Studio", text: "The UI/UX track is incredibly detailed. The mentors actually review your Figma files and give real-world feedback.", avatar: "AI" },
  { name: "Vikram Singh", role: "Backend Lead", text: "Scaling Node.js apps was something I only read about. At Ranbidge, I actually implemented it on live servers.", avatar: "VS" }
];

// --- Components ---

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; color: string }> = ({ href, children, color }) => (
  <a href={href} target="_blank" className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
    {children}
  </a>
);

const Navigation: React.FC<{
  view: View;
  setView: (view: View) => void;
  scrolled: boolean;
}> = ({ view, setView, scrolled }) => (
  <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? HEADER_CONFIG.transparentBg : HEADER_CONFIG.solidBg}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <button onClick={() => setView('home')} className="flex items-center gap-3">
          <img src={LOGO_URL} alt="RANBIDGE Logo" className="w-10 h-10 rounded-full border-2 border-indigo-100 shadow-sm" />
          <span className="text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 tracking-tight">
            RANBIDGE SOLUTIONS
          </span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => setView('home')} className={`text-sm font-bold flex items-center gap-2 transition-all ${view === 'home' ? 'text-indigo-600 scale-105' : 'text-slate-600 hover:text-indigo-600'}`}>
            <Home size={16} /> Home
          </button>
          <button onClick={() => setView('virtual-internship')} className={`text-sm font-bold flex items-center gap-2 transition-all ${view === 'virtual-internship' ? 'text-indigo-600 scale-105' : 'text-slate-600 hover:text-indigo-600'}`}>
            <Briefcase size={16} /> Virtual Internship
          </button>
          <button onClick={() => setView('mentorship')} className={`text-sm font-bold flex items-center gap-2 transition-all ${view === 'mentorship' ? 'text-indigo-600 scale-105' : 'text-slate-600 hover:text-indigo-600'}`}>
            <UserCircle size={16} /> One on One Mentorship
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a href={REGISTRATION_LINK} target="_blank" className="px-5 py-2 bg-indigo-600 text-white rounded-full text-xs font-bold hover:bg-indigo-700 transition-all shadow-md">
            Apply Now
          </a>
          <a href="https://chatgpt.com/g/g-69a489876fd4819187a332f593e4342c-ranbidge-assistant" className="p-2 rounded-full transition-all text-slate-600 hover:bg-slate-100" title="Ranbidge Assistant">
            <Bot size={18} />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  // Courses that should show "Coming Soon" instead of enroll button
  const comingSoonCourses = [
    'digital-marketing', 
    'cloud-devops',
    'ai-genai',
    'product-mgmt',
    'blockchain-dev',
    'paper-writing'
  ];
  
  const isComingSoon = comingSoonCourses.includes(course.id);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold rounded-full shadow-sm">
            {course.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
            course.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
            'bg-purple-100 text-purple-700'
          }`}>
            {course.level}
          </span>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <Clock size={12} />
            {course.duration}
          </div>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
          {course.description}
        </p>
        
        <div className="mb-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Curriculum</p>
          <ul className="space-y-1">
            {course.curriculum.map((item, i) => (
              <li key={i} className="text-[11px] text-slate-500 flex items-center gap-1">
                <div className="w-1 h-1 bg-indigo-400 rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="RANBIDGE Logo" className="w-8 h-8 rounded-full border-2 border-indigo-100" />
            <span className="text-xs font-medium text-slate-500">Ranbidge Solutions</span>
          </div>
          {isComingSoon && course.id === 'paper-writing' ? (
            <span className="px-4 py-2 bg-blue-500 text-white rounded-xl text-sm font-semibold cursor-not-allowed border border-blue-400">
              <a 
                href={WHATSAPP_PAPER_WRITING_LINK}
                target="_blank"
                className="text-white hover:text-blue-100 transition-colors"
              >
                Contact Us
              </a>
            </span>
          ) : (
            <a 
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
            >
              Enroll Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Handle scroll for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > HEADER_CONFIG.transparentScrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-50">
      {/* Background Animation Simulation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-200/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <Navigation view={view} setView={setView} scrolled={scrolled} />

      {view === 'home' && (
        <>
          {/* Hero Section */}
          <header className="bg-white border-b border-slate-100 relative pt-20 pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black mb-8 tracking-widest uppercase">
                <TrendingUp size={14} /> Future-Proof Your Career
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Empowering the next <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Tech Innovators.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Unlock your potential with hands-on industrial internships at RANBIDGE Solutions. Real projects, real mentors, real impact.
              </p>
            </div>
            
            {/* Decoration */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[32px] border-indigo-50 rounded-full opacity-20"></div>
          </header>

          {/* Course Filter Bar */}
          <div className="bg-white border-b border-slate-100 py-4 sticky top-16 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                          selectedCategory === cat 
                            ? 'bg-indigo-600 text-white shadow-md' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
                </div>
              </div>
            </div>
          </div>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Catalog Grid */}
            <div id="courses-section" className="flex-grow">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Available <span className="text-indigo-600">Tracks</span>
                </h2>
                <div className="text-sm font-bold text-slate-400 flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" /> Top Rated
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              
              {/* No Results State */}
              {filteredCourses.length === 0 && (
                <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                   <Search size={48} className="mx-auto text-slate-200 mb-6" />
                   <h3 className="text-2xl font-black text-slate-900 mb-2">No tracks found</h3>
                   <p className="text-slate-500">Try searching for something else or browse all categories.</p>
                </div>
              )}
            </div>
          </main>

          {/* FAQ Section */}
          <section className="py-24 bg-slate-50 relative border-t border-slate-100">
             <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Frequently Asked <span className="text-indigo-600">Questions</span></h2>
               <div className="space-y-4">
                 {FAQS.map((faq, idx) => (
                   <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                     <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
                     >
                       <span className="font-bold text-slate-800">{faq.q}</span>
                       {openFaq === idx ? <Minus size={18} className="text-indigo-600" /> : <Plus size={18} className="text-slate-400" />}
                     </button>
                     {openFaq === idx && (
                       <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                         {faq.a}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </div>
          </section>
        </>
      )}

      {view === 'virtual-internship' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black mb-8 tracking-widest uppercase">
              <Briefcase size={14} /> Remote Work
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Internship</span> Program
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our cutting-edge virtual internship program and gain real-world experience from anywhere in the world. Work on live projects with expert mentors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={VIRTUAL_INTERNSHIP_LINK} target="_blank" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl flex items-center gap-3">
                <Briefcase size={20} /> Apply for Virtual Internship
              </a>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl border-2 border-slate-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Zap className="text-indigo-600" />, title: "Flexible Schedule", desc: "Work at your own pace with flexible hours that fit your lifestyle." },
              { icon: <Users className="text-indigo-600" />, title: "Global Team", desc: "Collaborate with diverse team members from around the world." },
              { icon: <Award className="text-indigo-600" />, title: "Certified Program", desc: "Receive industry-recognized certificates upon completion." },
              { icon: <MessageSquare className="text-indigo-600" />, title: "Live Mentorship", desc: "Get real-time guidance from industry professionals." },
              { icon: <Star className="text-indigo-600" />, title: "Portfolio Projects", desc: "Build impressive projects for your professional portfolio." },
              { icon: <TrendingUp className="text-indigo-600" />, title: "Career Growth", desc: "Access job opportunities and career advancement support." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Full Stack Development Program */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Featured Virtual <span className="text-indigo-600">Program</span></h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Master both frontend and backend development in our comprehensive virtual internship</p>
            </div>
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80" 
                    alt="Full Stack Development" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                </div>
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">Advanced</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      16 Weeks
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Full Stack Development Virtual Internship</h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    Gain comprehensive experience in frontend, backend, and UI/UX design. Work on real projects using React, Node.js, MongoDB, modern design principles, and deployment technologies.
                  </p>
                  <div className="mb-8">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">What You'll Learn</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        Frontend development with React.js and modern CSS
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        UI/UX Design principles and user-centered design
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        Backend development with Node.js and Express
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        Database design with MongoDB and PostgreSQL
                      </li>
                      <li className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                        Cloud deployment and DevOps practices
                      </li>
                    </ul>
                  </div>
                  <a 
                    href={VIRTUAL_INTERNSHIP_LINK} 
                    target="_blank"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Enroll Now in Full Stack Program
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-20">
            <h2 className="text-3xl font-black mb-8 text-center">Program Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black mb-4 text-indigo-400">What You'll Get</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Hands-on experience with real client projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Weekly 1-on-1 mentorship sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Professional development workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 mt-1" size={20} />
                    <span>Networking opportunities with industry experts</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black mb-4 text-indigo-400">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Basic computer skills and internet access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Minimum 10-15 hours per week commitment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Good communication skills in English</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1" size={20} />
                    <span>Eagerness to learn and take initiative</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-violet-700 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-black mb-4">Ready to Start Your Virtual Internship?</h2>
            <p className="text-xl mb-8 text-indigo-100">Join hundreds of students who are already building their careers with us.</p>
            <a href={VIRTUAL_INTERNSHIP_LINK} target="_blank" className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-2xl font-black hover:bg-indigo-50 transition-all shadow-xl">
              Apply Now - Limited Spots Available
            </a>
          </div>

          <div className="mt-16 pt-8 flex justify-center">
            <button 
              onClick={() => setView('home')} 
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
            >
              <Home size={20} /> Return to Home
            </button>
          </div>
        </main>
      )}

      {view === 'mentorship' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black mb-8 tracking-widest uppercase">
              <UserCircle size={14} /> Personal Guidance
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              One on One <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Mentorship</span> Program
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get personalized guidance from industry experts. Accelerate your learning with tailored mentorship sessions designed to help you achieve your career goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={REGISTRATION_LINK} target="_blank" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl flex items-center gap-3">
                <UserCircle size={20} /> Start Your Mentorship Journey
              </a>
              <a href={WHATSAPP_MENTORSHIP_LINK} target="_blank" className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl border-2 border-slate-200">
                Talk to Mentor
              </a>
            </div>
          </div>

          {/* Mentorship Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <UserCircle className="text-indigo-600" />, title: "Personalized Learning", desc: "Custom mentorship plans tailored to your skill level and career aspirations." },
              { icon: <MessageSquare className="text-indigo-600" />, title: "Weekly Sessions", desc: "Regular one-on-one meetings with dedicated mentors to track progress." },
              { icon: <Award className="text-indigo-600" />, title: "Expert Mentors", desc: "Learn from industry professionals with years of real-world experience." },
              { icon: <TrendingUp className="text-indigo-600" />, title: "Career Guidance", desc: "Get insights on job opportunities, interviews, and career advancement." },
              { icon: <Star className="text-indigo-600" />, title: "Portfolio Review", desc: "Receive expert feedback on your projects and build an impressive portfolio." },
              { icon: <Zap className="text-indigo-600" />, title: "Flexible Scheduling", desc: "Schedule sessions at your convenience with multiple time slot options." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="mb-6 w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Mentorship Tracks */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Choose Your <span className="text-indigo-600">Mentorship Track</span></h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Select the area where you want expert guidance and personalized mentorship</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Full Stack Development",
                  level: "Basic Level",
                  duration: "6 Weeks",
                  description: "Master frontend, backend, and deployment with expert guidance.",
                  topics: ["React & Modern JavaScript", "Node.js & Express", "Database Design", "Cloud Deployment"]
                },
                {
                  title: "UI/UX Design",
                  level: "Beginner to Advanced",
                  duration: "8 Weeks", 
                  description: "Learn design principles and create stunning user experiences.",
                  topics: ["Design Fundamentals", "Figma & Adobe XD", "User Research", "Portfolio Building"]
                }
              ].map((track, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">{track.level}</span>
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={14} />
                      {track.duration}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{track.title}</h3>
                  <p className="text-slate-600 mb-6">{track.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">What You'll Learn</h4>
                    <ul className="space-y-2">
                      {track.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={REGISTRATION_LINK}
                    target="_blank"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
                  >
                    Enroll in Mentorship
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Mentorship Process */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white mb-20">
            <h2 className="text-3xl font-black mb-8 text-center">How Our Mentorship Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Apply", desc: "Fill out the application form with your goals and background." },
                { step: "02", title: "Get Matched", desc: "We'll pair you with the perfect mentor based on your needs." },
                { step: "03", title: "Start Learning", desc: "Begin your personalized mentorship journey with weekly sessions." },
                { step: "04", title: "Achieve Goals", desc: "Reach your career objectives with expert guidance." }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-black mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-violet-700 rounded-[3rem] p-12 text-white">
            <h2 className="text-3xl font-black mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-indigo-100">Join our one-on-one mentorship program and get the guidance you need to succeed.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={REGISTRATION_LINK} target="_blank" className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-2xl font-black hover:bg-indigo-50 transition-all shadow-xl">
                Apply for Mentorship
              </a>
              <a href={WHATSAPP_MENTORSHIP_LINK} target="_blank" className="inline-block px-8 py-4 bg-indigo-500 text-white rounded-2xl font-black hover:bg-indigo-400 transition-all">
                Schedule Free Consultation
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 flex justify-center">
            <button 
              onClick={() => setView('home')} 
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
            >
              <Home size={20} /> Return to Home
            </button>
          </div>
        </main>
      )}

      {view === 'assistant' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black mb-8 tracking-widest uppercase">
              <Bot size={14} /> AI Powered
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Ranbidge <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Assistant</span> Bot
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get instant answers about our courses, internships, and mentorship programs. Our AI assistant is here to help 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-700 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-black">Ranbidge Assistant</h2>
                      <p className="text-indigo-100 text-sm">Always here to help</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-96 overflow-y-auto p-6 bg-slate-50">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-md">
                        <p className="text-slate-700">Hello! I'm the Ranbidge Assistant. How can I help you today?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-none shadow-sm max-w-md">
                        <p className="text-white">What courses do you offer?</p>
                      </div>
                      <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-black text-slate-600">You</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-md">
                        <p className="text-slate-700 mb-3">We offer a variety of courses including:</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>• Full Stack Development</li>
                          <li>• UI/UX Design</li>
                          <li>• Data Science & ML</li>
                          <li>• Cloud & DevOps</li>
                          <li>• And many more!</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-slate-100 bg-white">
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-1 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-black hover:bg-indigo-700 transition-all flex items-center gap-2">
                      <MessageSquare size={18} /> Send
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Panel */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="text-indigo-600" size={20} />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700">
                    📚 Browse All Courses
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700">
                    🎯 Find Internship Programs
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700">
                    👨‍🏫 Book Mentorship Session
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700">
                    💬 Contact Support Team
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Star className="text-indigo-600" size={20} />
                  Popular Questions
                </h3>
                <div className="space-y-3">
                  <details className="group">
                    <summary className="text-sm font-medium text-slate-700 cursor-pointer hover:text-indigo-600 transition-colors">
                      How do I enroll in a course?
                    </summary>
                    <p className="mt-2 text-xs text-slate-600 pl-4">
                      Simply click "Apply Now" and fill out the registration form.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="text-sm font-medium text-slate-700 cursor-pointer hover:text-indigo-600 transition-colors">
                      Are the internships paid?
                    </summary>
                    <p className="mt-2 text-xs text-slate-600 pl-4">
                      Some positions offer stipends based on performance.
                    </p>
                  </details>
                  <details className="group">
                    <summary className="text-sm font-medium text-slate-700 cursor-pointer hover:text-indigo-600 transition-colors">
                      What is the duration?
                    </summary>
                    <p className="mt-2 text-xs text-slate-600 pl-4">
                      Programs range from 6 to 16 weeks depending on the track.
                    </p>
                  </details>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-violet-700 p-6 rounded-2xl text-white">
                <h3 className="text-lg font-black mb-3">Need Human Help?</h3>
                <p className="text-sm text-indigo-100 mb-4">
                  Connect with our support team for personalized assistance.
                </p>
                <a href={WHATSAPP_MENTORSHIP_LINK} target="_blank" className="w-full px-4 py-3 bg-white text-indigo-700 rounded-xl font-black hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                  <MessageSquare size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-12">What I Can <span className="text-indigo-600">Help With</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📚", title: "Course Information", desc: "Details about all our courses and curriculum" },
                { icon: "🎯", title: "Career Guidance", desc: "Help you choose the right career path" },
                { icon: "📝", title: "Application Help", desc: "Assist with registration and applications" },
                { icon: "💡", title: "Study Tips", desc: "Provide learning strategies and resources" },
                { icon: "📅", title: "Schedule Info", desc: "Timetables and session schedules" },
                { icon: "🏆", title: "Certification", desc: "Information about certificates and credentials" },
                { icon: "🤝", title: "Mentorship", desc: "Connect you with the right mentors" },
                { icon: "📊", title: "Progress Tracking", desc: "Monitor your learning journey" }
              ].map((capability, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="font-black text-slate-900 mb-2">{capability.title}</h3>
                  <p className="text-sm text-slate-600">{capability.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setView('home')} 
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl mx-auto"
            >
              <Home size={20} /> Return to Home
            </button>
          </div>
        </main>
      )}

      {(view === 'privacy' || view === 'terms') && (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-indigo-600 to-violet-700 p-12 text-white">
              <h1 className="text-4xl font-black flex items-center gap-4">
                {view === 'privacy' ? <ShieldAlert size={40} /> : <FileText size={40} />}
                {view === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h1>
              <p className="mt-4 text-indigo-100 font-bold opacity-80">Effective Date: August 15, 2025</p>
            </div>
            
            <div className="p-12 text-slate-600 prose prose-indigo max-w-none">
              {view === 'privacy' ? (
                <>
                  <p className="text-lg">Your privacy is important to us. This Privacy Policy explains how <strong>RANBIDGE Solutions Private Limited</strong> collects, uses, and protects your information.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">01.</span> Information We Collect</h2>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Personal details such as name, email address, and contact information.</li>
                    <li>Information you provide through forms or course registrations.</li>
                    <li>Technical information like IP address, browser type, and device details.</li>
                  </ul>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">02.</span> How We Use Your Information</h2>
                  <p>We use your information to provide and improve our services, process registrations, and send relevant updates about your chosen internship track.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900 flex items-center gap-2"><span className="text-indigo-600">03.</span> Data Security</h2>
                  <p>We use industry-standard security measures to protect your data. However, no method of electronic storage is 100% secure.</p>
                  <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h3 className="font-black text-slate-900 mb-2">Have questions?</h3>
                    <p className="text-sm">Contact us at: <a href="mailto:ranbridgeserviceprivatelimited@gmail.com" className="text-indigo-600 font-black underline decoration-2 underline-offset-4">ranbridgeserviceprivatelimited@gmail.com</a></p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-lg">Welcome to RANBIDGE Solutions! These Terms of Service govern your use of our website and services.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900">01. Acceptance of Terms</h2>
                  <p>By using our website, you agree to comply with and be bound by these terms. This agreement is legally binding.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900">02. Use of Services</h2>
                  <p>You may use our services for lawful purposes only. Any unauthorized duplication of course material or curriculum is strictly prohibited.</p>
                  <h2 className="text-2xl font-black mt-10 mb-6 text-slate-900">03. Intellectual Property</h2>
                  <p>All content, trademarks, code snippets, and curriculum data are owned by RANBIDGE Solutions Private Limited.</p>
                  <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-sm font-bold">For official inquiries: <a href="mailto:ranbidgesolutionspvtltd@gmail.com" className="text-indigo-600 font-black underline decoration-2 underline-offset-4">ranbidgesolutionspvtltd@gmail.com</a></p>
                  </div>
                </>
              )}
              <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
                <button 
                  onClick={() => setView('home')} 
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl mx-auto"
                >
                  <Home size={20} /> Return to Home
                </button>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="mt-auto bg-slate-950 text-slate-400 py-20 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 text-white mb-8">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-white/10 flex items-center justify-center p-1">
                  <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-full" />
                </div>
                <span className="text-2xl font-black tracking-tighter">RANBIDGE SOLUTIONS PVT LTD</span>
              </div>
              <p className="max-w-sm mb-10 leading-relaxed text-slate-500 text-lg">
                We're building the bridge between academic knowledge and industry excellence. Join the most intensive internship program in India.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <MapPin size={18} className="text-indigo-400" />
                  </div>
                  <span className="font-bold">Narasaraopet, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Mail size={18} className="text-indigo-400" />
                  </div>
                  <span className="font-bold">ranbidgesolutionspvtltd@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4">
                <li><button onClick={() => setView('home')} className="font-bold hover:text-indigo-400 transition-colors">Course Catalog</button></li>
                <li><button onClick={() => setView('virtual-internship')} className="font-bold hover:text-indigo-400 transition-colors">Virtual Internship</button></li>
                <li><button onClick={() => setView('mentorship')} className="font-bold hover:text-indigo-400 transition-colors">One on One Mentorship</button></li>
                <li><a href="https://chatgpt.com/g/g-69a489876fd4819187a332f593e4342c-ranbidge-assistant" className="font-bold text-indigo-400 hover:text-white transition-colors">Ranbidge Assistant</a></li>
                <li><button onClick={() => setView('privacy')} className="font-bold hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setView('terms')} className="font-bold hover:text-indigo-400 transition-colors">Terms of Service</button></li>
                <li><a href={REGISTRATION_LINK} target="_blank" className="font-bold hover:text-indigo-400 transition-colors">Apply Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Our Reach</h4>
              <div className="flex flex-wrap gap-3">
                <SocialIcon href={LINKEDIN_LINK} color="#0077B5">
                  <Linkedin size={16} />
                </SocialIcon>
                <SocialIcon href={INSTAGRAM_LINK} color="#E4405F">
                  <Instagram size={16} />
                </SocialIcon>
                <SocialIcon href={YOUTUBE_LINK} color="#FF0000">
                  <Youtube size={16} />
                </SocialIcon>
                <SocialIcon href={FACEBOOK_LINK} color="#1877F2">
                  <Facebook size={16} />
                </SocialIcon>
              </div>
              <div className="mt-8">
                <a href={WHATSAPP_CHAT_LINK} target="_blank" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all">
                  <MessageSquare size={18} /> Chat with Us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-bold text-slate-600">© 2025 RANBIDGE Solutions Private Limited. All rights reserved.</p>
            <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-700">
               <span className="cursor-pointer hover:text-slate-400 transition-colors">Facebook</span>
               <span className="cursor-pointer hover:text-slate-400 transition-colors">GitHub</span>
               <span className="cursor-pointer hover:text-slate-400 transition-colors">Behance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
