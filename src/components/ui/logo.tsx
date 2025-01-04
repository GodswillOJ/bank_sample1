import React, { useState } from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft
 } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <svg
        className="site-branding__logo--full"
        viewBox="0 0 1512 512"
        role="img"
        aria-labelledby="fa-logo"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="fa-logo">Font Awesome Logo</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="icon-part-green"
          d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0z"
          fill="#38D200"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="icon-part-blue"
          d="M128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          fill="#0473EA"
        ></path>
        <text
          className="logo-lettering"
          x="128"
          y="400"
          fontFamily="SC Prosper Sans, sans-serif"
          fontSize="16"
          fill="#fff"
        >
          <tspan x="140" dy="16">Font</tspan>
          <tspan x="140" dy="18">Awesome</tspan>
        </text>
      </svg>

    </div>
  );
};

const Logo2 = () => {
  return (
    <div>
      <svg
        className="site-branding__logo--full"
        viewBox="0 0 1512 512"
        role="img"
        aria-labelledby="fa-logo"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="fa-logo">Font Awesome Logo</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="icon-part-green"
          d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0z"
          fill="#38D200"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="icon-part-blue"
          d="M128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          fill="#ef9935"
        ></path>
        <text
          className="logo-lettering2"
          x="45"
          y="205"
          fontFamily="SC Prosper Sans, sans-serif"
          fill="#ef9935"
        >
          <tspan x="500" dy="106">
            next
          </tspan>
          <tspan x="500" dy="150">
            bank
          </tspan>
        </text>
      </svg>

    </div>
  )
}

const Logo3 = () => {
  return (
    <div>
    <svg
      className="site-branding__logo--full"
      viewBox="0 0 1512 512"
      role="img"
      aria-labelledby="fa-logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="fa-logo">Font Awesome Logo</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="icon-part-green"
        d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0z"
        fill="#38D200"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="icon-part-blue"
        d="M128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        fill="#0473EA"
      ></path>
      <text
        className="logo-lettering"
        x="128"
        y="400"
        fontFamily="SC Prosper Sans, sans-serif"
        fontSize="16"
        fill="#000"
      >
        <tspan x="140" dy="16">Font</tspan>
        <tspan x="140" dy="18">Awesome</tspan>
      </text>
    </svg>

  </div>
  )
}


