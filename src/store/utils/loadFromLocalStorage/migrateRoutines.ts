/* eslint-disable @typescript-eslint/no-magic-numbers */
import { RoutinesState, routinesStateSchema } from 'schemas'
import { getUnixFromDateString } from 'utils'

const migrateRoutines = (rawRoutines: any): RoutinesState => {
  let newRoutines: RoutinesState = rawRoutines

  switch (rawRoutines.version) {
    case undefined:
      newRoutines = {
        ...rawRoutines,
        version: 1,
      }
      break

    case 1:
      newRoutines = {
        ...rawRoutines,
        version: 2,
      }
      break

    case 2:
      newRoutines = {
        ...rawRoutines,
        value: rawRoutines.value.map((r: any) => ({
          ...r,
          pastRuns: [],
        })),
        version: 3,
      }
      break

    case 3:
      newRoutines = {
        ...rawRoutines,
        value: rawRoutines.value.map((r: any) => ({
          ...r,
          endDateInUnix: r.endDate
            ? getUnixFromDateString(r.endDate)
            : undefined,
          startDateInUnix: getUnixFromDateString(r.startDate),
        })),
        version: 4,
      }
      break

    case 4:
      newRoutines = {
        ...rawRoutines,
        value: rawRoutines.value.map((r: any) => ({
          ...r,
          score: 0,
        })),
        version: 5,
      }
      break
  }

  const parsingStatus = routinesStateSchema.safeParse(newRoutines)
  if (parsingStatus.success) {
    return parsingStatus.data
  } else {
    console.log(parsingStatus.error)
    return migrateRoutines(newRoutines)
  }
}

export default migrateRoutines
