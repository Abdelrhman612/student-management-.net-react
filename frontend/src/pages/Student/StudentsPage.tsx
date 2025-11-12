import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import type { StudentDto } from "../../types/students";
import { GetStudents } from "../../Service/EndPoint/Student.EndPoint";

const StudentsPage = () => {
  const [students, setStudents] = useState<StudentDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetStudents();
        setStudents(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load students");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light"
    >
      <div className="card shadow-lg p-4" style={{ width: "90%", maxWidth: "800px" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">🎓 Students List</h2>

        {loading && (
          <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2 text-muted">Loading students...</p>
          </div>
        )}

        {error && <div className="alert alert-danger text-center">{error}</div>}

        {!loading && !error && (
          <>
            {students.length === 0 ? (
              <div className="alert alert-warning text-center">
                No students found.
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">GPA</th>
                      <th scope="col">Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{s.name}</td>
                        <td>{s.gender}</td>
                        <td>{s.gpa}</td>
                        <td>{s.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StudentsPage;
