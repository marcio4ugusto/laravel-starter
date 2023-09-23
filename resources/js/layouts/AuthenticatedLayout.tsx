import Logo from '@/components/Logo'
import { User } from '@/types'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

interface PropsAuthenticatedLayout {
  auth: {
    user: User
  }
  children: React.ReactNode
}

export default function AuthenticatedLayout({
  auth,
  children,
}: PropsAuthenticatedLayout) {
  return (
    <>
      <Head title="Control Panel" />
      <header className="w-full">
        <nav className="flex items-center justify-between w-full px-6 py-3">
          <div className="w-20 h-auto">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <ul>
            <li className="flex flex-col">
              <div>
                {auth?.user ? (
                  <p className="text-slate-600">{auth.user.name}</p>
                ) : (
                  <p className="text-slate-600">Login to see your data</p>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </>
  )
}
