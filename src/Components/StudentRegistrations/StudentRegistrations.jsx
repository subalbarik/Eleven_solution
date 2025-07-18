import { useState } from 'react';
import '../../Styles/StudentRegistration.css';

export default function StudentRegistrations() {
  const [courseTypes] = useState(['Individual', 'Group', 'Special']);
  const [offerings] = useState([
    { id: 1, type: 'Individual', name: 'Individual - English' },
    { id: 2, type: 'Group', name: 'Group - Hindi' },
    { id: 3, type: 'Special', name: 'Special - Urdu' },
  ]);

  const [registrations, setRegistrations] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [offeringId, setOfferingId] = useState('');
  const [studentName, setStudentName] = useState('');

  const register = () => {
    if (!offeringId || !studentName.trim()) return;
    setRegistrations([...registrations, { id: Date.now(), offeringId, studentName }]);
    setStudentName('');
  };

  const filteredOfferings = selectedType
    ? offerings.filter((o) => o.type === selectedType)
    : offerings;

  return (
    <div className="registrations-container">
      <h2>Student Registrations</h2>

      <div className="filter-section">
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="dropdown">
          <option value="">Filter by Course Type</option>
          {courseTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <select value={offeringId} onChange={(e) => setOfferingId(e.target.value)} className="dropdown">
          <option value="">Select Offering</option>
          {filteredOfferings.map((o) => (
            <option key={o.id} value={o.id}>{o.name}</option>
          ))}
        </select>

        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Student Name"
          className="input-field"
        />
        <button onClick={register} className="add-btn">Register</button>
      </div>

      <ul className="registration-list">
        {registrations.map((r) => {
          const offering = offerings.find((o) => o.id === +r.offeringId);
          return (
            <li key={r.id} className="registration-item">
              <span className="registration-info">
                {offering?.name} ➔ {r.studentName}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
