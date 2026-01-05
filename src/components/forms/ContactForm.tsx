"use client";

import Button from "@/components/ui/Button";
import styles from "@/app/contact/page.module.css"; // We can reuse the module from the page or pass className

export default function ContactForm() {
  return (
    <div className={styles.formCard}>
      <h2>Request an Appointment</h2>
      <p className={styles.formNote}>Please do not include sensitive medical information (PHI) in this form.</p>
      
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required placeholder="Jane Doe" />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="jane@example.com" />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required placeholder="(555) 123-4567" />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="reason">Reason for Visit</label>
          <select id="reason" name="reason">
            <option value="new_patient">New Patient Consultation</option>
            <option value="follow_up">Follow-up Appointment</option>
            <option value="second_opinion">Second Opinion</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Message (Optional)</label>
          <textarea id="message" name="message" rows={4} placeholder="How can we help you?"></textarea>
        </div>
        
        <Button variant="primary" className={styles.submitBtn}>Send Request</Button>
      </form>
    </div>
  );
}
