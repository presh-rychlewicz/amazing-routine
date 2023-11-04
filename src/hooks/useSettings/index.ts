import { useTTS, useStoreDispatch } from 'hooks'
import { SingleSettingCategoryEnum } from 'schemas'
import useStoreState from '../useStoreState'
import getProps from './getProps'

type UseSettingsProps = {
  categories: Array<SingleSettingCategoryEnum>
}

const useSettings = (props?: UseSettingsProps) => {
  const storeState = useStoreState()
  const storeDispatch = useStoreDispatch()
  const { speak } = useTTS()

  const settingsWithProps = storeState.settings.map((s) =>
    getProps(s, (id) => {
      storeDispatch.settings.toggle({ id })
      const currentState = storeState.getSettingsById(id)

      // EASTER EGG
      if (id === 'ENABLE_TTS') {
        const isOn = !currentState?.value
        const prompt = isOn ? 'Thank you for having me back' : 'Bye bye'
        speak(prompt, true)
      }
      //
    })
  )

  if (props?.categories && props.categories.length) {
    return settingsWithProps.filter((s) =>
      props.categories.includes(s.category)
    )
  }

  return settingsWithProps
}

export default useSettings
export type { UseSettingsProps }
