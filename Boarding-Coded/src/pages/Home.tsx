import React from 'react';
import Hero from '../components/Hero';
import MetricsMarquee from '../components/MetricsMarquee';
import Campuses from '../components/Campuses';
import LearningPath from '../components/LearningPath';
import MidBanner from '../components/MidBanner';
import SchoolUpdates from '../components/SchoolUpdates';
import Visionaries from '../components/Visionaries';
import Advantages from '../components/Advantages';
import LifeAtPavna from '../components/LifeAtPavna';
import Gallery from '../components/Gallery';
import LeadersAndGuests from '../components/LeadersAndGuests';
import Events from '../components/Events';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsMarquee />
      <Campuses />
      <LearningPath />
      <MidBanner />
      <SchoolUpdates />
      <Visionaries />
      <Advantages />
      <LifeAtPavna />
      <Gallery />
      <LeadersAndGuests />
      <Events />
      <FAQ />
      <FinalCTA />
    </>
  );
}
