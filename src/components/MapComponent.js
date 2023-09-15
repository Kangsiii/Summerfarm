import React, { useEffect, useState } from 'react';

function MapComponent() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // HTML 파일을 가져오는 함수
    async function fetchHtmlFile() {
      try {
        const response = await fetch('/test.html'); // HTML 파일의 경로에 맞게 수정하세요.
        if (!response.ok) {
          throw new Error('Failed to fetch HTML file');
        }
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML file:', error);
      }
    }

    fetchHtmlFile();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default MapComponent;
