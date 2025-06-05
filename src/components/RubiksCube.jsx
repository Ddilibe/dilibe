import React, { useEffect, useRef, useState } from 'react'

const RubiksCube = () => {
  const containerRef = useRef(null)
  const [isInteracting, setIsInteracting] = useState(false)
  const [interactionPosition, setInteractionPosition] = useState({ x: 0, y: 0 })
  const [isSpinning, setIsSpinning] = useState(true)
  const [rotation, setRotation] = useState({ x: -20, y: -20 })

  useEffect(() => {
    const faces = ['front', 'back', 'right', 'left', 'top', 'bottom']
    const colors = ['red', 'orange', 'blue', 'green', 'yellow', 'white']
    
    faces.forEach((face, index) => {
      const faceElement = document.createElement('div')
      faceElement.className = `cube-face cube-face--${face}`
      
      const transforms = {
        front: 'translateZ(100px)',
        back: 'rotateY(180deg) translateZ(100px)',
        right: 'rotateY(90deg) translateZ(100px)',
        left: 'rotateY(-90deg) translateZ(100px)',
        top: 'rotateX(90deg) translateZ(100px)',
        bottom: 'rotateX(-90deg) translateZ(100px)'
      }
      
      faceElement.style.transform = transforms[face]

      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div')
        cell.className = `cube-cell color-${colors[index]}`
        cell.dataset.faceIndex = index
        cell.dataset.cellIndex = i
        faceElement.appendChild(cell)
      }

      containerRef.current?.appendChild(faceElement)
    })

    // Set initial rotation
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
    }
  }, [])

  const handleInteractionStart = (e) => {
    e.preventDefault()
    const position = {
      x: e.type.includes('mouse') ? e.clientX : e.touches[0].clientX,
      y: e.type.includes('mouse') ? e.clientY : e.touches[0].clientY
    }
    setIsInteracting(true)
    setInteractionPosition(position)
    setIsSpinning(false)
  }

  const handleInteractionMove = (e) => {
    e.preventDefault()
    if (!isInteracting) return

    const position = {
      x: e.type.includes('mouse') ? e.clientX : e.touches[0].clientX,
      y: e.type.includes('mouse') ? e.clientY : e.touches[0].clientY
    }

    const deltaX = position.x - interactionPosition.x
    const deltaY = position.y - interactionPosition.y
    const sensitivity = 0.5

    if (containerRef.current) {
      const newRotation = {
        x: rotation.x - deltaY * sensitivity,
        y: rotation.y + deltaX * sensitivity
      }
      
      setRotation(newRotation)
      containerRef.current.style.transform = `rotateX(${newRotation.x}deg) rotateY(${newRotation.y}deg)`
    }

    setInteractionPosition(position)
  }

  const handleInteractionEnd = (e) => {
    e.preventDefault()
    setIsInteracting(false)
    setIsSpinning(true)
  }

  return (
    <div className="scene">
      <div
        ref={containerRef}
        className={`cube-container ${isSpinning ? 'spin' : ''}`}
        onMouseDown={handleInteractionStart}
        onMouseMove={handleInteractionMove}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchMove={handleInteractionMove}
        onTouchEnd={handleInteractionEnd}
        onTouchCancel={handleInteractionEnd}
      />
    </div>
  )
}

export default RubiksCube 