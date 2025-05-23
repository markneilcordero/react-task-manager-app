import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ChatWidget from "../components/chat/ChatWidget";

import ExportDataCard from "../components/settings/ExportDataCard";
import ImportDataCard from "../components/settings/ImportDataCard";
import ResetAppCard from "../components/settings/ResetAppCard";

// Optional: Toasts and File Input
// import ToastNotification from "../components/common/ToastNotification";
// import FileInputHidden from "../components/settings/FileInputHidden";

export default function SettingsPage() {
  return (
    <>
      <Navbar />
      <main className="container py-5">
        <h2 className="text-center mb-4">App Settings</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <ExportDataCard />
          </div>

          <div className="col-md-6">
            <ImportDataCard />
          </div>

          <div className="col-md-12">
            <ResetAppCard />
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
