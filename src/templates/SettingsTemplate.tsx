import { FormControl, FormHelperText, FormLabel, Stack, Switch } from '@mui/joy'
import { ElementList } from 'components'
import { GetSettingPropsReturn } from 'hooks/useSettings/getProps'
import { FC } from 'react'

type Props = {
  name?: string
  settings: Array<GetSettingPropsReturn>
}

const SettingsTemplate: FC<Props> = ({ name, settings }) => (
  <ElementList
    key={name}
    title={name}
    elements={settings}
    renderElement={(s) => (
      <FormControl
        error={!!s.errorMessage}
        key={s.key}
        orientation="horizontal"
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Stack>
          <FormLabel>{s.label}</FormLabel>

          {s.errorMessage && (
            <FormHelperText sx={{ mt: 0 }}>{s.errorMessage}</FormHelperText>
          )}
        </Stack>

        <Switch
          disabled={s.isDisabled}
          checked={s.isEnabled}
          onChange={s.toggle}
          color={s.isEnabled ? 'success' : 'neutral'}
          variant={s.isEnabled ? 'solid' : 'outlined'}
          endDecorator={s.isEnabled ? 'On' : 'Off'}
          slotProps={{ endDecorator: { sx: { minWidth: 24 } } }}
        />
      </FormControl>
    )}
  />
)

export default SettingsTemplate
