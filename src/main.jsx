import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader.jsx';
const App = React.lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Toaster position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 5000 }} />
    <Suspense fallback={<Loader/>}>
      <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
