import React from 'react'

const Transcribing = (props) => {
    const { downloading } = props

  return (
    <main className='
        bg-blue-400 mt-4 flex flex-1
        rounded-3xl justify-center flex-col items-center
        shadow-custom-2 shadow-slate-950
    '>
        <div className='
            flex flex-col items-center justify-center

        '>
            <h1 className='
                font-sans text-[35px]
                sm:text-[40px] md:text-[50px] lg:text-[60px]
                text-blue-950 font-bold
                transition duration-800 ease-in-out
            '>
                <span>
                    Transcribing
                </span>
            </h1>
            <p className='
                font-sans text-[15px]
                sm:text-[20px] md:text-[25px] lg:text-[30px]
                text-white
                transition duration-800 ease-in-out
            '>
                { !downloading ? 
                    'Warming up cyclinders' :
                    'Core cylinders engaged'
                }
            </p>
        </div>
        <div className='
            flex flex-row w-full mx-auto mt-4
            justify-center items-center gap-2
            max-w-[400px]
        '>
            {[0, 1, 2].map(val => {
                return (
                    <div key={val} className={
                        `h-8 w-full bg-blue-950 loading line-animation-${val}`
                    }>
                    </div>
                )
            })}
        </div>
    </main>
  )
}

export default Transcribing