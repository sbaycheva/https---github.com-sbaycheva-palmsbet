import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }) {
    return (
        <>
            <div className={inter.className}>
                <Header />
                {children}
            </div>
        </>
    );
}
