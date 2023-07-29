import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs"

import { DashboardFooter } from "@/components/layouts/dashboard/dashboard-footer"
import { DashboardHeader } from "@/components/layouts/dashboard/dashboard-header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await currentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} />
      <div className="container flex-1">
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
      <DashboardFooter />
    </div>
  )
}
