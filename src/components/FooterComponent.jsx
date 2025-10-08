import React from 'react';

const FooterComponent = ({footerInfo}) => {
  const quickLinks = footerInfo.sections.find(
    (s) => s.heading === 'Quick Links'
  );
  const contact = footerInfo.sections.find((s) => s.heading === 'Contact Us');
  const socials = footerInfo.sections.find((s) => s.heading === 'Socials');
  const company = footerInfo.sections.find((s) => s.heading === 'Our Company');
  return <div>
    
  </div>;
};

export default FooterComponent;
