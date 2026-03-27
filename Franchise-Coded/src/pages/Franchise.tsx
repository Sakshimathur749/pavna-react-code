import React from 'react';
import FranchiseHero from '../components/franchise/FranchiseHero';
import FranchiseAbout from '../components/franchise/FranchiseAbout';
import FranchiseModels from '../components/franchise/FranchiseModels';
import FranchiseWhy from '../components/franchise/FranchiseWhy';
import FranchiseDetails from '../components/franchise/FranchiseDetails';
import FranchiseCTA from '../components/franchise/FranchiseCTA';

export default function Franchise() {
  return (
    <>
      <FranchiseHero />
      <FranchiseAbout />
      <FranchiseModels />
      <FranchiseWhy />
      <FranchiseDetails />
      <FranchiseCTA />
    </>
  );
}
