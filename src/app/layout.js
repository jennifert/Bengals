import "@picocss/pico/css/pico.min.css";

export const metadata = {
    title: "Bengal Fan Page",
    description: "A fun, accessible fan site dedicated to Bengal cats.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}