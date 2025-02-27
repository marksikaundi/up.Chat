import AgentPulse from "@/components/AgentPulse";

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Hero section */}
      <section>
        <div>
          <div>
            <AgentPulse size="large" color="blue" />
            <h1 className=" text-4xl md:text-6xl font-bold text-gray-900 mb-6   ">
              Meet your AI personal{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent  ">
                assistant
              </span>
              Agent Pulse
            </h1>
          </div>
        </div>
      </section>

      {/* Features section */}

      {/* How it works section */}

      {/* Footer section */}
    </div>
  );
}
