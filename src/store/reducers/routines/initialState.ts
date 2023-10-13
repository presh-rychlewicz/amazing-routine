import { RoutinesState } from './types'

const initialState: RoutinesState = {
  value: [
    {
      name: 'Routine 1',
      id: 'a9a0b36b-7586-49c6-a6b4-8f0b2495dd20',
      note: '',
      status: 'ACTIVE',
      startDate: {
        day: 1,
        month: 1,
        year: 2001,
      },
    },
    {
      name: 'Routine 2',
      id: '7133d8b4-6d77-403f-8080-b4a21a733e35',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus enim a nisl tempus, non ullamcorper elit sagittis. Cras vitae rutrum risus. Vivamus ut nisi ac erat ultrices blandit ut et odio. Ut maximus bibendum accumsan. Integer blandit justo et magna pulvinar finibus. Vivamus vel dui ornare ex convallis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ornare ligula ut sem faucibus fringilla. Aliquam erat volutpat. Fusce ornare nibh id nulla viverra lobortis. Duis varius ultricies lorem at dignissim. Pellentesque eget tellus tortor. Duis dictum egestas facilisis.',
      status: 'ACTIVE',
      startDate: {
        day: 1,
        month: 1,
        year: 2001,
      },
    },
    {
      name: 'Routine 3',
      id: '4ab22046-829a-448f-9626-90a0495a4d88',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'ACTIVE',
      startDate: {
        day: 1,
        month: 1,
        year: 2001,
      },
    },
    {
      name: 'Routine 4',
      id: '3cbcf4a9-b4b2-4e20-8fd3-24cfe3677f12',
      note: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ornare ligula ut sem faucibus fringilla. Aliquam erat volutpat. Fusce ornare nibh id nulla viverra lobortis.',
      status: 'ACTIVE',
      startDate: {
        day: 1,
        month: 1,
        year: 2001,
      },
    },
  ],
}

export default initialState
