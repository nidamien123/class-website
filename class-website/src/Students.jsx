const students = [
  { id: "SD001", name: "Student One", trade: "Software Development" },
  { id: "SD002", name: "Student Two", trade: "Software Development" },
  { id: "SD003", name: "Student Three", trade: "Software Development" },
  { id: "SD004", name: "Student Four", trade: "Software Development" },
  { id: "SD005", name: "Student Five", trade: "Software Development" }
];

function Students({ schoolName }) {
  return (
    <section>
      <h2>Our Students</h2>
      <p>School: {schoolName}</p>
      <p>
        The names below are sample data. Replace them with the correct names
        and student IDs for your class before submitting.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Name</th>
            <th scope="col">Trade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.trade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Students;
