import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/index.css'

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
