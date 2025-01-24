import React from 'react';

interface PDFViewerProps {
  file: File;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  const url = URL.createObjectURL(file);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden">
      <iframe
        src={url}
        className="w-full h-full"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;