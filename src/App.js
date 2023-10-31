import { Route, Routes } from 'react-router-dom';
import Navbar from './contailner/Navbar';
import Footer from './contailner/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import Confirm from './pages/Confirm';
import Contact from './pages/Contact';
import FilterPage from './pages/FilterPage';
import HelpPage from './pages/HelpPage';

import ListingPage from './pages/ListingPage';
import NotFoundPage from './pages/NotFoundPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage.jsx';
import SignInModel from './pages/SignInModel';
import SubmitPage from './pages/SubmitPage';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/post' element={<BlogPostPage />} />
        <Route path='/confirm' element={<Confirm />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/filter' element={<FilterPage />} />
        <Route path='/help' element={<HelpPage />} />

        <Route path='/listing-mosonry' element={<ListingPage />} />
        <Route path='/not-found' element={<NotFoundPage />} />
        <Route path='/restaurant-detail' element={<RestaurantDetailPage />} />
        <Route path='/sign-in' element={<SignInModel />} />
        <Route path='/submit' element={<SubmitPage />} />
        <Route path='/' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
