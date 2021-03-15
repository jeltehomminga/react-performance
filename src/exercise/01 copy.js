// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// 💣 remove this import
// import Globe from '../globe'

// 🐨 use React.lazy to create a Globe component which using a dynamic import
// to get the Globe component from the '../globe' module.
const Globe = React.lazy(() => import('../globe'))

function LazyGlobe() {
  return (
    <React.Suspense fallback={<p>hiiii</p>}>
      <Globe />
    </React.Suspense>
  )
}
// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

export default LazyGlobe
