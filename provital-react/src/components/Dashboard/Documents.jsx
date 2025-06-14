import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faUpload, faFile } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      // Simulate fetching documents for static site
      const staticDocuments = [
        {
          id: 1,
          file_name: 'Document1.pdf',
          description: 'Uploaded document: Document1.pdf',
          uploaded_at: '2023-10-01T10:00:00Z',
          file_path: 'documents/user123/1664617200000.pdf'
        },
        {
          id: 2,
          file_name: 'Document2.jpg',
          description: 'Uploaded document: Document2.jpg',
          uploaded_at: '2023-09-15T10:00:00Z',
          file_path: 'documents/user123/1663245600000.jpg'
        }
      ];

      setDocuments(staticDocuments);
    } catch (error) {
      setError('Error fetching documents');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // Simulate file upload for static site
      const newDocument = {
        id: documents.length + 1,
        file_name: file.name,
        description: `Uploaded document: ${file.name}`,
        uploaded_at: new Date().toISOString(),
        file_path: `documents/user123/${Date.now()}.${file.name.split('.').pop()}`
      };

      setDocuments([...documents, newDocument]);
      event.target.value = ''; // Reset file input
    } catch (error) {
      setError('Error uploading document');
      console.error('Error:', error);
    } finally {
      setUploading(false);
    }
  };

  const downloadDocument = async (filePath, fileName) => {
    // Simulate document download
    const url = URL.createObjectURL(new Blob());
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (loading) return <div className="dashboard-content">Loading...</div>;
  if (error) return <div className="dashboard-content error">{error}</div>;

  return (
    <div className="dashboard-content">
      <h2>Documents</h2>
      
      <div className="documents-container">
        <div className="upload-section">
          <h3>Upload New Document</h3>
          <div className="upload-area">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileUpload}
              disabled={uploading}
              accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
            />
            <label htmlFor="file-upload" className="upload-btn">
              <FontAwesomeIcon icon={faUpload} />
              {uploading ? 'Uploading...' : 'Choose File'}
            </label>
          </div>
        </div>

        <div className="documents-list">
          <h3>Your Documents</h3>
          {documents.length === 0 ? (
            <p>No documents uploaded yet.</p>
          ) : (
            <div className="documents-grid">
              {documents.map((doc) => (
                <div key={doc.id} className="document-card">
                  <div className="document-icon">
                    <FontAwesomeIcon icon={faFile} size="2x" />
                  </div>
                  <div className="document-info">
                    <h4>{doc.file_name}</h4>
                    <p>{doc.description}</p>
                    <p className="upload-date">
                      Uploaded: {new Date(doc.uploaded_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="document-actions">
                    <button
                      onClick={() => downloadDocument(doc.file_path, doc.file_name)}
                      className="action-btn download-btn"
                      title="Download"
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;
