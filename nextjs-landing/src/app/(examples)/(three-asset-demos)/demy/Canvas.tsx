import * as THREE from 'three'
import { events, extend, createRoot, RootState } from '@react-three/fiber'
import { useEffect, useReducer, ReactNode } from 'react'

extend(THREE)

const canvas = document.getElementById('canvas') as HTMLCanvasElement

const getSize = (): { width: number; height: number } => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

interface CanvasProps {
  children: ReactNode
}

export function Canvas({ children }: CanvasProps): null {
  const [size, set] = useReducer(getSize, getSize())

  useEffect(() => {
    const handleResize = () => {
      set()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  createRoot(canvas).render(children)
  return null
}