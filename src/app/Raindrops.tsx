"use client"

import { useEffect, useRef } from "react"
import { RainyWindow } from "@arayui/rainy-day"

export default function RainyWindowBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const rainyWindow = new RainyWindow(containerRef.current, {
      intensity: 0.3,
      speed: 0.4,
      brightness: 0.6,
      normal: 1.2,
      zoom: 1,
      blurIntensity: 3,
      blurIterations: 8,
      postProcessing: true,
      lightning: false,
      fps: 30,
    })

    rainyWindow.loadVideo("/videos/background.mp4").catch((error) => {
      if (error?.name !== "AbortError") {
        console.error("Failed to load video:", error)
      }
    })

    return () => {
      rainyWindow.destroy()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-50 h-screen w-screen"
    />
  )
}