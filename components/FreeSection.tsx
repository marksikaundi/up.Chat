import { ArrowRight } from "lucide-react"

export default function FreeSection() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-blue-100 rounded-3xl px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full mb-8">
          <div className="bg-slate-700 text-white p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01" />
              <path d="M17 7h.01" />
              <path d="M7 17h.01" />
              <path d="M17 17h.01" />
            </svg>
          </div>
          <span className="text-sm font-medium text-slate-800">Automate with up.Chat</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">Start for free today.</h1>

        <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto">
            Get started with up.Chat for free and enjoy 400 free credits and 400 free tasks. No credit card
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
            </div>
            <span className="text-slate-700 font-medium">400 free credits</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-700"
              >
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M12 8v-2" />
                <path d="M12 18v-2" />
                <path d="M8 12H6" />
                <path d="M18 12h-2" />
              </svg>
            </div>
            <span className="text-slate-700 font-medium">400 free tasks</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors">
            Get in touch
          </button>
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
            Try for free
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

