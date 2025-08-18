'use client';

import { motion } from 'framer-motion';
import { Code2, Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '@/lib/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={fadeUp}
        className="z-10 container mx-auto px-4 pt-32 pb-20 flex-grow flex flex-col justify-center"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            variants={scaleIn}
            transition={{ delay: 0.2, type: 'spring' }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Code2 className="w-10 h-10 text-primary animate-pulse" />
            </div>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            ebowwa.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            apps, websites, servers, iot (todo: cad, pcb)
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90"
              asChild
            >
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm"
              asChild
            >
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      </div>
    </section>
  );
}
