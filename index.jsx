import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Sparkles } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Custom websites tailored for business, e-commerce, and portfolios. Built using HTML, CSS, JavaScript, or React.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Android app development with modern UI/UX. Includes APK packaging and onboarding integration.",
    icon: "📱",
  },
  {
    title: "Automated Trading Bots",
    description:
      "Forex & synthetic index trading bots (e.g., FIX 75, XAUUSD, NAS100) using SMC & ITC strategies.",
    icon: "🤖",
  },
  {
    title: "Cybersecurity Tools",
    description:
      "Custom scripts and solutions to secure your platforms, including automated backups and encrypted data management.",
    icon: "🛡️",
  },
  {
    title: "Market Widgets Integration",
    description:
      "Display real-time stock and trading data directly on your site. Supports TradingView & custom APIs.",
    icon: "📊",
  },
  {
    title: "Tech Consulting",
    description:
      "Professional advice on improving your digital strategy, scaling tech startups, and building automation tools.",
    icon: "💼",
  },
];

const quotes = [
  "Success is not final; failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
];

export default function TTDevsLanding() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-950 to-gray-900 text-white min-h-screen p-6 font-sans">
      <header className="text-center py-12">
        <div className="flex justify-center mb-6">
          <img
            src="/TT_Devs_And_Solutions.jpg"
            alt="TT Devs Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          TT Devs & Tech Solutions
        </h1>
        <p className="text-xl italic text-gray-300">
          "Turning Ideas into Powerful Digital Realities"
        </p>
        <p className="text-md text-cyan-400 mt-4">{quotes[quoteIndex]}</p>
      </header>

      <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-4 md:px-10">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="bg-gray-800 text-white shadow-lg hover:shadow-cyan-500/40 transition-all border border-gray-700 rounded-2xl"
          >
            <CardContent className="p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center mt-12">
        <Button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full text-lg">
          <Sparkles className="mr-2" /> Request a Quote
        </Button>
        <p className="text-sm text-gray-500 mt-4">
          Or contact us via WhatsApp: <span className="text-cyan-400">060 3583 457</span>
        </p>
      </section>
    </main>
  );
}
