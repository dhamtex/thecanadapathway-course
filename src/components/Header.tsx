import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        zIndex: "1000",
      }}
    >
      <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
        <h2 style={{ margin: "0", fontSize: "1.3rem" }}>
          Thecanadapathway.com
        </h2>
      </Link>
      <span
        style={{
          color: "white",
          textTransform: "uppercase",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        className="logout"
        onClick={() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("user");
          localStorage.removeItem("date");
          navigate("/");
        }}
      >
        Logout
      </span>
    </div>
  );
};

export default Header;
