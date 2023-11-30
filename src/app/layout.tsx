"use client";

import type { Metadata } from "next";
import { store } from "../lib/store";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import "./globals.css";
import "./main.scss";
import Navbar from "./components/Navbar/Navbar";
import { saveState } from "./brouser-storage";
import debounce from "debounce";

const inter = Inter({ subsets: ["latin"] });

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className="body">
          <div className="main-window">
            <Navbar />
            <div className="content">{children}</div>
          </div>
        </body>
      </Provider>
    </html>
  );
}
