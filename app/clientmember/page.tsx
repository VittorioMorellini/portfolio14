"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

export default function ClientMember() {
  const {data: session} = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/clientmember')
    }
  });

  return (
    <div><h1>Member Client Session</h1></div>
  )
}
