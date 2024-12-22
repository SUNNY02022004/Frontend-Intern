import { formatDistanceToNow } from "date-fns"
import { Repository } from "@/types/repository"
import { Badge } from "@/components/ui/badge"

interface RepositoryItemProps {
  repository: Repository
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between min-h-[72px] py-4 px-4 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border">
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[16px] text-foreground font-medium hover:underline cursor-pointer">
            {repository.name}
          </span>
          <Badge 
            variant={repository.private ? "outline" : "secondary"} 
            className="h-5 text-xs font-normal px-2 rounded"
          >
            {repository.private ? "Private" : "Public"}
          </Badge>
        </div>
        <div className="flex flex-wrap items-center text-[14px] text-muted-foreground gap-2 sm:gap-0">
          <div className="flex items-center">
            <span className={`language-indicator ${repository.language.toLowerCase()}`} />
            <span>{repository.language}</span>
          </div>
          <span className="hidden sm:inline mx-2">•</span>
          <span>{(repository.size / 1024).toFixed(2)} MB</span>
          <span className="hidden sm:inline mx-2">•</span>
          <span>
            Updated {formatDistanceToNow(new Date(repository.updatedAt))} ago
          </span>
        </div>
      </div>
    </div>
  )
}

