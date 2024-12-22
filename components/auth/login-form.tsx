"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function LoginForm() {
  const [activeTab, setActiveTab] = useState<'saas' | 'self-hosted'>('saas')

  return (
    <Card className="w-full border-0 shadow-none">
      <CardContent className="p-0 space-y-6">
        <div className="flex gap-2">
          <Button 
            variant={activeTab === 'saas' ? 'default' : 'ghost'}
            className={`flex-1 h-10 ${
              activeTab === 'saas' 
                ? 'bg-[#0066FF] text-white hover:bg-[#0066FF]/90' 
                : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('saas')}
          >
            SAAS
          </Button>
          <Button 
            variant={activeTab === 'self-hosted' ? 'default' : 'ghost'}
            className={`flex-1 h-10 ${
              activeTab === 'self-hosted' 
                ? 'bg-[#0066FF] text-white hover:bg-[#0066FF]/90' 
                : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('self-hosted')}
          >
            Self Hosted
          </Button>
        </div>

        <div className="space-y-3">
          {activeTab === 'saas' ? (
            <>
              <Button 
                variant="outline" 
                className="w-full h-11 font-normal justify-start px-4 hover:bg-gray-50"
              >
                <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Sign in with Github
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-11 font-normal justify-start px-4 hover:bg-gray-50"
              >
                <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#2684FF" d="M2.814 18.279L12 23.098l9.186-4.819-1.717-2.097L12 19.914l-7.469-3.732-1.717 2.097zM12 4.082L2.814 8.9l1.717 2.097L12 7.266l7.469 3.732 1.717-2.097L12 4.082z"/>
                  <path fill="#2684FF" d="M21.469 11.182L12 15.914l-9.469-4.732 1.717-2.097L12 12.817l7.469-3.732 2 2.097z"/>
                </svg>
                Sign in with Bitbucket
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-11 font-normal justify-start px-4 hover:bg-gray-50"
              >
                <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#0078D4" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z"/>
                </svg>
                Sign in with Azure Devops
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-11 font-normal justify-start px-4 hover:bg-gray-50"
              >
                <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#FC6D26" d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.452.045 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.624-8.443a.92.92 0 0 0 .331-1.024"/>
                </svg>
                Sign in with GitLab
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                className="w-full h-11 font-normal justify-start px-4 hover:bg-gray-50"
              >
                <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#FC6D26" d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.386 9.452.045 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.624-8.443a.92.92 0 0 0 .331-1.024"/>
                </svg>
                Sign in with Self Hosted GitLab
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-11 font-normal justify-start px-4 hover:bg-gray-50"
              >
                <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                Sign in with SSO
              </Button>
            </>
          )}
        </div>

        <div className="text-center text-sm">
          By signing up you agree to the{" "}
          <Link href="/privacy" className="text-[#111827] hover:underline">
            Privacy Policy
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

