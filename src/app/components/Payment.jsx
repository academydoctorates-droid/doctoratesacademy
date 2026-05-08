// frontend/PaymentComponent.js
import React from 'react';
import axios from 'axios';

const PaymentComponent = () => {
  const loadRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Failed to load Razorpay SDK");
      return;
    }

    // Call your backend to create an order
    const result = await axios.post('http://localhost:5000/create-order', { amount: 500 });

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: 'YOUR_KEY_ID', // Replace with your Razorpay key ID
      amount,
      currency,
      name: 'Your Company',
      description: 'Test Transaction',
      order_id,
      handler: function (response) {
        alert('Payment Successful!');
        console.log(response);
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
      theme: {
