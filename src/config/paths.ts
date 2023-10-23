/* eslint-disable sort-keys */
import { SingleRoutine } from 'schemas'

const paths = {
  contexts: {
    core: 'contexts' as const,
    children: {
      index: {
        relative: '',
        absolute: 'contexts/',
      },
    },
  },
  dashboard: {
    core: 'dashboard' as const,
    children: {
      index: {
        relative: '',
        absolute: 'dashboard/',
      },
    },
  },
  pilot: {
    core: 'pilot' as const,
    children: {
      index: {
        relative: '',
        absolute: 'pilot/',
      },
      summary: {
        relative: 'summary',
        absolute: 'pilot/summary',
      },
    },
  },
  routines: {
    core: 'routines' as const,
    children: {
      index: {
        relative: '',
        absolute: 'routines/',
      },
      add: {
        relative: 'add',
        absolute: 'routines/add',
      },
      details: {
        relative: ':routineId',
        absolute: (routineId: SingleRoutine['id']) => `routines/${routineId}`,
      },
      edit: {
        relative: 'edit',
        absolute: 'routines/edit',
      },
    },
  },
  tasks: {
    core: 'tasks' as const,
    children: {
      index: {
        relative: '',
        absolute: 'tasks/',
      },
      add: {
        relative: 'add',
        absolute: 'tasks/add',
      },
    },
  },
}

export default paths
