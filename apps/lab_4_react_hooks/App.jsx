import "./index.css";
import { useContext } from "react";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import { ThemeContext } from "./components/ThemeContext";

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme === "dark" ? "app dark-mode" : "app"}>
            <div className="top-bar">
                <button id="theme-btn" onClick={toggleTheme}>
                    {theme === "dark" ? "Світла тема" : "Темна тема"}
                </button>
            </div>

            <div className="page">
                <aside className="sidebar">
                    <div className="profile">
                        <h1>Юлія Балан</h1>
                        <p className="role">SMM спеціаліст</p>
                    </div>

                    <section className="side-section">
                        <h2>Контакти</h2>
                        <p><strong>Телефон:</strong><br />+380662618308</p>
                        <p><strong>Email:</strong><br />balanjulia@gmail.com</p>
                        <p><strong>Місто:</strong><br />Івано-Франківськ</p>
                    </section>

                    <section className="side-section">
                        <h2>Навички</h2>
                        <ul>
                            <li>Ведення Instagram сторінок</li>
                            <li>Створення сторіс та рілс</li>
                            <li>Написання продаючих текстів</li>
                            <li>Комунікація з клієнтами</li>
                            <li>Базове налаштування реклами</li>
                            <li>Створення контент-плану</li>
                        </ul>
                    </section>

                    <section className="side-section">
                        <h2>Мови</h2>
                        <ul>
                            <li>Українська — вільно</li>
                            <li>Англійська — базовий рівень</li>
                        </ul>
                    </section>
                </aside>

                <main className="content">
                    <section className="main-section">
                        <h2>Про мене</h2>
                        <p>
                            Початківець SMM спеціаліст із практичними навичками ведення
                            Instagram-сторінок, створення візуального контенту, написання
                            текстів і комунікації з аудиторією. Вмію оформлювати сторінки,
                            підбирати ідеї для сторіс та рілс, а також працювати на
                            залучення клієнтів через контент.
                        </p>
                    </section>

                    <section className="main-section">
                        <h2>Досвід</h2>
                        <div className="item">
                            <div className="item-top">
                                <h3>SMM / ведення сторінки клінінгової компанії</h3>
                                <span>2025 – 2026</span>
                            </div>
                            <p>
                                Створення контенту для Instagram, написання текстів для постів
                                і сторіс, підбір ідей для відео "до/після", комунікація з
                                клієнтами в директі та допомога в просуванні послуг.
                            </p>
                        </div>
                    </section>

                    <section className="main-section">
                        <h2>Освіта</h2>
                        <div className="item">
                            <div className="item-top">
                                <h3>Студентка 3 курсу НУ «Львівська політехніка»</h3>
                                <span>теперішній час</span>
                            </div>
                            <p>
                                Навчаюся за спеціальністю "Кібербезпека"
                            </p>
                        </div>
                    </section>

                    <section className="main-section">
                        <h2>Додатково</h2>
                        <p>
                            Цікавлюся SMM, створенням візуального контенту, просуванням
                            послуг у соцмережах та розвитком особистого бренду.
                        </p>
                    </section>

                    <Reviews />
                </main>
            </div>

            <Footer />
            <ContactForm />
        </div>
    );
}

export default App;