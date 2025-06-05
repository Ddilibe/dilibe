import React, { useEffect, useRef, useState } from 'react'

const RubiksCube = () => {
  const containerRef = useRef(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isSpinning, setIsSpinning] = useState(true)

  useEffect(() => {
    const faces = ['front', 'back', 'right', 'left', 'top', 'bottom']
    const colors = ['red', 'orange', 'blue', 'green', 'yellow', 'white']
    
    // Create cube faces
    faces.forEach((face, index) => {
      const faceElement = document.createElement('div')
      faceElement.className = `cube-face cube-face--${face}`
      
      const transforms = {
        front: 'rotateY(0deg) translateZ(100px)',
        back: 'rotateY(180deg) translateZ(100px)',
        right: 'rotateY(90deg) translateZ(100px)',
        left: 'rotateY(-90deg) translateZ(100px)',
        top: 'rotateX(90deg) translateZ(100px)',
        bottom: 'rotateX(-90deg) translateZ(100px)'
      }
      
      faceElement.style.transform = transforms[face]

      // Create 9 cells for each face
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div')
        cell.className = `cube-cell color-${colors[index]}`
        cell.dataset.faceIndex = index
        cell.dataset.cellIndex = i
        faceElement.appendChild(cell)
      }

      containerRef.current?.appendChild(faceElement)
    })
  }, [])

  const handleMouseDown = (e) => {
    setIsMouseDown(true)
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsSpinning(false)
  }

  const handleMouseMove = (e) => {
    if (!isMouseDown) return

    const deltaX = e.clientX - mousePosition.x
    const deltaY = e.clientY - mousePosition.y

    if (containerRef.current) {
      const currentTransform = containerRef.current.style.transform || ''
      const rotateX = parseFloat(currentTransform.match(/rotateX\(([-\d.]+)deg\)/) || [0, 0])[1]
      const rotateY = parseFloat(currentTransform.match(/rotateY\(([-\d.]+)deg\)/) || [0, 0])[1]

      containerRef.current.style.transform = `rotateX(${rotateX - deltaY * 0.5}deg) rotateY(${rotateY + deltaX * 0.5}deg)`
    }

    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
    setIsSpinning(true)
  }

  return (
    <div className="scene">
      <div
        ref={containerRef}
        className={`cube-container ${isSpinning ? 'spin' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
    </div>
  )
}

export default RubiksCube 