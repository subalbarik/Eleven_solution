import { useState } from 'react';
import '../../Styles/CourseOffer.css';

export default function CourseOffers() {
  const [types] = useState([
    { id: 1, name: 'Individual' },
    { id: 2, name: 'Group' },
    { id: 3, name: 'Special' }
  ]);
  const [courses] = useState([
    { id: 1, name: 'English' },
    { id: 2, name: 'Hindi' },
    { id: 3, name: 'Urdu' }
  ]);

  const [offerings, setOfferings] = useState([]);
  const [typeId, setTypeId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTypeId, setEditTypeId] = useState('');
  const [editCourseId, setEditCourseId] = useState('');

  const addOffering = () => {
    if (!typeId || !courseId) return;
    setOfferings([...offerings, { id: Date.now(), typeId, courseId }]);
    setTypeId('');
    setCourseId('');
  };

  const deleteOffering = (id) => {
    setOfferings(offerings.filter(o => o.id !== id));
  };

  const saveEdit = (id) => {
    setOfferings(
      offerings.map((o) =>
        o.id === id ? { ...o, typeId: editTypeId, courseId: editCourseId } : o
      )
    );
    setEditingId(null);
    setEditTypeId('');
    setEditCourseId('');
  };

  return (
    <div className="offers-container">
      <h2>Course Offerings</h2>

      <div className="form-group">
        <select value={typeId} onChange={(e) => setTypeId(e.target.value)} className="dropdown">
          <option value="">Select Course Type</option>
          {types.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>

        <select value={courseId} onChange={(e) => setCourseId(e.target.value)} className="dropdown">
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <button onClick={addOffering} className="add-btn">Add Offering</button>
      </div>

      <ul className="offers-list">
        {offerings.map((o) => (
          <li key={o.id} className="offers-item">
            {editingId === o.id ? (
              <div className="edit-section">
                <select value={editTypeId} onChange={(e) => setEditTypeId(e.target.value)} className="dropdown">
                  <option value="">Type</option>
                  {types.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
                <select value={editCourseId} onChange={(e) => setEditCourseId(e.target.value)} className="dropdown">
                  <option value="">Course</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
                <button onClick={() => saveEdit(o.id)} className="save-btn">Save</button>
                <button onClick={() => setEditingId(null)} className="cancel-btn">Cancel</button>
              </div>
            ) : (
              <>
                <span className="offer-name">
                  {types.find(t => t.id === +o.typeId)?.name} - {courses.find(c => c.id === +o.courseId)?.name}
                </span>
                <div className="button-group">
                  <button onClick={() => {
                    setEditingId(o.id);
                    setEditTypeId(o.typeId);
                    setEditCourseId(o.courseId);
                  }} className="edit-btn">Edit</button>
                  <button onClick={() => deleteOffering(o.id)} className="delete-btn">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
