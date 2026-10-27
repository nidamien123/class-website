function About({ schoolName, className }) {
  return (
    <section>
      <h2>About Our Class</h2>
      <p>
        This website was created to share information about the class, introduce
        students, and show some of the subjects and skills studied by learners.
      </p>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Trade:</strong> {className}</p>

      <h3>What is Software Development?</h3>
      <p>
        Software Development is the process of planning, creating, testing, and
        maintaining computer applications and websites.
      </p>

      <h3>Subjects and skills we learn</h3>
      <ul>
        <li>HTML and JavaScript fundamentals</li>
        <li>ReactJS and component-based development</li>
        <li>Database fundamentals and SQL</li>
        <li>Problem-solving, testing, and debugging</li>
        <li>GitHub and deploying web applications</li>
      </ul>
    </section>
  );
}

export default About;
