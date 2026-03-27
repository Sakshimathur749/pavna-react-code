import React from 'react';
import BoardingHero from '../components/boarding/BoardingHero';
import BoardingTruth from '../components/boarding/BoardingTruth';
import BoardingBenefits from '../components/boarding/BoardingBenefits';
import BoardingFacilities from '../components/boarding/BoardingFacilities';
import BoardingWhy from '../components/boarding/BoardingWhy';
import BoardingCTA from '../components/boarding/BoardingCTA';

export default function Boarding() {
  return (
    <>
      <BoardingHero />
      <BoardingTruth />
      <BoardingBenefits />
      <BoardingFacilities />
      <BoardingWhy />
      <BoardingCTA />
    </>
  );
}
