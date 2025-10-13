import React from 'react'
import { ArrowRight } from 'lucide-react';

const ActionButton = ({buttonText}) => {
  return (
        <button className="action-button flex items-center justify-center rounded-full border-2 transition duration-300 scale-110">
    {buttonText}
                    
                    {
                      <ArrowRight className="ml-3 h-6 w-6" />
                    }
                  </button>
  )
}

export default ActionButton