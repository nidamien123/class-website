function Contact({ schoolName, onGoHome }) {
  return (
    <section>
      <h2>Contact Us</h2>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Location:</strong> Kivumu, Rwanda</p>
      <p>
        <strong>Contact email:</strong>{" "}
        <a href="mailto:replace-with-school-email@example.com">
          replace-with-school-email@example.com
        </a>
      </p>
      <p>
        Replace the sample email with a verified school or class contact email
        before submitting your assessment.
      </p>
      <button type="button" onClick={onGoHome}>Return to Home</button>
    </section>
  );
}

export default Contact;
