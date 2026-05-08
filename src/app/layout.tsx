/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./css/bootstrap.css";
import "./css/style.css";
import "./css/droopmenu.css";
import "./css/font-awesome.min.css";
import "./css/animate.css";
// import "./css/owl.carousel.css"
// import "./css/owl.theme.css"

import "./css/ionicons.css";
import "./css/hr-timePicker.min.css";

import "./css/jquery.fancybox.min.css";

import Header from "./components/header";
import { Footer } from "./components/Footer";
import Head from "next/head";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Academy Of Doctorates",
  description: "Global Academy Of Doctorates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1.0,user-scalable=0"
        />
        <title>Global Academy</title>
        {/*  <link href="static/css/bootstrap.css" rel="stylesheet" />
        <link href="static/css/style.css" rel="stylesheet" /> */}
        <link
          href="css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="css/animate.css" type="text/css" />
        <link href="css/owl.carousel.css" rel="stylesheet" />
        <link href="css/owl.theme.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/jquery.fancybox.css" type="text/css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css"
        />
        {/* Font Icons CSS */}
        <link rel="stylesheet" href="css/ionicons.css" />
        {/* Droopmenu CSS */}
        <link rel="stylesheet" href="css/droopmenu.css" />
        <link rel="stylesheet" href="css/hr-timePicker.min.css" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <link rel="shortcut icon" type="image/png" href="images/favicon.ico" />
        <link rel="stylesheet" href="css/jquery.fancybox.css" type="text/css" />
        <link
          rel="stylesheet"
          href="css/jquery.fancybox.min.css"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
        {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
        {/*[if lt IE 9]>


    <![endif]*/}
      </head>
      <>
        <body className={inter.className} suppressHydrationWarning={true}>
          {/* <Header/> */}
          <Suspense fallback={<Loading />}>{children}</Suspense>
          {/* <Footer /> */}
        </body>
      </>
    </html>
  );
}
