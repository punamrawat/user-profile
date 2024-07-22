import React from 'react';

const LoyaltyProgram = ({ loyaltyProgram }) => {
  return (
    <div className='loyalty-program'>
      <h2>Loyalty Program</h2>
      <p>Points Balance: {loyaltyProgram.points_balance}</p>
      <p>Rewards Redemption History: {loyaltyProgram.rewards_redemption_history}</p>
      <p>Loyalty Program Tier: {loyaltyProgram.loyalty_program_tier}</p>
    </div>
  );
};

export default LoyaltyProgram;