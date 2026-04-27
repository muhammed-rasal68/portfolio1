import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import logo from '@/assets/logo.webp';

const socialLinks = [
  { icon: Github, href: 'https://github.com/muhammed-rasal68', label: 'GitHub' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="Muhammed Rasal logo" className="h-8 w-auto" />
          </motion.a>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {year} Muhammed Rasal
          </p>
        </div>
      </div>
    </footer>
  );
};
