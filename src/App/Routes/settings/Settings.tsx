import { ElementList, HeaderGeneric, Route } from 'components'
import { useSettings } from 'hooks'
import groupBy from 'lodash.groupby'
import { SettingsTemplate } from 'templates'

const Settings = () => {
  const settingsWithProps = useSettings()
  const settingGroups = Object.entries(
    groupBy(settingsWithProps, 'category')
  ).map(([name, settings]) => ({
    name,
    settings,
  }))

  return (
    <Route>
      <HeaderGeneric
        topLeft={{
          content: 'Settings',
          level: 'title-lg',
          type: 'TEXT',
        }}
      />

      <ElementList
        component="main"
        spacingBetweenElements="medium"
        elements={settingGroups}
        renderElement={(c) => (
          <SettingsTemplate name={c.name} key={c.name} settings={c.settings} />
        )}
      />
    </Route>
  )
}

export default Settings
