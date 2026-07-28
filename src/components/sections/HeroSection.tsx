// v1
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero3D } from '@/components/Hero3D';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const HeroSection = () => {
  const navigate = useNavigate();
  const title = "I build";
  const highlight = "digital";
  const subtitle = "experiences";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Hero3D />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">


          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
          >
            <div className="overflow-hidden">
              {title.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}{' '}
              <span className="inline-block">
                {highlight.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </div>
            <div className="overflow-hidden">
              {subtitle.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + 10}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Full-stack developer specializing in creating innovative web applications
            with cutting-edge technologies. Turning complex problems into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="ghost"
              size="xl"
              className="btn-liquid-blue"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="btn-liquid-glass"
              onClick={() => navigate('/contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/muhammed-rasal68"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <motion.span 
            className="text-sm font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <motion.div
            animate={{ 
              y: [0, 5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};