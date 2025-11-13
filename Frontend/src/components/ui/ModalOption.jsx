import React from "react";
import { useNavigate } from "react-router-dom";

const ModalOption = ({ image, title, link, style }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          color: "white",
          fontWeight: "600",
          fontSize: "18px",
          padding: "15px",
          textAlign: "center",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default ModalOption;
