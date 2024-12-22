import { LoginForm } from "@/components/auth/login-form"
import { Logo } from "@/components/logo"
import { StatsCard } from "@/components/stats-card"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Section - Statistics and Logo */}
      <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:items-center lg:p-8 relative overflow-hidden">
        <div className="absolute bottom-[-5%] left-[-5%] w-[70%]">
          <Logo className="w-full h-auto text-[#F3F4F6]" />
        </div>
        <div className="relative z-10 w-full max-w-[460px] flex flex-col items-center">
          <StatsCard />
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-[400px] space-y-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Logo className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-semibold text-[#111827]">Welcome to CodeAnt AI</h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

