import { MobileNav } from "@/components/layout/mobile-nav"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { RepositoryList } from "@/components/repository/repository-list"

const repositories = [
  {
    id: 1,
    name: "design-system",
    private: false,
    language: "React",
    size: 7320,
    updatedAt: "2024-01-20T10:00:00Z",
  },
  {
    id: 2,
    name: "codeant-ci-app",
    private: true,
    language: "Javascript",
    size: 5871,
    updatedAt: "2024-01-19T15:30:00Z",
  },
  {
    id: 3,
    name: "analytics-dashboard",
    private: true,
    language: "Python",
    size: 4521,
    updatedAt: "2024-01-16T09:00:00Z",
  },
  {
    id: 4,
    name: "mobile-app",
    private: false,
    language: "Swift",
    size: 3096,
    updatedAt: "2024-01-18T14:20:00Z",
  },
  {
    id: 5,
    name: "e-commerce-platform",
    private: true,
    language: "Java",
    size: 6210,
    updatedAt: "2024-01-15T11:45:00Z",
  },
  {
    id: 6,
    name: "blog-website",
    private: false,
    language: "HTML",
    size: 1876,
    updatedAt: "2024-01-17T16:30:00Z",
  },
  {
    id: 7,
    name: "social-network",
    private: true,
    language: "PHP",
    size: 5432,
    updatedAt: "2024-01-14T08:15:00Z",
  },
]

export default function RepositoriesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden md:flex w-[280px] flex-col fixed inset-y-0 z-50 border-r border-border">
        <SidebarNav />
      </div>
      <div className="flex-1 flex flex-col md:pl-[280px]">
        <header className="h-14 border-b border-border flex items-center justify-between px-4 sticky top-0 bg-background z-40">
          <div className="flex items-center gap-2">
            <MobileNav />
            <span className="font-medium text-[16px] md:hidden">CodeAnt AI</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Add profile menu here if needed */}
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <RepositoryList repositories={repositories} />
        </main>
      </div>
    </div>
  )
}

