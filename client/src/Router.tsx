import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './pages/layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path='/dashboard' element={<DefaultLayout />}>
        <Route path='/dashboard' element={<Home />} />
      </Route>
    </Routes>
  )
}
