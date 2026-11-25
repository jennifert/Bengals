import "@picocss/pico/css/pico.min.css";
import "../css/style.css";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
    title: "Bengal Fan Page",
    description: "A fun, accessible fan site dedicated to Bengal cats.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <a href="#main-content" className="skip-link">
            Skip to main content
        </a>

        <Header />

        <main id="main-content" className="container">
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}