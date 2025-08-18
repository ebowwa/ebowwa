'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, Lightbulb } from 'lucide-react';

const journeySteps = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Innovation',
    description: 'Developing cutting-edge AI solutions for human-centered experiences'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Emotional Intelligence',
    description: 'Creating technology that understands and responds to human emotions'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Future Vision',
    description: 'Shaping the future of digital companionship and interaction'
  }
];

export function Journey() {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="mb-4 text-primary">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}