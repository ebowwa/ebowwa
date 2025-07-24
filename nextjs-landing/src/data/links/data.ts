// src/data/links/data.ts
import { Link } from '../../data/types';

// Sample links data - replace with your actual links
const links: Link[] = [
  {
    slug: 'project-research-notes',
    title: 'Project Research Notes',
    description: 'My collection of research materials for the data visualization project.',
    type: 'notion',
    date: 'May 5, 2025',
    url: 'https://notion.so/example',
    content: `
      <p>This is a comprehensive collection of research materials I've gathered for my data visualization project. It includes academic papers, design inspiration, and technical implementation details.</p>
      
      <h2>Key Findings</h2>
      <ul>
        <li>Interactive visualizations increase user engagement by 40%</li>
        <li>Color theory plays a crucial role in data comprehension</li>
        <li>Animation should be used sparingly to avoid cognitive overload</li>
      </ul>
      
      <h2>Implementation Notes</h2>
      <p>For this project, I'm using D3.js for the core visualization logic, with React for the UI components. This combination provides both powerful visualization capabilities and a clean, maintainable component structure.</p>
      
      <p>The data pipeline is built with Python, using pandas for data cleaning and preprocessing before it's served to the frontend.</p>
    `,
    tags: ['research', 'data-viz', 'notion'],
    related: ['react-component-ideas', 'future-web-development']
  },
  {
    slug: 'ai-ethics-discussion',
    title: 'AI Ethics Discussion',
    description: 'Interesting chat about the implications of AI in creative fields.',
    type: 'chatgpt',
    date: 'April 28, 2025',
    content: `
      <p>I had a fascinating discussion with ChatGPT about the ethical implications of AI in creative fields. Here are some of the key points we explored:</p>
      
      <h2>Creative Ownership</h2>
      <p>When AI generates content based on human-created works, who owns the output? This question becomes particularly complex when considering that AI models are trained on vast datasets of human creativity.</p>
      
      <h2>Impact on Creative Professions</h2>
      <p>We discussed how AI might transform rather than replace creative professions. For example, AI could handle routine aspects of design work, allowing human designers to focus on higher-level creative direction and conceptual thinking.</p>
      
      <h2>Transparency and Attribution</h2>
      <p>There's a growing need for transparency about when content is AI-generated versus human-created. This extends to proper attribution for the original works that influenced the AI's output.</p>
      
      <p>The conversation highlighted that we're still in the early stages of defining ethical frameworks for AI in creative contexts, and that these conversations need to include diverse perspectives from creators, technologists, and the public.</p>
    `,
    tags: ['ai', 'ethics', 'creativity'],
    related: ['future-web-development']
  },
  {
    slug: 'future-web-development',
    title: 'The Future of Web Development',
    description: 'Great read on upcoming web technologies and trends.',
    type: 'other',
    date: 'April 20, 2025',
    url: 'https://example.com/future-web',
    content: `
      <p>I came across an excellent article discussing the future of web development and wanted to save my thoughts on some of the key trends mentioned:</p>
      
      <h2>WebAssembly Expansion</h2>
      <p>WebAssembly (Wasm) is continuing to gain traction, enabling high-performance applications in the browser. The article predicts that we'll see more complex applications moving to the web, including advanced graphics processing, scientific computing, and even AI model inference.</p>
      
      <h2>Edge Computing Evolution</h2>
      <p>The edge computing paradigm is evolving beyond simple CDN caching. Now we're seeing full application logic running at the edge, closer to users, with frameworks like Cloudflare Workers and Vercel Edge Functions leading the way.</p>
      
      <h2>AI-Assisted Development</h2>
      <p>AI tools are becoming integral to the development workflow, not just for code completion but for debugging, testing, and even architectural suggestions. This is democratizing web development by lowering the technical barrier to entry.</p>
      
      <h2>Sustainability Focus</h2>
      <p>There's a growing awareness of the environmental impact of web applications. The article highlights how developers are starting to optimize for energy efficiency and carbon footprint, not just performance and user experience.</p>
      
      <p>Overall, it seems like we're moving toward a web that's more capable, distributed, and accessible to both developers and users.</p>
    `,
    tags: ['web-dev', 'trends', 'technology'],
    related: ['react-component-ideas', 'project-research-notes']
  },
  {
    slug: 'weekly-planning-template',
    title: 'Weekly Planning Template',
    description: 'My customized weekly planning system that helps me stay organized.',
    type: 'notion',
    date: 'April 15, 2025',
    url: 'https://notion.so/example-planning',
    content: `
      <p>I've developed a weekly planning system in Notion that has significantly improved my productivity and work-life balance. Here's how it's structured:</p>
      
      <h2>Weekly Overview</h2>
      <p>Each week starts with a high-level view of key objectives, important events, and focus areas. This gives me a clear sense of what success looks like for the week.</p>
      
      <h2>Daily Task Blocks</h2>
      <p>Tasks are organized into three categories:</p>
      <ul>
        <li><strong>Deep Work:</strong> Tasks requiring focused attention and creative thinking</li>
        <li><strong>Shallow Work:</strong> Administrative tasks, emails, and quick to-dos</li>
        <li><strong>Personal/Health:</strong> Exercise, meditation, reading, and other personal development activities</li>
      </ul>
      
      <h2>Time Blocking</h2>
      <p>I've found that allocating specific time blocks for different types of work has been game-changing. My most productive deep work happens in the morning, so I protect those hours from meetings and distractions.</p>
      
      <h2>Weekly Review</h2>
      <p>Every Friday afternoon, I conduct a review to assess what went well, what didn't, and what I learned. This reflection helps me continuously refine my planning system.</p>
      
      <p>The template is customizable, but having a consistent structure has helped me maintain focus and reduce decision fatigue about how to organize my time.</p>
    `,
    tags: ['productivity', 'notion', 'planning'],
    related: ['project-research-notes']
  },
  {
    slug: 'react-component-ideas',
    title: 'React Component Ideas',
    description: 'Conversation about custom React component architectures.',
    type: 'chatgpt',
    date: 'April 10, 2025',
    content: `
      <p>I had a productive conversation about React component architecture that generated some interesting ideas for my current project:</p>
      
      <h2>Compound Components Pattern</h2>
      <p>We discussed how compound components can provide a more intuitive API for complex UI elements. For example, instead of passing numerous props to a single Dropdown component, you could use a pattern like:</p>
      
      <pre><code>
&lt;Dropdown&gt;
  &lt;Dropdown.Toggle&gt;Options&lt;/Dropdown.Toggle&gt;
  &lt;Dropdown.Menu&gt;
    &lt;Dropdown.Item&gt;Option 1&lt;/Dropdown.Item&gt;
    &lt;Dropdown.Item&gt;Option 2&lt;/Dropdown.Item&gt;
  &lt;/Dropdown.Menu&gt;
&lt;/Dropdown&gt;
      </code></pre>
      
      <p>This approach gives more flexibility to consumers of the component while maintaining the semantic relationship between the parts.</p>
      
      <h2>State Machines for Complex UI</h2>
      <p>For components with multiple states and transitions (like multi-step forms or interactive tutorials), using a state machine library like XState can make the code more predictable and easier to reason about.</p>
      
      <h2>Performance Optimization Strategies</h2>
      <p>We explored various techniques for optimizing React performance:</p>
      <ul>
        <li>Virtualization for long lists</li>
        <li>Memoization with useMemo and useCallback</li>
        <li>Code splitting at the component level</li>
        <li>Using the React Profiler to identify bottlenecks</li>
      </ul>
      
      <p>I'm planning to implement some of these patterns in my current project to see how they impact both developer experience and application performance.</p>
    `,
    tags: ['react', 'frontend', 'development'],
    related: ['project-research-notes', 'future-web-development']
  }
];

export default links;
