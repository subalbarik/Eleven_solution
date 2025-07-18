import { useState } from 'react';
import '../../styles/Courses.css';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const addCourse = () => {
    if (!name.trim()) return;
    setCourses([...courses, { id: Date.now(), name }]);
    setName('');
  };

  const deleteCourse = (id) => setCourses(courses.filter(c => c.id !== id));

  const saveEdit = (id) => {
    setCourses(courses.map(c => (c.id === id ? { ...c, name: editName } : c)));
    setEditingId(null);
    setEditName('');
  };

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Course name"
        className="input-field"
      />
      <button onClick={addCourse} className="add-btn">Add</button>

      <ul className="courses-list">
        {courses.map((c) => (
          <li key={c.id} className="courses-item">
            {editingId === c.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Update course"
                  className="input-field"
                />
                <button onClick={() => saveEdit(c.id)} className="save-btn">Save</button>
                <button onClick={() => setEditingId(null)} className="cancel-btn">Cancel</button>
              </>
            ) : (
              <>
                <span className="course-name">{c.name}</span>
                <div className="button-group">
                  <button
                    onClick={() => {
                      setEditingId(c.id);
                      setEditName(c.name);
                    }}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteCourse(c.id)} className="delete-btn">
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
