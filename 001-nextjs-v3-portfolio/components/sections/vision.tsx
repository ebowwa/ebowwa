'use client';

import { motion } from 'framer-motion';
import { JOURNEY_STAGES } from '@/lib/constants';

export function Vision() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Vision & Mission</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {JOURNEY_STAGES.map((stage) => (
              <div
                key={stage.id}
                className={`p-6 rounded-lg bg-gradient-to-br ${stage.color}`}
              >
                <h3 className="text-xl font-semibold mb-3">{stage.title}</h3>
                <p className="text-muted-foreground">{stage.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}