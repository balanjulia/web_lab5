import { useEffect, useState } from "react";

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box">

                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    ✖
                </button>

                <h3>Зворотній зв’язок</h3>

                <form action="https://formspree.io/f/mrerppgy" method="POST">
                    <input type="text" name="name" placeholder="Ім'я" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="tel" name="phone" placeholder="Телефон" required />
                    <textarea name="message" placeholder="Повідомлення" required></textarea>

                    <button type="submit">Відправити</button>
                </form>

            </div>
        </div>
    );
}