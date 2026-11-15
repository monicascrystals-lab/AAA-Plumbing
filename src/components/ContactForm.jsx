import { useState } from 'react';

const serviceOptions = [
  'General plumbing maintenance & repairs',
  'Burst & new pipe installations',
  'Water leak detection',
  'Blocked drain clearing',
  'Geyser services',
  'Bathroom & kitchen renovations',
  'New builds',
  'Other / not sure',
];

export default function ContactForm() {
  const [emergency, setEmergency] = useState('No');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fields = [
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Email: ${formData.get('email') || 'Not provided'}`,
      `Town / area: ${formData.get('town')}`,
      `Service: ${formData.get('service')}`,
      `Emergency: ${emergency}`,
      '',
      `Message: ${formData.get('message')}`,
    ].join('\n');
    window.location.href = `mailto:tony@aaaplumbing.co.za?subject=${encodeURIComponent('Plumbing enquiry')}&body=${encodeURIComponent(fields)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name <span aria-hidden="true">*</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          Phone number <span aria-hidden="true">*</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Your best contact number" required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </label>
        <label>
          Town / area <span aria-hidden="true">*</span>
          <input name="town" type="text" autoComplete="address-level2" placeholder="e.g. Saldanha Bay" required />
        </label>
        <label className="form-full">
          Service required <span aria-hidden="true">*</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <fieldset className="form-full emergency-field">
          <legend>Is this an emergency?</legend>
          <div className="radio-options">
            {['No', 'Yes'].map((option) => (
              <label className="radio-label" key={option}>
                <input
                  type="radio"
                  name="emergency"
                  value={option}
                  checked={emergency === option}
                  onChange={() => setEmergency(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="form-full">
          Tell us a little more <span aria-hidden="true">*</span>
          <textarea name="message" rows="4" placeholder="Describe what you need help with..." required />
        </label>
      </div>
      <button className="button button-primary button-large form-submit" type="submit">Send enquiry <span aria-hidden="true">→</span></button>
      <p className="form-note">Your email app will open with your enquiry ready to review and send. This form does not submit to or store data on a website server.</p>
    </form>
  );
}
