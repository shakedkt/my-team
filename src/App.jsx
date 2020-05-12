import React from 'react';
import './App.css';
import TopSection from './cmp/TopSection'
import SkillDetails from './cmp/SkilDetailsSection';
import ReviewSection from './cmp/ReviewsSection'
import ContactSection from './cmp/ContactSection'
import FooterSection from './cmp/FooterSection'
function App() {
  return (
    <div className="App">
      <TopSection />
      <SkillDetails />
      <ReviewSection />
      <ContactSection />
      <FooterSection/>
    </div>
  );
}

export default App;
