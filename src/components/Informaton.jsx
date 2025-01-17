import React from 'react'
import { useState } from 'react'
import Translation from './Translation'
import Transcription from './Transcription'

const Informaton = () => {
  const [tab, setTab] = useState('translation');

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
            Your&nbsp;
            <span className='
                text-blue-950 hover:text-white
                transition duration-800 ease-in-out
            '>
                Transcription
            </span>
        </h1>
        <div className='
          bg-white mt-4 rounded-full font-semibold shadow-black
          flex flex-row text-[18px] font-mono shadow-custom-1
        '>
          <button className={`
            w-full px-5 py-2 rounded-l-full
            transition duration-1000 ease-in-out 
            ${tab === 'translation' ? 
              'bg-blue-950 text-white' :
               'text-blue-950 bg-white '
              }
          `} onClick={() => setTab('translation')}>
            Translation
          </button>
          <button className={`
            w-full px-5 py-2 rounded-r-full
            transition duration-1000 ease-in-out 
            ${tab === 'transcription' ? 
              'bg-blue-950 text-white' :
               'text-blue-950 bg-white '
              }
          `} onClick={() => setTab('transcription')}>
            Transcription
          </button>
        </div>
        <div>
          { tab === 'transcription' ? 
            <Transcription/> :
            <Translation/>       
          }
        </div>
    </main>
  )
}

export default Informaton