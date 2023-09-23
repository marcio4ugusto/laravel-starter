import AuthenticatedLayout from '@/layouts/AuthenticatedLayout'
import { User } from '@/types'
import React from 'react'

interface PropsControPanel {
  auth: {
    user: User
  }
  children: React.ReactNode
}

export default function ControPanel({ auth }: PropsControPanel) {
  return (
    <AuthenticatedLayout auth={auth}>
      <h3 className="w-full mt-32 text-center text-2xl font-medium">
        Contro Panel content here!
      </h3>
    </AuthenticatedLayout>
  )
}
