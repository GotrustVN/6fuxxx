import React, { useEffect, useState } from 'react';

import TextFileContent from '@/components/TextFileContent';

import SEO from '@/components/SEO';
import SimpleLayout from '@/layouts/SimpleLayout';

const StaticContent = () => {
  const [filename, setFilename] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramFilename = urlParams.get('filename');
    setFilename(paramFilename || 'Terms-and-Conditions.txt');
  }, []);

  return (
    <div>
      <div className="static-text-container">
        <div className="static-text">
          <TextFileContent filename={filename} />
        </div>
      </div>
      <div className='static-text-space'>
      </div>
    </div>
  );
};

export default StaticContent;

StaticContent.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <SimpleLayout>{page}</SimpleLayout>
    </>
  );
};
