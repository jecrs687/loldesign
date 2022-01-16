import { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import MainComponent from "./Components/MainComponent"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

class App extends Component<any> {
  render() {
    return (
      <Provider store={store}>
        <div className='bg-blue-100 sm:bg-white'>
          <div className='mb-14'>
            <Header />
          </div>
          <div className='w-full flex flex-col items-center  justify-center shadow-sm  '>
            <MainComponent />
          </div>
          <div className='mt-14'>
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
