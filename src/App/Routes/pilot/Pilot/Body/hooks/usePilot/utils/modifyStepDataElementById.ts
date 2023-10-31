import { SetStateAction } from 'react'
import { Id, ScheduleStep } from 'schemas'

export const modifyStepDataElementById = (
  id: Id,
  setStepData: (value: SetStateAction<Array<ScheduleStep>>) => void,
  modification: Partial<ScheduleStep['data']>
) => {
  setStepData((prev) => {
    const currentIndex = prev.findIndex((t) => t.data.id === id)
    const currentStep = prev[currentIndex]

    const newStep: ScheduleStep = {
      ...currentStep,
      // @ts-ignore
      data: {
        ...currentStep.data,
        ...modification,
      },
    }

    const newSteps = [...prev]
    newSteps[currentIndex] = newStep

    return newSteps
  })
}

export default modifyStepDataElementById
