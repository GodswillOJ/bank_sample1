"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sidebar2 } from "@/components/ui/Sidebar";
import TotalBalanceBox from "@/components/ui/dashboard/totalBalanceBox";
import { Box } from "@mui/material";
import RightSidebar from "@/components/ui/dashboard/RightSidebar";
import RecentTransactions from "@/components/ui/dashboard/RecentTransactions";
import PaymentHistory from "@/components/ui/dashboard/paymentHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TransferFunds from "@/components/ui/dashboard/transferFund";
import ContactUs from "@/components/ui/contactUs";
import LifeStyle from "@/components/ui/dashboard/lifeStyle";
import Services from "@/components/ui/dashboard/services";
import { Footer2 } from "@/components/ui/footer";
import BuyData from "@/components/ui/dashboard/BuyData";
import PayBills from "@/components/ui/dashboard/Paybills";

interface Transaction {
  date: string;
  time: string;
  description: string;
  amount: string;
  balance: string;
  location: string;
  transactionId: string;
  category: string; // Add this property
}


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState("dashboard"); // Active content state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [totalCurrentBalance, setTotalCurrentBalance] = useState(1000); // Example initial balance
  const [accounts, setAccounts] = useState([
    { name: 'Bank 1', balance: 7250 },
    { name: 'Bank 2', balance: 12820 },
    { name: 'Bank 3', balance: 3755 },
  ]);
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Explicitly typed as Transaction[]
  const router = useRouter();

  // const mockTransactions = transactions;

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/sign-in");
    } else {
      setIsLoggedIn(true);
    }
  
    const fetchTransactions = async () => {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
  
      if (data.length > 0) {
        const lastTransaction = data[data.length - 1];
        setTotalCurrentBalance(
          parseFloat(lastTransaction.balance.replace('£', '').replace(',', ''))
        );
      }
    };
  
    fetchTransactions();
  }, [router, setTransactions, setTotalCurrentBalance]);
  

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/sign-in");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addTransaction = (transaction: Transaction) => {
    console.log("New Transaction:", transaction);
  
    // Calculate updated balance for the new transaction
    const lastBalance = transactions.length
      ? parseFloat(transactions[transactions.length - 1].balance.replace('£', '').replace(',', ''))
      : totalCurrentBalance;
  
    const transactionAmount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ''));
    const updatedBalance = lastBalance + transactionAmount;
  
    // Format the updated balance to currency format
    transaction.balance = `£${updatedBalance.toFixed(2)}`;
  
    // Update state
    setTransactions((prev) => [...prev, transaction]);
    setTotalCurrentBalance(updatedBalance);
  
    // Update specific account balance if location matches
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.name === transaction.location
          ? { ...account, balance: account.balance + transactionAmount }
          : account
      )
    );
  };
  

  // Mock user data
  const user = {
    username: "George",
    lastName: "tusk",
    email: "george_tusk@gmail.com",
    phone: "+1 234 567 890",
    address: "1234 Elm Street, Springfield, USA",
    joinedDate: "2023-06-15",
  };

  // Render content based on the active component
  const renderContent = () => {
    switch (activeComponent) {
      case "profile":
        return (
          <div className="m-4">
            {/* Breadcrumbs Section */}
            <Box className="breadcrumbs" sx={{ display: "flex", alignItems: "center", padding: "8px 16px", backgroundColor: "", borderRadius: 1 }}>
              <div className="breadcrumbs__content">
                <span property="itemListElement" typeof="ListItem">
                  <Link property="item" typeof="WebPage" title="Go to Home." href="https://www.sc.com/en" className="home">
                      <span style={{ color: "#2563eb" }} property="name text-2xl font-bold mb-4">Welcome, </span>
                  </Link>
                </span>
                <span property="itemListElement" typeof="ListItem">
                  <span property="name" className="post post-page current-item" style={{ color: "#fff", fontWeight: "bold" }}>
                    {user.username}
                  </span>
                </span>
              </div>
            </Box>
            <div className="bg-gray-100 shadow-lg flex flex-col items-center">
              <TotalBalanceBox 
                accounts={accounts} 
                totalBanks={accounts.length} 
                totalCurrentBalance={totalCurrentBalance} 
              />
              <div className="w-full border-t border-gray-300 mt-4 pt-4">
                <p>
                  <strong>Joined Date:</strong> {user.joinedDate}
                </p>
              </div>
            </div>
          </div>
        );
      case "paymentHistory":
        return <PaymentHistory transactions={transactions} totalCurrentBalance={totalCurrentBalance} />        
      case "transferFunds":
        return <TransferFunds totalCurrentBalance={totalCurrentBalance} setTotalCurrentBalance={setTotalCurrentBalance} addTransaction={addTransaction} />;
      case "lifeStyle":
        return <LifeStyle />;
      case "services":
        return <Services />;
      case "contactUs":
        return <ContactUs />;
      case "BuyData":
        return <BuyData />;
      case "PayBills":
        return <PayBills />;
      case "dashboard":
      default:
        return (
          <>
            {isLoggedIn ? (
              <>
                <Box className="breadcrumbs" sx={{ display: "flex", alignItems: "center", padding: "8px 16px", backgroundColor: "", borderRadius: 1 }}>
                  <div className="breadcrumbs__content">
                    <span property="itemListElement" typeof="ListItem">
                      <Link property="item" typeof="WebPage" title="Go to Home." href="/" className="home">
                          <span style={{ color: "#2563eb" }} property="name">Home</span>
                      </Link>
                    </span>
                    <span className="text-white">&nbsp;&gt;&nbsp;</span>
                    <span property="itemListElement" typeof="ListItem">
                      <span property="name" className="post post-page current-item" style={{ color: "#fff" }}>
                        transactions
                      </span>
                    </span>
                  </div>
                </Box>
                <TotalBalanceBox accounts={accounts} totalBanks={accounts.length} totalCurrentBalance={totalCurrentBalance} />
                <RecentTransactions setActiveComponent={setActiveComponent} />
                <button onClick={() => setActiveComponent("paymentHistory")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  View Payment History
                </button>
              </>
            ) : (
              <p>Redirecting to sign-in...</p>
            )}
          </>
        );
    }
  };

  return (
    <div className="
    dashboard_main
    flex h-screen" 
    style={{ height: "100%" }}
    >
      <Sidebar2 isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} setActiveComponent={setActiveComponent} handleLogout={handleLogout} />
      <div className={`flex-1 w-64 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-0"} lg:mr-64`}>
        <div id="Dash_nav" style={{ margin: "0", width: "100%", padding: "16px" }} className="flex items-center justify-between">
          <button onClick={toggleSidebar} className="text-white pl-4 text-xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button onClick={handleLogout} className="log_out">Logout</button>
        </div>
        <main className="p-8 flex-1" style={{  borderRadius: "20px", margin: "2rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          {renderContent()}
        </main>
        <Footer2 />
      </div>
      <RightSidebar user={user} />
    </div>
  );
};

export default Dashboard;
