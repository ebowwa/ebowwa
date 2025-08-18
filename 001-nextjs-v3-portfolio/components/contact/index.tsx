import { ContactForm } from './contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: <Github className="h-6 w-6" />,
    href: 'https://github.com/yourusername',
    label: 'GitHub'
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn'
  },
  {
    icon: <Mail className="h-6 w-6" />,
    href: 'mailto:your.email@example.com',
    label: 'Email'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <ContactForm />
              <div className="mt-8 flex justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}