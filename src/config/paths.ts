/* eslint-disable sort-keys */
import { Id } from 'schemas'

const paths = {
  contexts: {
    core: 'contexts' as const,
    children: {
      index: {
        relative: '',
        absolute: 'contexts/',
      },
      add: {
        relative: 'add',
        absolute: 'contexts/add',
      },
      edit: {
        relative: 'edit',
        absolute: 'contexts/edit',
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
        absolute: (routineId: Id) => `routines/${routineId}`,
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
      edit: {
        relative: 'edit',
        absolute: 'tasks/edit',
      },
    },
  },
  settings: {
    core: 'settings' as const,
    children: {
      index: {
        relative: '',
        absolute: 'settings/',
      },
    },
  },
  statistics: {
    core: 'statistics' as const,
    children: {
      index: {
        relative: '',
        absolute: 'statistics/',
      },
    },
  },
}

export default paths
