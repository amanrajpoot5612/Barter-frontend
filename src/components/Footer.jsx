const Footer = ({footerInfo}) => {
  const quickLinks = footerInfo.sections.find(s => s.heading === "Quick Links");
  const contact = footerInfo.sections.find(s => s.heading === "Contact Us");
  const socials = footerInfo.sections.find(s => s.heading === "Socials");
  const company = footerInfo.sections.find(s => s.heading === "Our Company");

  return (
    <div className="bg-gray-300 flex flex-col p-5">
      <div className="upper-container-footer flex pb-6">
        <div className="upper-left-img-section flex-1 p-5">
          <img src={footerInfo.logo} alt="Footer Logo" className="max-w-2/3 rounded-2xl"/>
        </div>
        <div className="upper-right-footer-section flex-1 flex flex-col gap-6 p-6">
          <div className="footer-company-name text-5xl uppercase">
            <h1>{footerInfo.companyName}</h1>
          </div>
          <div className="footer-info flex gap-6 pt-3.5">
            {/* Quick Links */}
            <div className="heading-1 quick-links gap-6">
              <h4 className="font-extrabold text-3xl pb-5">{quickLinks.heading}</h4>
              <ul>  
                {quickLinks.items.map((item, i) => (
                  <li className="p-1.5 font-medium" key={i}><a href={item.link}>{item.name}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="contact-us gap-6">
              <h4 className="font-extrabold text-3xl pb-5">{contact.heading}</h4>
              <ul>
                {contact.items.map((item, i) => (
                  <li className="p-1.5 font-medium" key={i}>{item.value}</li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="socials gap-6">
              <h4 className="font-extrabold text-3xl pb-5">{socials.heading}</h4>
              <ul>
                {socials.items.map((item, i) => (
                  <li className="p-1.5 font-medium" key={i}>
                    <a href={item.link} className="flex items-center gap-2">
                      {item.icon} {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lower container */}
      <div className="lower-container-footer flex gap-10 w-full justify-start">
        <div className="lower-footer-1">
          <h4 className="font-extrabold text-3xl pb-5">{company.heading}</h4>
          <ul>
            {company.items.map((item, i) => (
              <li className="p-1.5 font-medium" key={i}><a href={item.link}>{item.name}</a></li>
            ))}
          </ul>
        </div>

        <div className="lower-footer-2 flex items-end h-full w-full gap-2 mt-auto ml-auto">
          <div className="lower-left-section font-bold">
            <h6>{footerInfo.bottom.left}</h6>
          </div>
          <div className="lower-right-section">
            <h6>{footerInfo.bottom.right}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
