import { useEffect, useState } from "react";

export default function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => response.json())
            .then(data => {
                setComments(data);
            })
            .catch(error => console.log("Помилка завантаження:", error));
    }, []);

    return (
        <section className="main-section">
            <h2>Відгуки роботодавців</h2>

            <div className="reviews-list">
                {comments.map((comment) => (
                    <div className="review-card" key={comment.id}>
                        <h4>{comment.name}</h4>
                        <p><b>{comment.email}</b></p>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}