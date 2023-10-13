import { Button, Stack } from '@mui/joy'
import Input from '@mui/joy/Input'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { ChangeEvent } from 'react'
import { useStoreState } from '../../../store'
import Route from '../../Route'
import Field from './Field'
import { getFieldLabel } from '../../../utils'
import useForm, { fields } from './useForm'

const AddRoutine = () => {
  const { error, isSubmitting, values, setValues, handleSubmit } = useForm()
  const storeState = useStoreState()
  console.log(storeState.routines)

  return (
    <Route title="Add Routine">
      <Stack
        spacing={1}
        component="form"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        {fields.map(({ key, type, required }) => {
          const isError = error?.[0] === key
          const errorMessage = isError
            ? error?.[1] || 'Unknown error'
            : undefined

          const onChange = (e: ChangeEvent<HTMLInputElement>) =>
            setValues((prev) => ({
              ...prev,
              [key]: e.target.value,
            }))

          return (
            <Field
              key={key}
              isRequired={required}
              isError={isError}
              label={getFieldLabel(key)}
              errorMessage={errorMessage}
            >
              <Input
                disabled={isSubmitting}
                required={required}
                // @ts-expect-error
                value={values[key]}
                onChange={onChange}
                type={type}
              />
            </Field>
          )
        })}

        <Field
          label="Days"
          isRequired
          // TODO
          isError={error?.[0] === 'days'}
        >
          <FormGroup>
            {DAY_OPTIONS.map((s, index) => {
              const isChecked = values.days[index]

              return (
                <FormControlLabel
                  key={s}
                  control={
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) =>
                        setValues((prev) => {
                          const newDays = prev.days
                          newDays[index] = e.target.checked

                          return {
                            ...prev,
                            days: newDays,
                          }
                        })
                      }
                    />
                  }
                  label={s}
                />
              )
            })}
          </FormGroup>
        </Field>

        <Stack alignItems="flex-end">
          <Button type="submit" onClick={handleSubmit} size="md">
            Add
          </Button>
        </Stack>
      </Stack>
    </Route>
  )
}

export const DAY_OPTIONS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export default AddRoutine
