import { useStoreState } from 'hooks'

const useTTS = () => {
  const storeState = useStoreState()
  const isTtsOn = !!storeState.getSettingsById('ENABLE_TTS')?.value
  const synth = window.speechSynthesis

  return {
    speak: async (prompt: string, force = false) => {
      if (!force && !isTtsOn) {
        return
      }

      const textUtter = new SpeechSynthesisUtterance(prompt)
      textUtter.rate = 0.8

      synth.speak(textUtter)
      await new Promise((res) => {
        textUtter.onend = () => {
          res(undefined)
        }
      })
    },
  }
}

export default useTTS
