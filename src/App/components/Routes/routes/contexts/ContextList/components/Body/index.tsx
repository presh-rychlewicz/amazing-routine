import { ElementList } from 'components'

const Body = () => (
  <ElementList
    elements={[]}
    emptyStateMessage="No contexts yet:("
    renderElement={() => null}
  />
)

export default Body
