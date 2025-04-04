import React from 'react'

const Calendar = () => {
  return (
    <div className="flex justify-center items-center min-h-[600px] w-full">
      <iframe
        src="https://calendly.com/kyakya972003/test?hide_event_type_details=1"
        className="w-full h-[600px] border-none shadow-lg"
      ></iframe>
    </div>
  )
}

export default Calendar