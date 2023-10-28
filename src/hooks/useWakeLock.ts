import useStoreState from './useStoreState'

const useWakeLock = () => {
  const storeState = useStoreState()
  const isWakeLockOn = !!storeState.getSettingsById('KEEP_SCREEN_ON')?.value

  // @ts-ignore
  const getLock = async () => await navigator.wakeLock.request('screen')

  return {
    turnOff: async () => {
      if (!isWakeLockOn) {
        return
      }

      const wakeLock = await getLock()
      wakeLock?.release()
    },

    turnOn: async () => {
      if (!isWakeLockOn) {
        return
      }

      try {
        await getLock()
      } catch (err: any) {
        console.log(`${err.name}, ${err.message}`)
      }
    },
  }
}

export default useWakeLock
