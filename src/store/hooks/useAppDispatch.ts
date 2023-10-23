import { useDispatch } from 'react-redux'
import { AppDispatch } from 'schemas'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