const BOX2 = () => {
  const [activeList, setActiveList] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveList(activeList === index ? null : index); // Toggle active state
  };

  const listItems2 = [
    {
      title: "Monitoring",
      content:
        "Banking systems and transactions are continuously monitored by our security team to detect and respond to any threats.",
    },
    {
      title: "Securing your account",
      content:
        "We give you the option to configure SMS and email alerts to stay informed when important account information changes or transactions are made.",
    },
    {
      title: "Using strong passwords",
      content:
        "eStatements enable you to keep track of all your transactions easily and efficiently. All eStatement data is encrypted during transportation.",
    },
    {
      title: "Secure transfers and bill payments",
      content:
        "Two-Factor Authentication (2FA) is required for adding new payees, completing bill payments, or performing fund transfers.",
    },
    {
      title: "Protecting your mobile device",
      content:
        "Get tips on securing your mobile devices from unauthorized access and malicious software.",
    },
  ];

  return (
    <Box className="Box_2">
      <ul className="list_ul">
        <div className="main-content-container">
            <div className="image-container">
              <Image src="/icons/images0.png" alt="Online security" width={400} height={300} className="image" />
            </div>
            <div className="text-container">
              <h2>Online security</h2>
              <p>We are committed to helping our customers manage their money safely on the go. Discover some of the measures you can take to safeguard your account information when using your mobile phone:</p>
            </div>
          </div>

        {listItems2.map((item, index) => (          
          <li key={index} className="li">
            <div className="li-content">
              <span>{item.title}</span>
              <button onClick={() => handleClick(index)} className="arrow-button">
                <FontAwesomeIcon icon={faHandPointLeft} />
              </button>
            </div>
            {activeList === index && (
              <div className="sub-container">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

const BOX3 = () => {

  return (
    <Box className="Box_2">
      <ul className="list_ul">
        <div className="main-content-container" style={{
          display: "block"
        }}>
            <Box sx={{
              display: "flex"
            }}>
              <div className="image-container">
                <Image src="/icons/images0.png" alt="Online security" width={400} height={300} className="image" />
              </div>
              <div className="text-container">
                <h2>We are here to protect you:</h2>
                <p>Scammers use a variety of tactics to trick potential victims into revealing sensitive information, making fraudulent payments or allowing unauthorised access to accounts.</p>
              </div>
            </Box>
            <Box sx={{
              display: "block"
            }}>
              <div className="text-container">
                <h2>Reporting social engineering threats</h2>
                <p>If you have received a suspicious email (phishing), call (vishing) or text message (smishing) targeting you as a customer of Standard Chartered, or identified a suspicious social media account claiming to represent Standard Chartered, report it to us immediately by emailing phishing@sc.com. In your report, please share as many details as you can to help us with our investigations e.g., sender details, attachments, screenshots and links.</p>
              </div>

              <div className="text-container">
                <h2>Reporting other security concerns</h2>
                <p>For anything urgent (e.g., to report a suspected fraudulent transaction), call us immediately using the number on the back of your bank card. To report any security issues related to our online services and applications, please contact security@sc.com.</p>
              </div>
            </Box>
          </div>
      </ul>
    </Box>
  );
};

const BOX4 = () => {
  const [activeList, setActiveList] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveList(activeList === index ? null : index); // Toggle active state
  };

  const listItems2 = [
    {
      title: "Enable personal firewalls",
      content:
        "Personal firewalls will ensure the right data goes to the right places and keep unwanted connections from accessing your personal information.",
    },
    {
      title: "Turn on password protection",
      content:
        "Lock your machine when you’re stepping away from your computer or configure a password-protected screensaver to be activated after a few minutes of inactivity.",
    },
    {
      title: "Install anti-virus and malware scanning",
      content:
        "eStatements enable you to keep track of all your transactions easily and efficiently. All eStatement data is encrypted during transportation.",
    },
    {
      title: "Secure transfers and bill payments",
      content:
        "Anti-virus/malware protection solutions are key in securing your computer from online threats. Always update your anti-virus software with the latest version.",
    }
  ];

  return (
    <Box className="Box_2">
      <ul className="list_ul">
        <div className="main-content-container">
            <div className="image-container">
              <Image src="/icons/image9.png" alt="Online security" width={400} height={300} className="image" />
            </div>
            <div className="text-container">
              <h2>Keeping your security safe</h2>
              <p>We are committed to helping our customers manage their money safely on the go. Discover some of the measures you can take to safeguard your account information when using your mobile phone:</p>
            </div>
          </div>

        {listItems2.map((item, index) => (          
          <li key={index} className="li">
            <div className="li-content">
              <span>{item.title}</span>
              <button onClick={() => handleClick(index)} className="arrow-button">
              <FontAwesomeIcon icon={faHandPointLeft} />
              </button>
            </div>
            {activeList === index && (
              <div className="sub-container">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

const BOX5 = () => {
  const [activeList, setActiveList] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveList(activeList === index ? null : index); // Toggle active state
  };

  const listItems2 = [
    {
      title: "Monitoring",
      content:
        "Banking systems and transactions are continuously monitored by our security team to detect and respond to any threats.",
    },
    {
      title: "Securing your account",
      content:
        "We give you the option to configure SMS and email alerts to stay informed when important account information changes or transactions are made.",
    },
    {
      title: "Using strong passwords",
      content:
        "eStatements enable you to keep track of all your transactions easily and efficiently. All eStatement data is encrypted during transportation.",
    },
    {
      title: "Secure transfers and bill payments",
      content:
        "Two-Factor Authentication (2FA) is required for adding new payees, completing bill payments, or performing fund transfers.",
    },
    {
      title: "Protecting your mobile device",
      content:
        "Get tips on securing your mobile devices from unauthorized access and malicious software.",
    },
  ];

  return (
    <Box className="Box_2">
      <ul className="list_ul">
        <div className="main-content-container">
            <div className="image-container">
              <Image src="/icons/images8.png" alt="Online security" width={400} height={300} className="image" />
            </div>
            <div className="text-container">
              <h2>Online security</h2>
              <p>We are committed to helping our customers manage their money safely on the go. Discover some of the measures you can take to safeguard your account information when using your mobile phone:</p>
            </div>
          </div>

        {listItems2.map((item, index) => (          
          <li key={index} className="li">
            <div className="li-content">
              <span>{item.title}</span>
              <button onClick={() => handleClick(index)} className="arrow-button">
              <FontAwesomeIcon icon={faHandPointLeft} />
              </button>
            </div>
            {activeList === index && (
              <div className="sub-container">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export {Logo2, Logo, Logo3, BOX2, BOX3, BOX4, BOX5}