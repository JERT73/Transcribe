import { useState } from 'react'
import Header from './components/header'
import Home from './components/Home'
import FileDisplay from './components/FileDisplay'

function App() {
  const [audioFile, setAudioFile] = useState(null)
  const [audioRec, setAudioRec] = useState(null)

  const isAudioAvailable = audioFile || audioRec

  function handleAudioReset () {
    setAudioFile(null)
    setAudioRec(null)
  }

  return (
    <div className='
      flex flex-col p-4 mx-auto w-full
      bg-white
    '>
      <section className='min-h-screen flex flex-col'>
        <Header/>
        {
          isAudioAvailable ? 
          (
            <FileDisplay
              handleAudioReset={handleAudioReset}
              audioFile={audioFile}
              audioRec={audioRec}
            />
          ):
          (
            <Home 
              setAudioFile={setAudioFile}
              setAudioRec={setAudioRec}
            />
          )
        }
      </section>
    </div>
  )
}

export default App
