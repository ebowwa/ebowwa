export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            ebowwa
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Building the future, one line of code at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="https://github.com/ebowwa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/ebowwa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
        
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-400">
              Exploring cutting-edge technologies and pushing boundaries.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Development</h3>
            <p className="text-gray-400">
              Creating scalable solutions with modern frameworks and tools.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Open Source</h3>
            <p className="text-gray-400">
              Contributing to the community and building in public.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}