import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { UseContext } from './component/useContext.jsx'
import { Provider } from 'react-redux'
import { storeP } from './component/redux/store.js'

createRoot(document.getElementById('root')).render(
    // <UseContext>
    <Provider store={storeP}>
    <App />
    </Provider>
    // </UseContext>
)
