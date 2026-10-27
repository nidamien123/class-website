function Home({ schoolName, className, onNavigate }) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Class and trade:</strong> {className}</p>
      <p>
        Welcome to our class website. This website introduces our class,
        presents student information, and explains some of the skills we learn.
      </p>
      <h3>Explore the website</h3>
      <ul>
        <li><button type="button" onClick={() => onNavigate("about")}>Learn about our class</button></li>
        <li><button type="button" onClick={() => onNavigate("students")}>View the student list</button></li>
        <li><button type="button" onClick={() => onNavigate("contact")}>Contact the school</button></li>
      </ul>
    </section>
  );
}

export default Home;
