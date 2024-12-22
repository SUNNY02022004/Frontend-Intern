import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="grid grid-cols-3 gap-8 text-center mb-8">
            <div>
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm text-muted-foreground">Language Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Developers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-sm text-muted-foreground">Hours Saved</div>
            </div>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

