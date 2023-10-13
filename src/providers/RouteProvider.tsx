import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

export enum View {
  'ROUTINES_LIST' = 'ROUTINES_LIST',
  'ADD_ROUTINE' = 'ADD_ROUTINE',
}

export const routeContext = createContext<RouteContext>({
  view: View.ROUTINES_LIST,
  setView: () => undefined,
})

const RouteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [view, setView] = useState<View>(View.ROUTINES_LIST)

  return (
    <routeContext.Provider
      value={{
        view,
        setView,
      }}
    >
      {children}
    </routeContext.Provider>
  )
}

type RouteContext = {
  view: View
  setView: Dispatch<SetStateAction<View>>
}

export const useRouteContext = () => useContext(routeContext)

export default RouteProvider
