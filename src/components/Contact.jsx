import React from 'react';

const Contact = () => (
  <div className="contact">
    <h2>Contact Us</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send Message</button>
    </form>

    <section className="social-media">
      <h3>Follow Us</h3>
      <p>Facebook | Twitter | Instagram</p>
    </section>
  </div>
);

export default Contact;
