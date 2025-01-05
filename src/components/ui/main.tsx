"use client"; // Ensure this component is rendered only on the client

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faHandPointLeft
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BOX2, BOX3, BOX4, BOX5 } from "./logo";
import Link from "next/link";

library.add(faAngleDown); // Register the icon in the library

const Main = () => {
  // const theme = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const securityTips = [
    { src: "/icons/bank-transfer.svg", alt: "Fast transfers", text: "Make reliable and seemless transfers" },
    { src: "/icons/transfer-2.png", alt: "Quick connections", text: "Logout after use" },
    { src: "/icons/sign-1.png", alt: "Contact Standards", text: "Contact standard security support" },
  ];

  if (!isClient) return null; // Prevent server-side rendering issues

  return (
<Box
  sx={{
    position: "relative",
    display: "block",
    paddingBottom: "4rem",
    minHeight: { xs: "150vh", sm: "120vh", md: "100vh" },
    backgroundColor: "#fff",
  }}
>
  {/* Breadcrumbs Section */}
  <Box
    className="breadcrumbs"
    sx={{
      display: "flex",
      alignItems: "center",
      padding: "8px 16px",
      backgroundColor: "",
      borderRadius: 1,
      justifyContent: { xs: "center", md: "flex-start" },
    }}
  >
    <div className="breadcrumbs__content">
      <span property="itemListElement" typeof="ListItem">
        <Link
          property="item"
          typeof="WebPage"
          title="Go to Home."
          href="/"
          className="home"
        >
          <span
            style={{
              color: "#2563eb",
            }}
            property="name"
          >
            Home
          </span>
        </Link>
      </span>
      &nbsp;&gt;&nbsp;
      <span property="itemListElement" typeof="ListItem">
        <span
          property="name"
          className="post post-page current-item"
          style={{ color: "#525355" }}
        >
          Global Security Tips
        </span>
      </span>
    </div>
  </Box>

  {/* Header Section */}
{/* Header Section */}
<Box
  sx={{
    marginTop: "16px",
    marginBottom: "8px",
    color: "#525355",
    textAlign: { xs: "center", md: "left" },
    padding: { xs: "0 1rem", sm: "0 2rem" }, // Padding for better spacing on smaller screens
  }}
>
  <Typography
    variant="h2"
    sx={{
      fontWeight: "bold",
      paddingLeft: { xs: "0", md: "20px" },
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
    }}
  >
    The best online banking
  </Typography>

  {/* Tips Section */}
  <Box
    sx={{
      display: "flex",
      justifyContent: { xs: "center", md: "space-between" },
      flexDirection: { xs: "column", md: "row" },
      gap: { xs: "2rem", md: "1.5rem" },
      margin: "3.5rem auto",
      width: { xs: "90%", sm: "85%", md: "70%" },
    }}
  >
    {securityTips.map((tip, index) => (
      <Box
        key={index}
        sx={{
          position: "relative",
          textAlign: "center",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "80%", md: "70%" },
            margin: "0 auto",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            className="logo"
            src={tip.src}
            alt={tip.alt}
            layout="responsive" // Ensures the image adapts to the container's width
            width={170}
            height={140}
            style={{
              objectFit: "contain", // Ensures the image maintains its aspect ratio
              borderRadius: "8px", // Adds rounded corners to the image
            }}
          />
        </Box>
        <Typography
          sx={{
            marginTop: "1rem",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            fontWeight: "medium",
            color: "#333",
          }}
        >
          {tip.text}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>


  <SecurityBox />
</Box>

  );
};

export const SecurityBox = () => {
const [active, setActive] = useState<number | null>(null); // Track the main active item
const [activeSubItem, setActiveSubItem] = useState<number | null>(null); // Track active sub-item

const handleClick = (index: number, isSubItem: boolean = false) => {
  if (isSubItem) {
    setActiveSubItem(activeSubItem === index ? null : index); // Toggle sub-item
  } else {
    setActive(index); // Set active for the main list
  }
};

  const listItems = [
    { title: '256-bit encryption', content: "When you perform online banking, your transactions are encrypted to protect against data from being intercepted and stolen by hackers." },
    { title: 'Secure firewall', content: "Our online services are protected by firewalls to safeguard against potential breaches." },
    { title: 'Prompt notification', content: "Customers are notified promptly via SMS to their registered mobile numbers every time a transfer is performed using their online banking account." },
    { title: 'Automatic logouts', content: "Long periods of login inactivity may increase the risk of fraud. We will log you out of your online banking session after 15 minutes of inactivity." },
    { title: 'Web Access Firewall', content: "Standard Chartered uses a Web Access Firewall (WAF) to filter, monitor, and block unwanted HTTP traffic to and from a web application." },
  ];

  const listItems2 = [
    { title: 'Monitoring', content: 'Banking systems and transactions are continuously monitored by our security team to detect and respond to any threats.' },
    { title: 'Securing your account', content: 'We give you the option to configure SMS and email alerts to stay informed when important account information changes or transactions are made.' },
    { title: 'Using strong passwords', content: 'eStatements enable you to keep track of all your transactions easily and efficiently. All eStatement data is encrypted during transportation.' },
    { title: 'Secure transfers and bill payments', content: 'Two-Factor Authentication (2FA) is required for adding new payees, completing bill payments, or performing fund transfers.' },
    { title: 'Protecting your mobile device', content: 'Get tips on securing your mobile devices from unauthorized access and malicious software.' },
  ];

  return (
    <div className="container">
      {/* Navigation menu */}
      <div className="nav-container">
        <ul className="nav-list">
          {['Keeping you safe online', 'Protecting your details', 'Key online threats', 'Securing your mobile', 'Contact us'].map((item, index) => (
            <li key={index} className={`nav-item ${active === index ? 'active-nav-item' : ''}`}>
              <a href={`#${item.replace(/ /g, '').toLowerCase()}`} className="nav-link" onClick={(e) => { e.preventDefault(); handleClick(index); }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Conditional Rendering for Box Containers */}
      <div className="content-container">
        {/* Show Box1 for "Securing your mobile" */}
        {active === 3 && (
        <Box className="Box_1">
          <div className="main-content-container">
            <div className="image-container">
              <Image src="/icons/images2.png" alt="Online security" width={400} height={300} className="image" />
            </div>
            <div className="text-container">
              <h2>Securing your mobile</h2>
              <p>Your security key is our priority. We keep it safe.</p>
            </div>
          </div>

          {/* Ordered list with clickable items */}
          <div className="list-container" style={{
            marginBottom: "4rem"
          }}>
            <ul className="list_ul">
              {listItems.map((item, index) => (
                <li key={index} className="li">
                  <div className="li-content">
                    <span>{item.title}</span>
                    <button onClick={() => handleClick(index, true)} className="arrow-button">
                    <FontAwesomeIcon icon={faHandPointLeft}/>
                    </button>
                  </div>
                  {activeSubItem === index && ( // Only show the sub-container if it's active
                    <div className="sub-container">
                      {item.content.split('\n').map((line, i) => (
                        line.startsWith('-') ? (
                          <ul key={i}><li>{line.slice(1).trim()}</li></ul>
                        ) : (
                          <p key={i}>{line}</p>
                        )
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="main-content-container">
            <div className="image-container">
              <Image src="/icons/images3.png" alt="Monitoring & Alerts" width={400} height={300} className="image" />
            </div>
            <div className="text-container">
              <h2>Monitoring & Alerts</h2>
              <p>We offer 24/7 security to ensure the safety of your account.</p>
            </div>
          </div>

          {/* Ordered list with clickable items */}
          <div className="list-container">
            <ul className="list_ul">
              {listItems2.map((item, index) => (
                <li key={index} className="li">
                  <div className="li-content">
                    <span>{item.title}</span>
                    <button onClick={() => handleClick(index, true)} className="arrow-button">
                    <FontAwesomeIcon icon={faHandPointLeft}/>
                    </button>
                  </div>
                  {activeSubItem === index && ( // Only show the sub-container if it's active
                    <div className="sub-container">
                      {item.content.split('\n').map((line, i) => (
                        line.startsWith('-') ? (
                          <ul key={i}><li>{line.slice(1).trim()}</li></ul>
                        ) : (
                          <p key={i}>{line}</p>
                        )
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
        </Box>
        )}
        {/* Show Box2 for "Securing your details" */}
        {active === 4 && (
          <BOX3/>
        )}

        {/* Show Box2 for "Securing your details" */}
        {active === 2 && (
          <BOX2/>
        )}

        {active === 0 && (
          <BOX4/>
        )}

        {active === 1 && (
          <BOX5/>
        )}
      </div>
    </div>
  );
};

export default Main;
