import { useState } from 'react';
import '../../Styles/CourseType.css';

export default function CourseTypes() {
  const [types, setTypes] = useState([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const addType = () => {
    if (!name.trim()) return;
    setTypes([...types, { id: Date.now(), name }]);
    setName('');
  };

  const deleteType = (id) => setTypes(types.filter(t => t.id !== id));

  const saveEdit = (id) => {
    setTypes(types.map(t => (t.id === id ? { ...t, name: editName } : t)));
    setEditingId(null);
    setEditName('');
  };

  return (
    <div className="course-types-container">
      <h2>Course Types</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type name"
      />
      <button onClick={addType}>Add</button>

      <ul>
        {types.map((t) => (
          <li key={t.id} className="course-type-item">
            {editingId === t.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Update name"
                />
                <button onClick={() => saveEdit(t.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span className="course-type-name">{t.name}</span>
                <button onClick={() => {
                  setEditingId(t.id);
                  setEditName(t.name);
                }} style={{ marginLeft: '100px' }}>Edit</button>
                <button onClick={() => deleteType(t.id)} >Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
