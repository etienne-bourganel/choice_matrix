import React from "react"

function Title() {
  const handleClick = () => {
    window.open("https://en.wikipedia.org/wiki/Decision_matrix")
  }
  return (
    <div
      onClick={handleClick}
      className='
      bg-gray-200
      border-2
      border-yellow-400
      cursor-pointer
      flex
      flex-col
      h-30
      hover:bg-purple-200
      hover:text-green-400
      items-center
      justify-center
      m-2
      mx-auto
      p-8
      rounded-md
      text-4xl
      text-gray-800
      w-9/12 '
    >
      <div className='my-4'>Welcome to the Decision Matrix App!</div>
      <div className='my-4'>
        {" "}
        🚧 <span className='italic'>Under Construction!</span> 🚧{" "}
      </div>
    </div>
  )
}

export default Title
