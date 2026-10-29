import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Georgia, serif', color: '#2d5a27' }}>
      <h1 style={{ fontSize: '2.5rem', borderBottom: '2px solid #4caf50', paddingBottom: '10px' }}>About Paradise Nursery</h1>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#388e3c' }}>Our Story</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          Paradise Nursery was founded in 2010 with a simple mission: to bring the beauty and benefits of plants into
          every home. What started as a small family greenhouse has grown into a thriving online plant shop, serving
          thousands of plant enthusiasts across the country. We believe that every living space deserves a touch of
          green, and we are here to help you find the perfect plants for your home or office.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#388e3c' }}>Our Mission</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          At Paradise Nursery, our mission is to make plant ownership accessible, enjoyable, and rewarding for everyone.
          We carefully curate our selection of houseplants, succulents, herbs, and outdoor plants to ensure that each
          plant we sell is healthy, vibrant, and ready to thrive in its new home. We are committed to sustainable
          growing practices and eco-friendly packaging.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#388e3c' }}>Why Choose Us?</h2>
        <ul style={{ lineHeight: '2', fontSize: '1.1rem', paddingLeft: '20px' }}>
          <li>🌿 Hand-selected, high-quality plants</li>
          <li>🚚 Fast and safe nationwide shipping</li>
          <li>💚 Expert plant care guides included with every order</li>
          <li>♻️ Eco-friendly, sustainable packaging</li>
          <li>🏆 30-day happiness guarantee on all plants</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#388e3c' }}>Contact Us</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          We love hearing from our plant community! Reach out to us at{' '}
          <strong>support@paradisenursery.com</strong> or call us at <strong>1-800-PLANTS1</strong>.
          Our friendly team is available Monday through Friday, 9 AM – 5 PM EST.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
