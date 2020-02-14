import useLocalStorage from './useLocalStorage'
import { getAllByDisplayValue } from '@testing-library/react'

test('useLocalStorage holds value', () => {
    const hookCall = () => {
        const [value, setValue] = useLocalStorage({})
        setValue([])
        return (
            <div data-testid='hook-div'>{value}</div>
        )
    }
    const hookvalue = getByTestId(/hook-div/i);
    expect(hookvalue).toBe(Object)

    

    
})

