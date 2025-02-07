import {
  ContainerScroll,
  Header,
} from "@/components/ui/container-scroll-animation";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ToolsContainer from "@/components/home/ToolsContainer";
import "./globals.css";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ToolsContainer />
      <Footer theme="dark" />
    </main>
  );
}
