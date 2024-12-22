import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import AppReduxContext from "@/store/AppReduxContextProvider";
import GlobalLoading from "./GlobalLoading";

const WrapperComponent = ({ children }: { children: React.ReactNode }) => {

    return (
        <AppReduxContext>
            <div className="min-h-screen bg-gray-100 overflow-hidden grid">
                <Header />
                <div className="flex h-[calc(100vh-125px)]">
                    <Sidebar />
                    <main className="flex-1 p-5 relative text-[#191919]">
                        {children}
                        <GlobalLoading />
                    </main>
                </div>
                <Footer />
            </div>
        </AppReduxContext>
    );
};

export default WrapperComponent;
