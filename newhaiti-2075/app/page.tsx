export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="bg-gradient-to-b from-blue-100 to-white py-24 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Nouvo Ayiti 2075</h1>
        <p className="text-lg max-w-2xl mx-auto">
          A bold vision to rebuild dignity, restore hope, and empower a new generation of Haitian leadership.
        </p>
        <div className="mt-8">
          <a href="#mission" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Join the Movement
          </a>
        </div>
      </section>

      <section id="mission" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          New Haiti 2075 is a grassroots initiative focused on civic renewal, education, environmental justice, and sustainable development.
          We believe in empowering local communities to lead the change they want to see.
        </p>
      </section>

      <section className="bg-gray-100 py-12 px-4 text-center">
        <h3 className="text-2xl font-bold mb-2">“Retabli Dinite. Rebati Lespwa.”</h3>
        <p className="mb-6">Together, we can transform despair into dignity and build a Haiti that thrives.</p>
        <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          Get Involved
        </a>
      </section>

      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <p>&copy; 2025 New Haiti Team. All rights reserved.</p>
      </footer>
    </main>
  );
}
