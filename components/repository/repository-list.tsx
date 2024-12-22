"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Repository } from "@/types/repository"
import { RepositoryItem } from "./repository-item"
import { RefreshCw, Plus } from 'lucide-react'

interface RepositoryListProps {
  repositories: Repository[]
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold mb-1">Repositories</h1>
          <p className="text-sm text-muted-foreground">
            {repositories.length} total repositories
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-md border border-border shrink-0"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Refresh All</span>
          </Button>
          <Button 
            className="bg-[#0066FF] hover:bg-[#0066FF]/90 text-white rounded-md px-4 py-2 h-9 shrink-0"
          >
            <Plus className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Add Repository</span>
            <span className="sm:hidden">Add</span>
          </Button>
        </div>
      </div>
      <div className="relative">
        <Input
          placeholder="Search Repositories"
          className="pl-8 bg-background w-full"
        />
        <svg
          className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <div className="space-y-2">
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </div>
    </div>
  )
}

