import { Form } from "react-bootstrap";
import "./side.css";
import logos from "./logos";

export default function FilterSidebar({ teams, selectedTeam, onSelectTeam }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src="/logos/l1.png" alt="Ligue 1" className="ligue-logo" />
      </div>

      <div className="sidebar-teams">
        {teams.map((team) => (
          <Form.Check
            key={team}
            type="radio"
            name="team"
            id={team}
            checked={selectedTeam === team}
            onChange={() => onSelectTeam(team)}
            className={`team-item ${selectedTeam === team ? "active" : ""}`}
            label={
              <div className="d-flex align-items-center gap-2 team-label">
                <img
                  src={logos[team]}
                  alt={team}
                  className="team-logo-s"
                />
                <span>{team}</span>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}