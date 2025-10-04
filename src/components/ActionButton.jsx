import React from 'react'
import { ArrowRight } from 'lucide-react';

const ActionButton = ({buttonText}) => {
  return (
        <button className="flex items-center justify-center rounded-full border-2 bg-gradient-to-r from-pink-200 via-pink-100border-[var(--color-primary-light)] bg-[var(--color-primary-dark)] px-7 py-3 text-4xl text-white transition duration-300 hover:border-pink-400 hover:bg-white hover:text-pink-400 ">
                    {buttonText}
                    {
                      <ArrowRight className="ml-3 h-6 w-6" />
                    }
                  </button>
  )
}

export default ActionButton