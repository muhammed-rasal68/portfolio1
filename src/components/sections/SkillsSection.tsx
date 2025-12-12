import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'GraphQL', level: 80 },
      { name: 'Docker', level: 78 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'AWS', level: 82 },
      { name: 'Figma', level: 75 },
      { name: 'CI/CD', level: 85 },
      { name: 'Testing', level: 88 },
    ],
  },
];

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
  'GraphQL', 'REST APIs', 'AWS', 'Docker', 'Kubernetes', 'Git',
  'Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.8 + i * 0.05,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  }),
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
          >
            Skills & Expertise
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Technologies I{' '}
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
            >
              master
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A comprehensive toolkit of modern technologies and frameworks
            that I use to build powerful digital solutions.
          </motion.p>
        </motion.div>

        {/* Skill bars */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
              }}
              className="glass-card"
            >
              <motion.h3 
                className="text-xl font-semibold mb-6 text-primary"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 + catIndex * 0.1 }}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <motion.span 
                        className="text-sm font-medium"
                        whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 + catIndex * 0.2 + skillIndex * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={isInView ? { width: `${skill.level}%`, opacity: 1 } : { width: 0 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.6 + catIndex * 0.2 + skillIndex * 0.15,
                          ease: [0.6, -0.05, 0.01, 0.99],
                        }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(90deg, hsl(217, 91%, 60%) 0%, hsl(190, 95%, 50%) 100%)',
                        }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={isInView ? { x: '200%' } : {}}
                          transition={{
                            delay: 1.5 + catIndex * 0.2,
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={tagVariants}
              whileHover={{ 
                scale: 1.15, 
                y: -5,
                rotate: [0, -3, 3, 0],
                transition: { rotate: { duration: 0.3 } }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg glass text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};