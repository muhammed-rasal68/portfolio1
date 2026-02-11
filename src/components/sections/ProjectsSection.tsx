import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

import projectChess from '@/assets/project-chess.png';
import projectCafeteria from '@/assets/project-cafeteria.png';
import projectResults from '@/assets/project-results.png';
import projectImposter from '@/assets/project-imposter.png';
import projectSoundwave from '@/assets/project-soundwave.png';

const projects = [
  {
    title: 'Perfect Chess',
    description: 'An interactive chess platform with AI opponent, move validation, and real-time gameplay features for chess enthusiasts.',
    image: projectChess,
    tags: ['React', 'TypeScript', 'Chess.js', 'AI'],
    liveUrl: 'https://perfect-chess.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Cafeteria Arafa',
    description: 'A modern cafeteria website featuring menu showcase, online ordering, and customer reviews with a warm, inviting design.',
    image: projectCafeteria,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    liveUrl: 'https://v0-new-project-qdbcsydpim5.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Imposter Game',
    description: 'A fun multiplayer word game designed to be played with friends and family, featuring real-time gameplay and social interaction.',
    image: projectImposter,
    tags: ['React', 'Multiplayer', 'Game', 'Real-time'],
    liveUrl: 'https://imposter-rasal-final.base44.app/Landing',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Soundwave',
    description: 'A Spotify-inspired music streaming interface with playlists, track browsing, and a sleek dark-themed design.',
    image: projectSoundwave,
    tags: ['React', 'Music', 'Streaming', 'UI/UX'],
    liveUrl: 'https://soundwave-spotify.base44.app',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Result PPS',
    description: 'A comprehensive result management and analysis platform with intuitive interface for tracking and displaying academic results.',
    image: projectResults,
    tags: ['React', 'Data Analytics', 'Dashboard', 'API'],
    liveUrl: 'https://result-pps.base44.app/',
    githubUrl: '#',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    rotate: 2,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6"
            initial={{ scale: 0, rotate: -10 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            Featured Projects
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Recent{' '}
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
            >
              work
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A selection of projects that showcase my expertise in building
            modern, scalable, and user-friendly applications.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group glass-card p-0 overflow-hidden block cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.9 }}
                />
              </div>
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)"
              }}
              className="group glass-card flex flex-col block cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.h3 
                  className="text-xl font-semibold group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + tagIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs font-mono"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
