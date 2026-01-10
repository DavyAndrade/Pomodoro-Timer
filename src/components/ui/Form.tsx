import React from 'react'

type FormProps = {
    children?: React.ReactNode;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}
