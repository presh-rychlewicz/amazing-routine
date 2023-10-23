import {
  NavigateOptions,
  useNavigate as useRouterNavigate,
} from 'react-router-dom'

const useNavigate = () => {
  const navigate = useRouterNavigate()

  return (path: string, replace = true, state?: unknown) => {
    const options: NavigateOptions = {
      replace,
      state,
    }

    navigate((replace ? '/' : '') + path, options)
  }
}

export default useNavigate
