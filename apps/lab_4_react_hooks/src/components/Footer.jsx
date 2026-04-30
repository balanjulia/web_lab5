import { useEffect, useState } from "react";

export default function Footer() {
    const [systemInfo, setSystemInfo] = useState('');

    useEffect(() => {
        const info = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;

        localStorage.setItem('os_browser_info', info);

        const savedData = localStorage.getItem('os_browser_info');

        setSystemInfo(savedData);
    }, []);

    return (
        <footer className="footer">
            <div>
                Системні дані з localStorage:
            </div>

            <div>
                {systemInfo}
            </div>

            <p>
                Юлія Балан © 2026
            </p>
        </footer>
    );
}