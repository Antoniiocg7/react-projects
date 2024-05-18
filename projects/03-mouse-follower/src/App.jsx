import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // POINTER MOVE
  useEffect(() => {
    console.log('Efecto', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // CLEANUP
    // --> SE EJECUTA CUANDO EL COMPONENTE SE DESMONTA
    // Y CUANDO CAMBIAN LAS DEPENDENCIAS ANTES DE EJECUTAR EL EFECTO DE NUEVO
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] --> Solo se ejecuta una vez cuando se monta el componente
  // [enabled] --> Se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined --> Se ejecuta cada vez que se renderiza el componente

  // CHANGE BODY CLASSNAME
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
