import { RoutinesState, SingleRoutineStatuses } from './types'

const initialState: RoutinesState = {
  value: [
    {
      name: 'Routine 1',
      id: 'a9a0b36b-7586-49c6-a6b4-8f0b2495dd20',
      note: undefined,
      status: SingleRoutineStatuses.ACTIVE,
      time: '12:12',
      startDate: '2023-05-30',
      endDate: '2023-10-13',
      days: [true, true, true, true, true, true, true],
      interval: 1,
    },
    {
      name: 'Routine 2',
      id: '7133d8b4-6d77-403f-8080-b4a21a733e35',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus enim a nisl tempus, non ullamcorper elit sagittis. Cras vitae rutrum risus. Vivamus ut nisi ac erat ultrices blandit ut et odio. Ut maximus bibendum accumsan. Integer blandit justo et magna pulvinar finibus. Vivamus vel dui ornare ex convallis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ornare ligula ut sem faucibus fringilla. Aliquam erat volutpat. Fusce ornare nibh id nulla viverra lobortis. Duis varius ultricies lorem at dignissim. Pellentesque eget tellus tortor. Duis dictum egestas facilisis.',
      status: SingleRoutineStatuses.ACTIVE,
      time: '12:12',
      startDate: '2023-05-30',
      endDate: '2023-10-10',
      days: [false, false, false, false, false, false, false],
      interval: 1,
    },
    {
      name: 'Routine 3',
      id: '4ab22046-829a-448f-9626-90a0495a4d88',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: undefined,
      status: SingleRoutineStatuses.ACTIVE,
      startDate: '2023-05-30',
      endDate: '2023-10-30',
      days: [true, true, true, true, true, false, false],
      interval: 1,
    },
    {
      name: 'Routine 4',
      id: '3cbcf4a9-b4b2-4e20-8fd3-24cfe3677f12',
      note: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ornare ligula ut sem faucibus fringilla. Aliquam erat volutpat. Fusce ornare nibh id nulla viverra lobortis.',
      status: SingleRoutineStatuses.ACTIVE,
      time: '12:12',
      startDate: '2023-05-30',
      endDate: undefined,
      days: [false, false, false, false, false, true, true],
      interval: 1,
    },
    {
      name: 'Routine 5',
      id: 'fa914892-4e10-4e3e-a3ff-f17e13184f7c',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus enim a nisl tempus, non ullamcorper elit sagittis. Cras vitae rutrum risus. Vivamus ut nisi ac erat ultrices blandit ut et odio. Ut maximus bibendum accumsan. Integer blandit justo et magna pulvinar finibus. Vivamus vel dui ornare ex convallis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ornare ligula ut sem faucibus fringilla. Aliquam erat volutpat. Fusce ornare nibh id nulla viverra lobortis. Duis varius ultricies lorem at dignissim. Pellentesque eget tellus tortor. Duis dictum egestas facilisis.',
      status: SingleRoutineStatuses.ACTIVE,
      time: '12:12',
      startDate: '2023-01-30',
      endDate: '2023-10-10',
      days: [false, false, false, false, false, false, false],
      interval: 1,
    },
  ],
}

export default initialState
