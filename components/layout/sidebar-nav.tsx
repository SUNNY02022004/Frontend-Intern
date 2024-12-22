"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutGrid, Shield, HelpCircle, Settings, LifeBuoy, LogOut } from 'lucide-react'
import { OrganizationSelector } from "../organization-selector"

const navigation = [
  { name: "Repositories", href: "/", icon: LayoutGrid },
  { name: "AI Code Review", href: "/code-review", icon: Shield },
  { name: "Cloud Security", href: "/security", icon: Shield },
  { name: "How to Use", href: "/help", icon: HelpCircle },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function SidebarNav() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    // Add any logout logic here (clear tokens, etc)
    router.push('/login')
  }

  return (
    <nav className="flex flex-col h-full bg-background">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 px-2">
          <img
            src="/logo.svg"
            alt="CodeAnt AI"
            className="h-6 w-6"
          />
          <span className="font-semibold text-[16px]">CodeAnt AI</span>
        </div>
      </div>
      <OrganizationSelector />
      <div className="flex-1 px-3 py-2">
        <div className="space-y-0.5">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Button
                key={item.name}
                variant="ghost"
                className={`w-full justify-start h-9 px-2 ${
                  isActive ? 'bg-[#0066FF] text-white hover:bg-[#0066FF]/90' : 'hover:bg-secondary text-foreground'
                }`}
                asChild
              >
                <Link href={item.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            )
          })}
        </div>
      </div>
      <div className="mt-auto px-3 py-4 border-t border-border">
        <div className="space-y-0.5">
          <Button
            variant="ghost"
            className="w-full justify-start h-9 px-2 text-[14px] hover:bg-secondary text-foreground"
            asChild
          >
            <Link href="/support">
              <LifeBuoy className="mr-2 h-4 w-4" />
              Support
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start h-9 px-2 text-[14px] hover:bg-secondary text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}

