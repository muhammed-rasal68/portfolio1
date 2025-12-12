import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sanurasal00@gmail.com', href: 'mailto:sanurasal00@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9847871738', href: 'tel:+919847871738' },
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

const itemVariants = {
  hidden: { opacity: 0, x: -50, rotateY: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const inputVariants = {
  focus: {
    scale: 1.02,
    boxShadow: "0 0 20px rgba(var(--primary), 0.3)",
    transition: { type: "spring", stiffness: 300 },
  },
};

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/3 left-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-52 h-52 bg-accent/15 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Let's{' '}
            <motion.span 
              className="text-gradient inline-block"
              initial={{ opacity: 0, scale: 0, rotateZ: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateZ: 0 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotateZ: 5 }}
            >
              collaborate
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Have a project in mind or want to discuss opportunities?
            I'd love to hear from you. Let's create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="glass-card space-y-6"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
            >
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.label 
                    htmlFor={field.id} 
                    className="block text-sm font-medium mb-2"
                    animate={{ x: focusedField === field.id ? 5 : 0 }}
                  >
                    {field.label}
                  </motion.label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder={field.placeholder}
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <motion.label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  animate={{ x: focusedField === 'message' ? 5 : 0 }}
                >
                  Message
                </motion.label>
                <motion.textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell me about your project..."
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Send className="w-4 h-4 ml-2" />
                      </motion.span>
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="flex flex-col justify-center"
          >
            <motion.div 
              className="space-y-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03, 
                    x: 10,
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 glass-card group hover:border-primary/30 transition-all"
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {item.label}
                    </motion.div>
                    <motion.div 
                      className="font-medium group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item.value}
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -15px rgba(var(--primary), 0.3)"
              }}
              className="glass-card border-glow relative overflow-hidden"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-50"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </motion.div>
                  <span className="font-semibold">Available for new projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  I'm currently accepting new clients and exciting project opportunities.
                  Let's discuss how I can help bring your vision to life.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};