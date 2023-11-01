import { OptionsGenericElement } from 'components'
import { paths } from 'config'
import { GetOptionsBase } from 'hooks/useBigCard'
import { SingleContext } from 'schemas'

const getOptionsBase: GetOptionsBase<SingleContext> = (
  context,
  navigate
): Array<OptionsGenericElement> => {
  const optionsBase: Array<OptionsGenericElement> = [
    // TODO: move to template when edit added to all elements
    {
      children: 'Edit',
      onClick: () =>
        navigate(paths.contexts.children.edit.absolute, undefined, {
          contextId: context.id,
        }),
    },
  ]

  return optionsBase
}

export default getOptionsBase
