import { Logo } from "@/components/logo"

export function StatsCard() {
  return (
    <div className="relative w-full max-w-[460px]">
      {/* Main Stats Card */}
      <div className="bg-white rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5 mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Logo className="h-6 w-6" />
          <span className="text-[16px] font-semibold text-[#111827]">
            AI to Detect & Autofix Bad Code
          </span>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-[24px] font-bold text-[#111827] mb-1">30+</div>
            <div className="text-[13px] text-[#6B7280] whitespace-nowrap">Language Support</div>
          </div>
          <div className="text-center">
            <div className="text-[24px] font-bold text-[#111827] mb-1">10K+</div>
            <div className="text-[13px] text-[#6B7280]">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-[24px] font-bold text-[#111827] mb-1">100K+</div>
            <div className="text-[13px] text-[#6B7280]">Hours Saved</div>
          </div>
        </div>
      </div>

      {/* Issues Fixed Card */}
      <div className="absolute right-4 -bottom-4">
        <div className="bg-white rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#8B5CF6"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-[20px] font-bold text-[#111827] leading-none mb-1">500K+</div>
              <div className="text-[13px] text-[#6B7280]">Issues Fixed</div>
            </div>
            <div className="ml-4 flex items-center">
              <div className="flex items-center text-[#16A34A] text-[13px] font-medium">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mr-1">
                  <path d="M8 12L8 4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                14%
              </div>
              <span className="text-[13px] text-[#6B7280] ml-2">This week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

