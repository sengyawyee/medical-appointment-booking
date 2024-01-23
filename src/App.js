import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import ReviewForm from './Components/ReviewForm/ReviewForm';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Sign_Up />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/find-doctor" element={<FindDoctorSearch />} />
                <Route path="/card-doctor" element={<DoctorCard />} />
                <Route path="/booking-consult" element={<BookingConsultation />} />
                <Route path="/notif" element={<Notification />} />
                <Route path="/review" element={<ReviewForm />} />
              </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;