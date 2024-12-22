"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Github, GitlabIcon as GitlabLogo, Box } from 'lucide-react'

export function SignupForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <h1 className="text-2xl font-bold">Create your CodeAnt AI Account</h1>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="saas" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="saas">SAAS</TabsTrigger>
            <TabsTrigger value="self-hosted">Self Hosted</TabsTrigger>
          </TabsList>
          <TabsContent value="saas" className="space-y-4">
            <div className="space-y-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              <Button className="w-full">Create Account</Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  Sign up with GitHub
                </Button>
                <Button variant="outline">
                  <Box className="mr-2 h-4 w-4" />
                  Sign up with BitBucket
                </Button>
                <Button variant="outline">
                  <GitlabLogo className="mr-2 h-4 w-4" />
                  Sign up with Azure DevOps
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="self-hosted" className="space-y-4">
            <div className="grid gap-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="server-url">Server URL</Label>
                <Input id="server-url" type="url" placeholder="https://your-gitlab-server.com" />
              </div>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                Sign up with Self-Hosted GitLab
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-4 text-center text-sm">
          <span className="text-muted-foreground">Already have an account?{" "}</span>
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
        <div className="mt-2 text-center text-sm text-muted-foreground">
          By signing up you agree to the{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

