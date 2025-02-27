import AgentPulse from "@/components/AgentPulse";

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Hero section */}
      <section  className=" py-20 bg-gradient-to-b from-white to-gray-50 " >
        <div className=" container mx-auto px-4 " >
          <div className=" flex flex-col items-center gap-10 text-center mb-12 " >
            <AgentPulse size="large" color="blue" />
            <h1 className=" text-4xl md:text-6xl font-bold text-gray-900 mb-6   ">
              Meet your AI personal{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent  ">
                Content Agent
              </span>
            </h1>
            <p className=" text-lg md:text-xl text-gray-600 ">
              Transform your video content with AI powered analysis,
              transcription, and more. Get started for free.
            </p>
          </div>
        </div>
      </section>

      {/* Features section */}

      {/* How it works section */}

      {/* Footer section */}
    </div>
  );
}
