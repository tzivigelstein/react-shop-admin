import { useEffect, useState } from 'react'

interface Props {
  alert: {
    name: string
    message: string
  }
}

export default function Alert({ alert }: Props) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 py-3 mx-10 bg-red-500 text-white shadow-md overflow-hidden translate-y-full"
      role="alert"
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <span className="font-bold">{alert.name}</span>
          <span className="ml-2">{alert.message}</span>
        </div>
      </div>
    </div>
  )
}
