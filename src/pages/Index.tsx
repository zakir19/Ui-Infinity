import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import {
  Github,
  Package,
  Zap,
  Sparkles,
  Star,
  Download,
  Code,
  Heart,
  Rocket,
  ChevronRight,
  Command,
  Terminal,
  Cpu,
  Database,
  Shield,
  Copy,
  CheckCircle,
  Eye,
  ExternalLink,
  Award,
  Palette,
  MousePointer,
  CreditCard,
  Type,
  Square,
  Layout,
  Grid,
  Box,
  Sidebar,
  Navigation,
  BarChart3,
  Table,
  PieChart,
  List,
  Tag,
  MessageCircle,
  AlertCircle,
  Activity,
  Loader,
  Users,
  Layers,
  Clock,
  Bell
} from 'lucide-react';

// Reusable animation variants for clean code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const childVariants = {
  hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 15, stiffness: 200 } },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 200 } },
};

const Index = () => {
  usePageTitle('Home');
  
  const [copied, setCopied] = useState(false);
  const [isColorChanged, setIsColorChanged] = useState(false);

  // Enhanced mouse position tracking with spring for smooth animations
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText('npm install uiinfinity-components');
    setCopied(true);
    setIsColorChanged(true);
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setIsColorChanged(false), 2000);
  };

  const handleButtonClick = () => {
    setIsColorChanged(true);
    setTimeout(() => setIsColorChanged(false), 2000);
    copyToClipboard();
  };

  const heroFeatures = [
    { icon: Cpu, title: "Performance Optimized", description: "Built for speed and efficiency" },
    { icon: Shield, title: "Enterprise Ready", description: "Production-grade reliability" },
    { icon: Database, title: "Scalable Architecture", description: "Grows with your needs" }
  ];

  const mainFeatures = [
      { icon: Zap, title: "Lightning Fast", description: "Optimized rendering with minimal bundle impact. Every component is built for maximum performance.", gradient: "from-yellow-500 to-orange-500" },
      { icon: Shield, title: "Enterprise Ready", description: "Battle-tested in production environments. Comprehensive error handling and accessibility.", gradient: "from-emerald-500 to-teal-500" },
      { icon: Cpu, title: "TypeScript First", description: "Full TypeScript support with excellent IntelliSense. Type-safe development experience.", gradient: "from-blue-500 to-cyan-500" },
      { icon: Database, title: "Highly Scalable", description: "Architected for large-scale applications. Modular design with minimal dependencies.", gradient: "from-purple-500 to-indigo-500" },
      { icon: Command, title: "Developer Experience", description: "Intuitive APIs, comprehensive documentation, and excellent developer tooling.", gradient: "from-pink-500 to-rose-500" },
      { icon: Award, title: "Production Proven", description: "Used by thousands of developers worldwide. Continuous updates and community support.", gradient: "from-violet-500 to-purple-500" }
  ];

  // Component showcase data
  const componentCategories = [
    {
      title: "UI Components",
      description: "Essential building blocks for modern interfaces",
      icon: Palette,
      gradient: "from-blue-500 to-cyan-500",
      components: [
        { name: "Button", route: "/buttons", icon: MousePointer, color: "from-blue-500 to-purple-500" },
        { name: "Card", route: "/cards", icon: CreditCard, color: "from-emerald-500 to-teal-500" },
        { name: "Input", route: "/inputs", icon: Type, color: "from-orange-500 to-red-500" },
        { name: "Modal", route: "/modals", icon: Square, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "Layout Components",
      description: "Structure and organization for your content",
      icon: Layout,
      gradient: "from-purple-500 to-pink-500",
      components: [
        { name: "Grid", route: "/grids", icon: Grid, color: "from-indigo-500 to-purple-500" },
        { name: "Container", route: "/containers", icon: Box, color: "from-green-500 to-emerald-500" },
        { name: "Sidebar", route: "/sidebars", icon: Sidebar, color: "from-yellow-500 to-orange-500" },
        { name: "Navigation", route: "/navigations", icon: Navigation, color: "from-red-500 to-pink-500" }
      ]
    },
    {
      title: "Display",
      description: "Present information in meaningful ways",
      icon: BarChart3,
      gradient: "from-emerald-500 to-teal-500",
      components: [
        { name: "Table", route: "/tables", icon: Table, color: "from-blue-500 to-indigo-500" },
        { name: "BentoGrid", route: "/grids", icon: PieChart, color: "from-green-500 to-teal-500" },
        { name: "3D Tilt Effect", route: "/effects", icon: List, color: "from-purple-500 to-violet-500" },
        { name: "Glass Revel", route: "/effect", icon: Tag, color: "from-orange-500 to-red-500" }
      ]
    },
    {
      title: "Feedback Components",
      description: "User interaction and system responses",
      icon: MessageCircle,
      gradient: "from-orange-500 to-red-500",
      components: [
        { name: "Toast", route: "/feedback", icon: Bell, color: "from-yellow-500 to-orange-500" },
        { name: "Alert", route: "/feedback", icon: AlertCircle, color: "from-red-500 to-pink-500" },
        { name: "Progress", route: "/feedback", icon: Activity, color: "from-blue-500 to-cyan-500" },
        { name: "Skeleton", route: "/feedback", icon: Loader, color: "from-gray-500 to-slate-500" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Frontend Engineer",
      company: "TechCorp",
      avatar: "SC",
      content: "UIinfinity has transformed our development workflow. The components are incredibly polished and the TypeScript support is outstanding.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      avatar: "MR",
      content: "We've reduced our development time by 60% since switching to UIinfinity. The documentation is comprehensive and the community is amazing.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "UI/UX Designer",
      company: "DesignStudio",
      avatar: "EW",
      content: "The design system is consistent and beautiful. It's rare to find a component library that looks this good out of the box.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Free For All",
      price: "$0",
      period: "forever",
      description: "Everything is completely free - no hidden fees, no limitations",
      features: [
        "500+ Premium Components",
        "Advanced Documentation",
        "Community Support",
        "MIT License",
        "Advanced Animations",
        "Team Collaboration",
        "Custom Themes",
        "Priority Updates"
      ],
      cta: "Get Started Free",
      popular: true
    }
  ];

  const stats = [
    { value: "Free For", label: "All", icon: Users },
    { value: "500+", label: "Components", icon: Layers },
    { value: "99.9%", label: "Uptime", icon: Shield },
    { value: "24/7", label: "Support", icon: Clock }
  ];
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" ref={ref}>
      {/* CEO UPGRADE: Interactive Spotlight Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(45, 110, 255, 0.15), transparent 80%)`
          ),
        }}
      />
       {/* Animated Grid Background */}
      <div className="absolute inset-0 z-[-1]">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231d2538' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      
      {/* Upgraded Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-blue-400 rounded-full pointer-events-none z-50 transform-gpu"
        style={{ 
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 50, mass: 0.1 }}
      />
      
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl w-full"
          >
            <motion.div variants={childVariants} className="inline-block bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2 text-sm text-blue-300 mb-6">
              <Sparkles className="inline w-4 h-4 mr-2 text-blue-400" />
              Introducing UIinfinity v1.0
            </motion.div>

            {/* CEO UPGRADE: Staggered Word Animation */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-br text-white bg-clip-text text-transparent"
              variants={containerVariants}
            >
              {"The Ultimate Component Library".split(" ").map((word, i) => (
                <motion.span key={i} variants={childVariants} className="inline-block mr-4">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
             
            // The variants prop has been removed here as well
            className=" mx-auto text-lg text-transparent bg-clip-text 
                      bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 
                      animate-gradient bg-[size:200%_auto] mb-12"
            >
            A suite of production-ready, enterprise-grade React components designed for unparalleled performance and infinite possibilities.
            </motion.p>
            
            <motion.div variants={childVariants} className="flex justify-center items-center gap-4 mb-16">
              <Link to="/components">
                <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  <Eye size={18} /> Explore Components
                </motion.button>
              </Link>
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${isColorChanged ? 'from-orange-400 to-orange-600' : 'from-purple-600 to-blue-600'} rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-1000 group-hover:duration-200 animate-tilt ${isColorChanged ? 'animate-pulse' : ''}`}></div>
                <button 
                  onClick={handleButtonClick} 
                  className={`relative px-8 py-4 ${isColorChanged ? 'bg-orange-500' : 'bg-gray-900'} rounded-xl leading-none flex items-center font-mono text-lg transition-all duration-300 shadow-lg ${isColorChanged ? 'shadow-orange-500/50' : 'shadow-purple-500/25'}`}
                >
                  <span className="text-gray-500 mr-3 text-xl">$</span>
                  <span className={`${isColorChanged ? 'text-white' : 'text-green-400'} text-xl font-semibold`}>npm i uiinfinity</span>
                  <AnimatePresence>
                    {copied ? (
                      <CheckCircle size={20} className="text-green-400 ml-4" />
                    ) : (
                      <Copy size={20} className={`${isColorChanged ? 'text-white' : 'text-gray-500'} ml-4 group-hover:text-white transition`} />
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* CEO UPGRADE: 3D Interactive Grid */}
          <InteractiveGrid />
        </section>
        
        {/* FEATURES SECTION */}
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold">Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">UIinfinity</span>?</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
                        We obsess over the details so you don't have to. Every component is a masterpiece of design and engineering.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {mainFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={childVariants}
                            className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden group"
                        >
                            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* COMPONENT SHOWCASE SECTION */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Component <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Showcase</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive collection of beautifully crafted components, each designed with performance and accessibility in mind.
              </p>
            </motion.div>

            <div className="space-y-16">
              {componentCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center`}>
                      <category.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.components.map((component, componentIndex) => (
                      <Link key={componentIndex} to={component.route}>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="group bg-gray-700/50 rounded-xl p-6 border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${component.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <component.icon size={20} className="text-white" />
                          </div>
                          <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                            {component.name}
                          </h4>
                          <div className="flex items-center text-gray-400 text-sm">
                            <span>View Component</span>
                            <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Developers</span> Worldwide
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={24} className="text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 px-4 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Developers</span> Say
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join thousands of satisfied developers who have transformed their projects with UIinfinity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-blue-400 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">100% FREE</span> For Everyone
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                No hidden fees, no limitations, no catch. Everything is completely free forever.
              </p>
            </motion.div>

            <div className="flex justify-center">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative p-8 rounded-2xl border transition-all duration-300 max-w-md w-full"
                >
                  {/* Firecracker Animation Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-2xl animate-pulse"></div>
                  
                  {/* Animated Firecracker Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        left: `${20 + (i * 10)}%`,
                        top: `${10 + (i * 5)}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* FREE Badge */}
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-lg font-bold shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🎉 FREE FOREVER 🎉
                  </motion.div>
                  
                  <div className="relative z-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/50 rounded-2xl p-8 scale-105">
                    <div className="text-center mb-8">
                      <motion.h3 
                        className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {plan.name}
                      </motion.h3>
                      <div className="mb-4">
                        <motion.span 
                          className="text-6xl font-bold text-green-400"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {plan.price}
                        </motion.span>
                        <span className="text-gray-400 text-xl">/{plan.period}</span>
                      </div>
                      <p className="text-gray-300 text-lg">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: featureIndex * 0.2,
                              ease: "easeInOut"
                            }}
                          >
                            <CheckCircle className="text-green-400" size={20} />
                          </motion.div>
                          <span className="text-gray-300 text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button 
                      className="w-full py-4 px-6 rounded-lg font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/25"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          "0 10px 30px rgba(34, 197, 94, 0.3)",
                          "0 20px 40px rgba(34, 197, 94, 0.5)",
                          "0 10px 30px rgba(34, 197, 94, 0.3)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🚀 {plan.cta}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Development?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have already elevated their projects with UIinfinity components.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/components">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Rocket size={20} />
                    Get Started Free
                  </motion.button>
                </Link>
                <a href="https://github.com/zakir19/Ui-Infinity" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold border border-gray-700 hover:border-gray-600 flex items-center gap-2"
                  >
                    <Github size={20} />
                    View on GitHub
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* FOOTER SECTION */}
        <footer className="py-16 px-4 border-t border-gray-800">
             <div className="max-w-6xl mx-auto text-center">
                 <div className="flex justify-center items-center gap-4 mb-6">
                    <Heart className="text-blue-500" />
                     <a href="https://github.com/zakir19" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                         Crafted by Zakir Husain and AI
                     </a>
                 </div>
                 <div className="flex justify-center gap-6 mb-8">
                     <motion.a href="https://github.com/zakir19/Ui-Infinity" whileHover={{ scale: 1.1, y: -2 }} className="text-gray-500 hover:text-white transition-colors"><Github /></motion.a>
                     <motion.a href="https://www.npmjs.com/package/uiinfinity-components" whileHover={{ scale: 1.1, y: -2 }} className="text-gray-500 hover:text-white transition-colors"><Package /></motion.a>
                 </div>
                 <p className="text-gray-600">&copy; 2025 UIinfinity. All rights reserved.</p>
             </div>
        </footer>
      </main>
    </div>
  );
};


// Interactive Grid Component for the Hero Section
const InteractiveGrid = () => {
    const ref = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const resetMousePosition = () => {
        const grid = ref.current;
        if (grid) {
            mouseX.set(grid.offsetWidth / 2);
            mouseY.set(grid.offsetHeight / 2);
        }
    };
    
    // Create a smoothed version of the mouse position
    const smoothMouseX = useSpring(mouseX, { stiffness: 70, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 70, damping: 20 });
    
    // Transform mouse position into a 3D rotation
    const rotateX = useTransform(smoothMouseY, [0, 500], [20, -20]);
    const rotateY = useTransform(smoothMouseX, [0, 800], [-20, 20]);
    
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMousePosition}
            style={{
                perspective: '1000px',
                width: 'min(90%, 800px)',
                height: '500px',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="relative"
        >
            <motion.div
                style={{
                    transformStyle: 'preserve-3d',
                    rotateX,
                    rotateY,
                }}
                className="w-full h-full bg-gray-900/40 border border-gray-800/80 rounded-3xl grid grid-cols-10 grid-rows-6 p-4 gap-2"
            >
                {Array.from({ length: 60 }).map((_, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-md" />
                ))}
                {/* Example "Component" on the grid */}
                <motion.div className="absolute top-1/4 left-1/4 col-span-3 row-span-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center p-4 text-white font-bold" style={{ transform: 'translateZ(40px)' }}>
                   Card
                </motion.div>
                <motion.div className="absolute bottom-1/4 right-1/4 col-span-2 row-span-1 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center p-4 text-white font-bold" style={{ transform: 'translateZ(60px)' }}>
                   Button
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Index;