/* eslint-disable @typescript-eslint/no-magic-numbers */
import { RoutinesState, routinesStateSchema } from 'schemas'
import { getUnixFromDateString } from 'utils'
import { getNewVersion } from './utils'

const migrateRoutines = (rawRoutines: any): RoutinesState => {
  let newRoutines: RoutinesState = rawRoutines

  const commonProps = {
    version: getNewVersion(rawRoutines.version),
  }

  switch (rawRoutines.version) {
    case undefined:
      newRoutines = {
        ...rawRoutines,
        ...commonProps,
      }
      break

    case 1:
      newRoutines = {
        ...rawRoutines,
        ...commonProps,
      }
      break

    case 2:
      newRoutines = {
        ...rawRoutines,
        ...commonProps,
        value: rawRoutines.value.map((r: any) => ({
          ...r,
          pastRuns: [],
        })),
      }
      break

    case 3:
      newRoutines = {
        ...rawRoutines,
        ...commonProps,
        value: rawRoutines.value.map((r: any) => ({
          ...r,
          endDateInUnix: r.endDate
            ? getUnixFromDateString(r.endDate)
            : undefined,
          startDateInUnix: getUnixFromDateString(r.startDate),
        })),
      }
      break

    case 4:
      newRoutines = {
        ...rawRoutines,
        ...commonProps,
        value: rawRoutines.value.map((r: any) => ({
          ...r,
          score: 0,
        })),
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
