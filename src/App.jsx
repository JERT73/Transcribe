import { useEffect, useState } from 'react'
import Header from './components/header'
import Home from './components/Home'
import FileDisplay from './components/FileDisplay'
import Transcribing from './components/Transcribing'
import Informaton from './components/Informaton'
import { toast } from 'react-toastify'

function App() {
  const [audioFile, setAudioFile] = useState(null)
  const [audioRec, setAudioRec] = useState(null)

  const [output, setOutput] = useState(null)
  const [loading, setLoading] = useState(false)

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
          output ? (
            <Informaton/>
          ) : loading ? (
            <Transcribing/>
          ) : isAudioAvailable ? (
            <FileDisplay
              handleAudioReset={handleAudioReset}
              audioFile={audioFile}
              audioRec={audioRec}
            />
          ) : (
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
