import Footer from "./components/Footer";
import Header from "./components/Header";
import withDashboardContext from "./hoc/withDashboardContext";
import { useParams, Link } from "react-router-dom";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const CoursePage = () => {
  const { id } = useParams();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(+1);
  };

  const onDocumentLoadSuccess = ({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void => {
    setNumPages(nextNumPages);
    setPageNumber(1);
  };

  return (
    <div>
      <Header />
      <div
        style={{
          background: "rgb(204,204,204,.5)",
          minHeight: "91vh",
          display: "flex",
          padding: "2rem 2rem",
          flexDirection: "column",
          paddingBottom: "6rem",
        }}
      >
        <div
          style={{
            background: "white",
            minHeight: "250px",
            margin: "0 auto",
            padding: "1rem 2rem",
            marginTop: "5rem"
          }}
        >
          <Link
            to="/dashboard"
            style={{
              color: "red",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            className="backLink"
          >
            {"<"} Back to Course
          </Link>
          <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
            <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              style={{ marginRight: "1rem" }}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
          <Document
            file={`/${id}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
            onContextMenu={(e) => e.preventDefault()}
            className={"pdf-container"}
          >
            <Page pageNumber={pageNumber || 1} />
            {/* {Array.from(new Array(numPages), (_el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))} */}
          </Document>
          <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
            <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button
              type="button"
              style={{ marginRight: "1rem" }}
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withDashboardContext(CoursePage);
