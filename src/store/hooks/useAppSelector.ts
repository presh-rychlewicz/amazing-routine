import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'schemas'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
