import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage('mode', false)
    const body = document.querySelector('body')
    let dark = 'dark-mode'
    
    const setValue = () => {
        setMode(!mode)
        if (mode === true) {
            body.classList.add(dark)
        } else {
            body.classList.remove(dark)
        }
    }

    return [setValue]
}

export default useDarkMode