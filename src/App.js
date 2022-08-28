import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GuestStarter from './components/GuestStarter/GuestStarter';
import GuestMainHome from './pages/GuestHome/GuestHome';
import BuyerHomeMainPage from './pages/BuyerHomeMainPage/BuyerHomeMainPage'
import SubmitRequestPage from './pages/SubmitRequestPage/SubmitRequestPage';
import CheckPostedJobPage from './pages/CheckPostedJobPage/CheckPostedJobPage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import OrderPage from './pages/OrderPage/OrderPage';
import OrderInfromationPage from './pages/OrderInformationPage/OrderInfromationPage';
import PreferencesPage from './pages/PreferencesPage/PreferencesPage';
import CreateFavoriteListPage from './pages/CreateFavoriteListPage/CreateFavoriteListPage';
import BuyerChatPage from './pages/BuyerChatPage/BuyerChatPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<GuestStarter />} />
          <Route path='/guesthome' element={<GuestMainHome />} />
          <Route path='/buyerhome' element={<BuyerHomeMainPage />} />
          <Route path='/submitrequest' element={<SubmitRequestPage /> } />
          <Route path='/postjob' element={<CheckPostedJobPage /> } />
          <Route path='/explore' element={<ExplorePage /> } />
          <Route path='/buyerorders' element={<OrderPage /> } />
          <Route path='/orderdetails' element={<OrderInfromationPage /> } />
          <Route path='/preferences' element={<PreferencesPage /> } />
          <Route path='/preferencesresult' element={<CreateFavoriteListPage /> } />
          <Route path='/chat' element={<BuyerChatPage /> } />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
