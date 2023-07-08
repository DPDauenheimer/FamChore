import MainLayout from '../layout/mainLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Welcome() {
  return (
    <MainLayout key="{2}">
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello, welcome to your first Inertia app!</p>
    </MainLayout>
  )
}