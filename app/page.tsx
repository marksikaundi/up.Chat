import AgentPulse from "@/components/AgentPulse";
import { Book, Brain, ImageIcon, Sparkles, TicketsPlane, Video } from "lucide-react";

const features = [
  {
    title: "AI Analysis",
    description:
      "Get detailed analysis of your video content including sentiment analysis, keyword extraction, and more.",
    icon: Brain,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Smart Transcription ",
    description:
      "Automatically transcribe your video content with high accuracy. Download in multiple formats.",
    icon: Book,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Thumbnail Generation",
    description:
      "Generate beautiful thumbnails for your video content. Customize with text, colors, and more.",
    icon: ImageIcon,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Create video clips",
    description:
      "Create video clips from your content based on keywords, sentiment, and more. Share clips on social media.",
    icon: Video,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Title Generation",
    description:
      "Generate catchy titles for your video content. Get suggestions based on keywords, sentiment, and more.",
    icon: TicketsPlane,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Discuss with your AI Agent",
    description:
      "Discuss your video content with your AI agent. Get suggestions, feedback, and more.",
    icon: Sparkles,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Hero section */}
      <section className=" py-20 bg-gradient-to-b from-white to-gray-50 ">
        <div className=" container mx-auto px-4 ">
          <div className=" flex flex-col items-center gap-10 text-center mb-12 ">
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
            {/* Youtube Video Form */}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white max-w-6xl">
        <div className=" container mx-auto px-4  ">
          <h2 className=" text-3xl font-bold text-center mb-12 ">
            Powerfull Features for Content Creators
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 " >
          {/* Feature cards */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className=" bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 "
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg} `}
                >
                  <Icon className={` w-6 h-6 ${feature.iconColor} `} />
                </div>
                <h3 className="text-xl font-semibold mb-2 ">{feature.title}</h3>

                <p className="text-gray-600" >{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it works section */}

      {/* Footer section */}
    </div>
  );
}
