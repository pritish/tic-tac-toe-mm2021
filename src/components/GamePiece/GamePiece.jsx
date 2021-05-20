import { ReactComponent as FootballIcon } from "../../assets/football-player.svg";
import { ReactComponent as SoccerIcon } from "../../assets/soccer-player.svg";

export const GamePiece = ({ player }) => {
  // Helper Render Functions
  const renderIcon = () => {
    if (player === 1) {
      return <FootballIcon />;
    } else if (player === 2) {
      return <SoccerIcon />;
    } else {
      return null;
    }
  };

  // Render
  return (
    <div
      style={{
        margin: "0", //Not Needed
        padding: "20px",
        width: "100px",
        boxSizing: "border-box"
      }}
    >
      {renderIcon()}
    </div>
  );
};

export default GamePiece;
