// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from '../../features/ssot/accounting.store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import '../../index.css'
import AccountingRouteProvider from '../../navigation/accounting/route-provider.tsx'

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AccountingRouteProvider mainPath='jurnal'/>
    </PersistGate>    
  </Provider>    
)

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
