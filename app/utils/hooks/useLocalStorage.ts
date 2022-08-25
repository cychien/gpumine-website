import { useEffect, useState } from 'react'

export default function useLocalStorage(
  key: string,
  serverValue: any,
  initialValue: any
) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return serverValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : item
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!storedValue) {
      setStoredValue(initialValue)
    }
  }, [initialValue, storedValue])

  return [storedValue, setValue]
}
