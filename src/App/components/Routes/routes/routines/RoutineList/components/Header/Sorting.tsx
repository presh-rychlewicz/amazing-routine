import { Stack } from '@mui/joy'
import { HeaderGeneric } from 'components'

const Sorting = () => (
  <Stack component="aside">
    <HeaderGeneric
      topLeft={{
        content: 'Sorting',
        level: 'title-md',
        type: 'TEXT',
      }}
    />
    TODO: by A-Z, by order, manually, creation date
  </Stack>
)

export default Sorting
