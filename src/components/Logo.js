import React from 'react';

const logo = () => {
    return (
        <div className="logo">
        {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
        <img src="/tennismoments.png" alt="tennismomemts" />
        
      </div>
    );
};

export default logo;