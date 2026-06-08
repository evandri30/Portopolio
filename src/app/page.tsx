import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-white/10 selection:text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Header />
        <AboutMe />
        <Project />
        <Skill />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}