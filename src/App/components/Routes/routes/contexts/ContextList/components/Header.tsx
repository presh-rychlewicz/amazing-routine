import { HeaderGeneric } from 'components'
import { useListControls } from 'hooks'
import { Dispatch, FC, SetStateAction } from 'react'
import { ContextsListFilters } from 'schemas'

type Props = {
  filters: ContextsListFilters
  setFilters: Dispatch<SetStateAction<Props['filters']>>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header: FC<Props> = ({ filters, setFilters }) => {
  const { topRight } = useListControls(true, true, true)

  return (
    <HeaderGeneric
      topLeft={{
        disabled: true,
        label: 'New',
        onClick: () => null,
        type: 'BUTTON',
      }}
      topRight={topRight}
    />
  )
}

export default Header
