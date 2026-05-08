"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { Footer } from "../components/Footer";
import CustomHeader from "../components/mobileHeader";
import { loadRazorpayScript } from "../utils/loadRazorpay";
import { BASE_ASSET_URL } from "../utils";

// Snackbar Component
const Snackbar = ({ message, type, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const bgColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6';
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: bgColor,
      color: 'white',
      padding: '16px 24px',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      zIndex: 1000,
      maxWidth: '90%',
    }}>
      {type === 'success' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )}
      {type === 'error' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      )}
      {type === 'info' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )}
      <span>{message}</span>
      <button 
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          marginLeft: 'auto',
          cursor: 'pointer',
          padding: '4px',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: "",
    type: "info", // success, error, info
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const showSnackbar = (message, type = "info") => {
    setSnackbar({
      isOpen: true,
      message,
      type,
    });
  };

  const closeSnackbar = () => {
    setSnackbar(prev => ({ ...prev, isOpen: false }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.amount) newErrors.amount = "Amount is required";
    else if (formData.amount <= 0) newErrors.amount = "Amount must be greater than 0";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    try {
      const res = await fetch(`${BASE_ASSET_URL}/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(formData.amount),
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        }),
      });

      const data = await res.json();

      const options = {
        key: "rzp_test_UCojw0OfaGr3md",
        amount: Number(data.amount),
        currency: data.currency || "INR",
        name: "Global Academy of Doctorates",
        description: "Donation to Global Academy of Doctorates",
        order_id: data.id,
        handler: function (response) {
          showSnackbar("Thank you for your donation! Your payment was successful.", "success");
          // Reset form after successful payment
          setFormData({
            name: "",
            email: "",
            phone: "",
            amount: "",
          });
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#3b82f6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        showSnackbar("Payment failed. Please try again.", "error");
        console.error(response.error);
      });
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      showSnackbar("Failed to initiate payment. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      showSnackbar("Failed to load payment gateway. Please try again.", "error");
      setLoading(false);
      return;
    }

    handlePayment();
  };

  return (
    <div className="donation-container" style={{
      maxWidth: "800px",
      margin: "40px auto",
      padding: isMobile ? "25px" : "40px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
      border: "1px solid rgba(0, 0, 0, 0.05)"
    }}>
      <h2 style={{
        fontSize: isMobile ? "24px" : "28px",
        fontWeight: "700",
        color: "#008080",
        marginBottom: "30px",
        textAlign: "center",
        position: "relative",
        paddingBottom: "15px"
      }}>
        Support Our Mission
        <span style={{
          display: "block",
          width: "80px",
          height: "4px",
          backgroundColor: "#008080",
          margin: "15px auto 0",
          borderRadius: "2px"
        }}></span>
      </h2>
      
      <p style={{
        textAlign: "center",
        color: "#008080",
        marginBottom: "30px",
        fontSize: isMobile ? "14px" : "16px",
        lineHeight: "1.6"
      }}>
        Your generous donation helps us continue our important work. Fill out the form below to make your contribution.
      </p>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <div className="form-group" style={{ position: "relative" }}>
          <label htmlFor="name" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#374151",
            fontSize: "14px"
          }}>
            Full Name <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            style={{
              width: "100%",
              padding: "14px 16px",
              border: errors.name ? "1px solid #ef4444" : "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
              transition: "all 0.3s ease",
              backgroundColor: "#f9fafb"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#3b82f6";
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors.name ? "#ef4444" : "#d1d5db";
              e.target.style.backgroundColor = "#f9fafb";
              e.target.style.boxShadow = "none";
            }}
          />
          {errors.name && (
            <p style={{
              color: "#ef4444",
              fontSize: "12px",
              marginTop: "6px",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#374151",
            fontSize: "14px"
          }}>
            Email Address <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            style={{
              width: "100%",
              padding: "14px 16px",
              border: errors.email ? "1px solid #ef4444" : "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
              transition: "all 0.3s ease",
              backgroundColor: "#f9fafb"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#3b82f6";
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors.email ? "#ef4444" : "#d1d5db";
              e.target.style.backgroundColor = "#f9fafb";
              e.target.style.boxShadow = "none";
            }}
          />
          {errors.email && (
            <p style={{
              color: "#ef4444",
              fontSize: "12px",
              marginTop: "6px",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#374151",
            fontSize: "14px"
          }}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            style={{
              width: "100%",
              padding: "14px 16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
              transition: "all 0.3s ease",
              backgroundColor: "#f9fafb"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#3b82f6";
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#d1d5db";
              e.target.style.backgroundColor = "#f9fafb";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#374151",
            fontSize: "14px"
          }}>
            Donation Amount (INR) <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              fontWeight: "600",
              color: "#6b7280",
              fontSize: "16px"
            }}>₹</span>
            <input
              type="number"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="500"
              min="1"
              style={{
                width: "100%",
                padding: "14px 16px 14px 36px",
                border: errors.amount ? "1px solid #ef4444" : "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "16px",
                transition: "all 0.3s ease",
                backgroundColor: "#f9fafb"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6";
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.amount ? "#ef4444" : "#d1d5db";
                e.target.style.backgroundColor = "#f9fafb";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
          {errors.amount && (
            <p style={{
              color: "#ef4444",
              fontSize: "12px",
              marginTop: "6px",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {errors.amount}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px",
            backgroundColor: loading ? "#008080" : "#008080",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            boxShadow: loading ? "none" : "0 4px 6px rgba(37, 99, 235, 0.2)"
          }}
          onMouseOver={(e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = "#008080";
              e.currentTarget.style.boxShadow = "0 6px 8px rgba(37, 99, 235, 0.3)";
            }
          }}
          onMouseOut={(e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = "#008080";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(37, 99, 235, 0.2)";
            }
          }}
        >
          {loading ? (
            <>
              <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "spin 1s linear infinite" }}>
                <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="0.75"></path>
              </svg>
              <span style={{ marginLeft: "8px" }}>Processing...</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
              </svg>
              Donate Now
            </>
          )}
        </button>

        <div style={{
          marginTop: "20px",
          padding: "16px",
          backgroundColor: "#f0f9ff",
          borderRadius: "8px",
          border: "1px solid #e0f2fe",
          display: "flex",
          alignItems: "center",
          justifyContent: 'center',
          gap: "12px"
        }}>
          <div style={{
            flexShrink: "0",
            width: "40px",
            height: "40px",
            backgroundColor: "#008080",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div>
            <p style={{ fontWeight: "600", color: "#008080", marginBottom: "4px" }}>Need help?</p>
            <p style={{ color: "#4b5563", fontSize: "14px" }}>Contact our support team at <a href="mailto:academyofdoctorates@gmail.com" style={{ color: "#3b82f6", textDecoration: "underline" }}>academyofdoctorates@gmail.com</a></p>
          </div>
        </div>
      </form>

      {/* Snackbar component */}
      <Snackbar 
        message={snackbar.message}
        type={snackbar.type}
        isOpen={snackbar.isOpen}
        onClose={closeSnackbar}
      />
    </div>
  );
};

export default DonationForm;