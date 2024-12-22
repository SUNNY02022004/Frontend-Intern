"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

interface Organization {
  id: string
  name: string
  slug: string
}

export function OrganizationSelector() {
  const currentOrg = {
    id: "1",
    name: "UtkarshDhairyaPanwar",
    slug: "utkarshdhairyapanwar"
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="w-full justify-start font-normal h-auto p-4 hover:bg-transparent"
        >
          <div className="flex items-center justify-between w-full">
            <span className="truncate">{currentOrg.name}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[200px]">
        <DropdownMenuItem>
          Switch Organization
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

