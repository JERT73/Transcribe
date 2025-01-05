import React from 'react'
import { toast } from "react-toastify"
import { useState, useEffect, useRef } from 'react'

const Home = (props) => {
  const { setAudioFile, setAudioRec } = props

  const [audioRecording, setAudioRecording] = useState('innactive')
  const [duration, setDuration] = useState(0)
  const [audioChunks, setAudioChunks] = useState([])

  const mediaType = 'audio/webm'
  const mediaRecorder = useRef(null)

  async function startRecording() {
    let tempStream
    toast.info("Recording: started")

    try {
      const streamData = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      })
      tempStream = streamData
    } catch (err) {
        toast.error(err.message)
        return
    }
    setAudioRecording('active')

    // new media recoded instance
    const media = new MediaRecorder(tempStream, { type: mediaType})
    mediaRecorder.current = media

    mediaRecorder.current.start()
    let localAudioChunks = []

    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') return
      if (event.data.size === 0) return 
      localAudioChunks.push(event.data)
    }

    setAudioChunks(localAudioChunks)
  }

  async function stopRecording() {
    setAudioRecording('innactive')
    toast.info("Recording: stopped")

    mediaRecorder.current.stop()
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, {type: mediaType})
      setAudioRec(audioBlob)
      setAudioChunks([])
      setDuration(0)
    }
  }

  useEffect(() => {
    if (audioRecording === 'innactive') return

    const interval = setInterval(() => {
      setDuration(curr => curr + 1)
    }, 1000)

    return () => clearInterval(interval)
  })

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
          Trans
          <span className='
            text-blue-950 hover:text-white
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
            min-w-[200px] bg-white px-4 py-2 rounded-2xl
            hover:shadow-slate-950
            transition duration-800 ease-in-out
            mt-3 text-blue-950 hover:shadow-custom-1
        ' onClick={() => {
            audioRecording === 'innactive' ?
            startRecording() : stopRecording()
        }}>
            <p className='
              pr-10
            '>
              { 
                audioRecording === 'innactive' ?
                "Record" : "Stop Recording"
              }
            </p>
            <div className='
              flex flex-row items-center gap-2
            '>
              { 
                duration !== 0 && (
                  <p>
                    {duration} s
                  </p>
                )
              }
              <i className={"fa-solid " + (
                audioRecording === 'innactive' ? "fa-microphone " : 
                "fa-circle-xmark text-red-700"
              )}></i>
            </div>
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