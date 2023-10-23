import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import SortIcon from '@mui/icons-material/Sort'
import { CommonElementProps } from 'components'
import { useState } from 'react'

// TODO: replace params with parm object
const useListControls = (
  disableSorting?: boolean,
  disableFiltering?: boolean,
  disableOptions?: boolean
) => {
  const [shouldShowFilters, setShouldShowFilters] = useState(false)
  const [shouldShowSorting, setShouldShowSorting] = useState(false)
  const [shouldShowOptions, setShouldShowOptions] = useState(false)

  const topRight: Array<CommonElementProps> = [
    {
      disabled: disableSorting,
      icon: <SortIcon />,
      onClick: () => setShouldShowSorting((prev) => !prev),
      type: 'ICON_BUTTON',
      variant: shouldShowSorting ? 'solid' : 'plain',
    },
    {
      disabled: disableFiltering,
      icon: <FilterAltIcon />,
      onClick: () => setShouldShowFilters((prev) => !prev),
      type: 'ICON_BUTTON',
      variant: shouldShowFilters ? 'solid' : 'plain',
    },
    {
      disabled: disableOptions,
      icon: <SettingsIcon />,
      onClick: () => setShouldShowOptions((prev) => !prev),
      type: 'ICON_BUTTON',
      variant: shouldShowOptions ? 'solid' : 'plain',
    },
  ]

  return {
    shouldShowFilters,
    shouldShowSorting,
    toggleFilters: () => setShouldShowFilters((prev) => !prev),
    topRight,
  }
}

export default useListControls
