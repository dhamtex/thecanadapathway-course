import withDashboardContext from "./hoc/withDashboardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Chatbot from "react-chatbot-kit";
import config from "./bot/config";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";
import "react-chatbot-kit/build/main.css";

const Dashboard = () => {
  return (
    <div>
      <Header />
      {/* <div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div> */}

      <div
        style={{
          background: "darkred",
          color: "white",
          padding: ".5rem",
          textAlign: "center",
          fontWeight: "bold",
          position: "fixed",
          top: "3.5rem",
          width: "100%",
        }}
      >
        If you have got any questions or clarification, talk to us now by
        clicking on &nbsp;
        <a
          href="mailto:student@thecanadapathway.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            fontSize: "1",
            padding: ".2rem",
          }}
        >
          THIS LINK
        </a>
      </div>

      <div
        style={{
          background: "rgb(204,204,204,.5)",
          minHeight: "91vh",
          display: "flex",
          padding: "10rem 2rem",
          flexDirection: "column",
          paddingBottom: "6rem",
        }}
      >
        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
          }}
        >
          BONUS (The Ultimate Guide Extra)
        </div>
        <a href="/course/faq" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          FREQUENTLY ASKED QUESTIONS
        </a>
        <a href="/course/htsicp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          How To Settle In Canada Promptly
        </a>
        <a href="/course/ica" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          IMPORTANT CANADA ABBREVIATIONS
        </a>
        <a href="/course/lt" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          LANGUAGE TESTING
        </a>
        <a href="/course/stlbrtc" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          SKILLS TO LEARN BEFORE RELOCATING TO CANADA
        </a>
        <a href="/course/tanjc" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          TEER AND NOC JOB CLASSIFICATION
        </a>

        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          Provincial Nomination Program
        </div>
        <a href="/course/ainp1" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          ALBERTA IMMIGRANT NOMINEE PROGRAM 1
        </a>
        <a href="/course/ainp2" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          ALBERTA IMMIGRANT NOMINEE PROGRAM 2
        </a>
        <a href="/course/bcpp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          BRITISH COLUMBIA PNP PROGRAM
        </a>
        <a href="/course/oinp1" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          ONTARIO IMMIGRANT NOMINEE PROGRAM 1
        </a>
        <a href="/course/oinp2" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          ONTARIO IMMIGRANT NOMINEE PROGRAM 2
        </a>
        <a href="/course/pnp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          PROVINCIAL NOMINATION PROGRAMS
        </a>
        <a href="/course/wpsisic" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          WHAT PROVINCE SHOULD I SETTLE IN CANADA
        </a>

        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          Getting A Sponsored Job
        </div>
        <a href="/course/crac" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          CANADIAN RESUME AND CV
        </a>
        <a href="/course/htcavvtwp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          How To Convert A Visitor Visa To Work Permit
        </a>
        <a href="/course/steayji" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          SECRETS TO EXCEL AT YOUR JOB INTERVIEWS
        </a>
        <a href="/course/tazosajic" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          THE A - Z OF SECURING A JOB IN CANADA
        </a>

        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          Canadian Federal Pathways
        </div>
        <a href="/course/cec" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          CANADIAN EXPERIENCE CLASS
        </a>
        <a href="/course/fsw" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          FEDERAL SKILLED WORKER
        </a>
        <a href="/course/tfstp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          THE FEDERAL SKILLED TRADES PROGRAM
        </a>

        <div
          style={{
            background: "black",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.3rem",
            marginTop: "2rem",
          }}
        >
          All About Visitor's Visa
        </div>
        <a href="/course/htcvvtwp" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          How To Convert Visitor Visa To Work Permit
        </a>
        <a href="/course/tcbocvv" className="pdfLink">
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ color: "darkred", marginRight: ".3rem" }}
          />{" "}
          THE COMPLETE BREAKDOWN OF CANADA VISITOR'S VISA
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default withDashboardContext(Dashboard);
