import React, { useState } from "react";
import "./design.css";

function DesignRepository() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // state variable to track form submission

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("/upload-design", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("We'll review the design and get back to you.");
      } else {
        setUploadStatus("We'll review the design and get back to you.");
      }
    } catch (error) {
      console.error(error);
      setUploadStatus("Upload failed.");
    }

    setFormSubmitted(true); // set formSubmitted to true after submission
  };

  return (
    <div className="repo">
      <div className="design-repository">
        <h2>Upload Your Design</h2>
        {!formSubmitted && (
          <div>
            <p>Upload your custom design here to have it printed!</p>
            <input type="file" onChange={handleFileUpload} />
            <button onClick={handleUpload}>Upload</button>
          </div>
        )}
        {formSubmitted && <p>Upload submitted.</p>}
        {uploadStatus && <p>{uploadStatus}</p>}
        <p>
          By uploading your design, you certify that you have the right to use
          and distribute the design, and that it does not violate any
          intellectual property rights.
        </p>
      </div>
      <div className="D-contact">
        <a href="/contact">Request Assistance</a>
      </div>
    </div>
  );
}

export default DesignRepository;
