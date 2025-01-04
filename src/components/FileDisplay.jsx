import React from 'react'

const FileDisplay = (props) => {
    const { handleAudioReset, audioFile, audioReset } = props

  return (
    <main className='
        bg-blue-400 mt-4 flex flex-1
        rounded-3xl justify-center flex-col items-center
        shadow-custom-2 shadow-slate-950
    '>
        <h1 className='
            text-white font-sans text-[30px]
            sm:text-[40px] md:text-[50px] lg:text-[60px]
            hover:text-blue-950 font-bold
            transition duration-800 ease-in-out
        '>
            Your
            <span className='
                text-blue-950 hover:text-white
                transition duration-800 ease-in-out
            '>
                File
            </span>
        </h1>

        <div className='
            flex flex-row font-mono text-[20px] min-w-[200px]
            text-white
        '>
            <p className='
                font-bold
            '>
                Name:&nbsp;
            </p>
            <p className='
                italic text-blue-950 font-semibold
            '>
                {audioFile.name}
            </p>
        </div>

        <div className='
            flex flex-row justify-between
            gap-20 mt-8
        '>
            <button className='
                text-white text-[18px] bg-blue-950
                px-4 py-1 rounded-2xl font-mono
                transition duration-1000 ease-in-out
                hover:bg-white hover:text-blue-950
                hover:shadow-custom-1 hover:shadow-slate-900
            ' onClick={handleAudioReset}>
                Reset
            </button>
            <button className='
                text-white text-[18px] bg-blue-950
                px-4 py-1 rounded-2xl font-mono
                transition duration-1000 ease-in-out
                hover:bg-white hover:text-blue-950
                hover:shadow-custom-1 hover:shadow-slate-900
                flex items-center gap-3
            '>
                <p>
                    Transcribe
                </p>
                <i class="fa-solid fa-language"></i>
            </button>
        </div>
    </main>
  )
}

export default FileDisplay