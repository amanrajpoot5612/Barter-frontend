import React from 'react'
import { ArrowRight } from 'lucide-react';

const ActionButton = ({buttonText}) => {
  return (
        <button className="flex items-center justify-center rounded-full border-2 border-[var(--color-primary-light)] bg-[var(--color-primary-dark)] px-7 py-3 text-4xl text-white transition duration-300 hover:border-[var(--color-primary-dark)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)] ">
                    {buttonText}
                    {
                      <ArrowRight className="ml-3 h-6 w-6" />
                    }
                  </button>
  )
}

export default ActionButton