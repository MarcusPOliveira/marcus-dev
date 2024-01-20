import { useState, useEffect, useRef } from 'react'

export const useLoading = (dependencies: any[] = []) => {
  const [isLoading, setIsLoading] = useState(true)
  const dependenciesRef = useRef(dependencies)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    dependenciesRef.current = dependencies
  }, [dependencies])

  useEffect(() => {
    const allDependenciesLoaded: boolean = dependenciesRef.current.every(
      (dep) => dep !== undefined && dep !== null
    )
    if (allDependenciesLoaded) {
      timerRef.current = setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependenciesRef.current])

  return { isLoading }
}
