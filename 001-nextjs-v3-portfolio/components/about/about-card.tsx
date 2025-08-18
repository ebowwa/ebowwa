'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Palette, Rocket } from 'lucide-react';

const interests = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Development',
    description: 'Passionate about creating innovative solutions through code'
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Design',
    description: 'Crafting beautiful and intuitive user experiences'
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Innovation',
    description: 'Exploring cutting-edge technologies and pushing boundaries'
  }
];

export function AboutCard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {interests.map((interest, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {interest.icon}
              {interest.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{interest.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}