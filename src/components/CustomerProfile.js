import React from 'react';
import OrderHistory from './OrderHistory';
import LoyaltyProgram from './LoyaltyProgram';
import Feedback from './Feedback';
import image from '../images/stefan.webp' 


const CustomerProfile = () => {
    const customer = {
        name: 'Stefan Salvatore',
        email: 'stefsalvatore@example.com',
        phone_number: '123-456-7890',
        profilePicture:image
      };
      

      const orders = [
        {
          id: 1,
          order_date: '2022-01-01',
          order_total: '$20.00',
          payment_method: 'Credit Card',
          order_status: 'Delivered',
        },
        {
          id: 2,
          order_date: '2022-01-05',
          order_total: '$30.00',
          payment_method: 'Cash',
          order_status: 'Pending',
        },
      ];
      
      const loyaltyProgram = {
        points_balance: 100,
        rewards_redemption_history: 'None',
        loyalty_program_tier: 'Silver',
      };
      
      const feedback = [
        {
          id: 1,
          rating: 4,
          feedback_text: 'Good food, but slow service.',
        },
        {
          id: 2,
          rating: 5,
          feedback_text: 'Excellent food and service!',
        },
      ];
      console.log(customer.profilePicture)
  return (

    <div className='customer-profile'>
      <div style={{ width:"100%", display: "flex" }}>
        <div style={{ width:"30%", display:"flex", justifyContent: "center", alignItems:"center" }}>
        <img src={customer.profilePicture} alt="?" />
        </div>
        <div style={{ width:"70%", display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column", }}>
        <h1>{customer.name}</h1>
      <p>Email: {customer.email}</p>
      <p>Mobile Nummber: {customer.phone_number}</p>
        </div>
      </div>
      
     <OrderHistory orders={orders} />
      <LoyaltyProgram loyaltyProgram={loyaltyProgram} />
      <Feedback feedback={feedback} />
    </div>
  );

};

export default CustomerProfile;