import React from 'react';
import './contact.css';

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact">
        <h2>Request Assistance</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to contact us with any questions or concerns. Our support team is available 24/7.</p>
          <ul>
            <li><strong>Phone:</strong> +91 9188777532</li>
            <li><strong>Email:</strong> ybro.support@gmail.com</li>
            <li><strong>Address:</strong> Park Tower, Hollywood,LA</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Contact;
