import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import axios from "axios";

const withDashboardContext = (Component: () => JSX.Element) => {
  return () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);

    const testToken = async (accessToken: string) => {
      await axios
        .get("http://localhost:8085/test-token", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .catch((error) => {
          if (error.response?.data?.statusCode === 401) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            localStorage.removeItem("date");
            navigate("/");
          }
        });
      return true;
    };

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      const user = localStorage.getItem("user");
      const date = localStorage.getItem("date");
      const expiredToken = date && new Date().getTime() - +date > 3.6e6;
      if (!accessToken || !user || expiredToken !== false) navigate("/");
      testToken(accessToken!);
      setLoading(false);
    }, []);

    return isLoading ? <Loading /> : <Component />;
  };
};

export default withDashboardContext;
