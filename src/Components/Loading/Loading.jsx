import React from 'react'

const Loading = () => {
  return (
    <div className="grid justify-items-center place-items-center h-screen">
      <div className="w-20 h-20 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
    </div>
  )
}

export default Loading
