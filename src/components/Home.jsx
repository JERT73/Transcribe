import React from 'react'

const Home = (props) => {
  const { setAudioFile, setAudioRec } = props

  return (
    <main className='
        bg-blue-400 mt-4 flex flex-1
        rounded-3xl justify-center flex-col items-center
        shadow-custom-2 shadow-slate-950
    '>
        <h1 className='
            text-white font-sans text-[30px]
            sm:text-[40px] md:text-[50px] lg:text-[60px]
            hover:text-blue-800 font-bold
            transition duration-800 ease-in-out
        '>
          Trans
          <span className='
            text-blue-800 hover:text-white
            transition duration-800 ease-in-out
          '>
            Lingo
          </span>
        </h1>
        <p className='
            text-[15px] font-mono text-white
            justify-center flex flex-row items-center
            sm:text-[20px]
        '>
            <span className='
                text-[25px] font-bold text-blue-950
            '>R</span>
            ecord &rarr;
            <span className='
                text-[25px] font-bold text-blue-950
            '>&nbsp;T</span>
            ranscribe &rarr;
            <span className='
                text-[25px] font-bold text-blue-950
            '>&nbsp;T</span>
            ranslate
        </p>
        <button className='
            flex flex-row items-center justify-between
            w-[200px] bg-white px-4 py-2 rounded-2xl
            hover:shadow-slate-950
            transition duration-800 ease-in-out
            mt-3 text-blue-950 hover:shadow-custom-1
        '>
            <p>Record</p>
            <i className="fa-solid fa-microphone"></i>
        </button>
        <p className='
          mt-2 font-mono text-[17px]
          text-white
        '>
          Or&nbsp;
          <label className='
            text-blue-950 cursor-pointer
          '>
            upload&nbsp;
            <input type='file' accept='.mp3,.wave' className='
              hidden cursor-pointer
            ' onChange = {(e) => {
                const tempFile = e.target.files[0]
                setAudioFile(tempFile)            
              }}/>
          </label>
          a mp3 file
        </p>
        <p className='
          text-slate-800 font-sans mt-2
          italic text-[11px] sm:text-[13px]
        '>
          Break language barriers effortlessly 
          with our instant translation tool!
        </p>
    </main>
  )
}

export default Home