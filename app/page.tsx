import Dashboard from '@/components/ui/Dashboard'
import ModeToggle from '@/components/ui/ModeToggle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Dashboard />
    </main>
  )
}
