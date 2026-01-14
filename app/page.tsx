export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to my portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Crafting beautiful digital experiences
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Section 2: About / Services */}
      <section className="h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What I do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating beautiful, user-centered designs that solve real problems
              </p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building fast, scalable, and maintainable web applications
              </p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Planning solutions that align with your business goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: CTA / Portfolio Preview */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800">
        <div className="container text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's create something amazing
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-slate-100 transition-colors"
          >
            Start a project
          </a>
        </div>
      </section>
    </div>
  );
}
