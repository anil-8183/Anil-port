
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-white to-gray-100">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Anil B A</h1>
        <h2 className="text-2xl text-gray-700 mb-6">Software Developer</h2>
        <p className="max-w-xl text-gray-600 mb-8">
          A passionate developer focused on building scalable, efficient software solutions with a flair for debugging and system optimization.
        </p>
        <div className="flex gap-4">
          <a href="mailto:anilgowdaani0804@gmail.com">
            <Mail className="w-6 h-6 text-gray-600 hover:text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/anil-b-a-4b60a8203" target="_blank">
            <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600" />
          </a>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a recent graduate in Computer Science and Engineering with hands-on experience in software testing, automation, and debugging. I interned at Nokia Solutions and Networks, where I worked on 5G and VoIP testing using Python and tools like OpenStack and VMware. I love building clean and efficient systems, and I’m always learning new ways to improve my craft.
        </p>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Smart Blind Stick</h3>
            <p className="text-gray-600 mb-2">An assistive device for visually impaired individuals, using ultrasonic sensors and vibration feedback for obstacle detection.</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Developed in C with embedded sensors</li>
              <li>Provides real-time obstacle alerts</li>
            </ul>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Kids Learning App</h3>
            <p className="text-gray-600 mb-2">An interactive mobile app for kids to learn alphabets, numbers, and basic concepts using animations and audio cues.</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Built using Java and XML for Android</li>
              <li>Features quizzes, audio feedback, and engaging design</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Blog</h2>
        <p className="text-gray-600">Coming soon: articles, tutorials, and project insights written by me.</p>
      </section>

      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-700 mb-6">Feel free to reach out for opportunities, collaborations, or just to connect!</p>
        <a
          href="mailto:anilgowdaani0804@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Anil B A. All rights reserved.
      </footer>
    </div>
  );
}
