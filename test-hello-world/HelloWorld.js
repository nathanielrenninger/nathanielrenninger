

/* global smplr */
import React from 'react'
import useSmplrJs from 'hooks/useSimplrJs'

const HelloWorld = () => {
  useSmplrJs({ onLoad, dev: false })

  function onLoad () {
    const space = new smplr.Space({
      spaceId: 'a3a34437-b393-4666-8911-aaaad38926d0', // prod
      // spaceId: '96eae952-ef60-4058-aba1-6ace322506e7', // dev
      spaceToken: 'X',
      containerId: 'smplr-container'
    })
    space.startViewer({
      preview: true,
      mode: '3d',
      allowModeChange: true,
      onReady: () => console.log('Viewer is ready'),
      onError: error => console.error('Could not start viewer', error)
    })
  }

  
  return (
    <div style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          paddingBottom: '60%'
        }}
      >
        <div
          id='smplr-container'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'whitesmoke'
          }}
        />
      </div>
    </div>
  )
}


export default HelloWorld