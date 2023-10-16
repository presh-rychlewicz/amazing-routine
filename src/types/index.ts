const routes = {
  routines: {
    core: 'routines' as const,
    children: {
      index: {
        relative: '' as const,
        absolute: 'routines/' as const,
      },
      add: {
        relative: 'add' as const,
        absolute: 'routines/add' as const,
      },
    },
  },
  tasks: {
    core: 'tasks' as const,
    children: {
      index: {
        relative: '' as const,
        absolute: 'tasks/' as const,
      },
      add: {
        relative: 'add' as const,
        absolute: 'tasks/add' as const,
      },
    },
  },
}

type View = keyof typeof routes

type Field<ValuesT extends Record<string, any>> = {
  key: keyof ValuesT
  type: 'text' | 'number' | 'date' | 'time'
  required?: true
}
export { routes }
export type { Field, View }
