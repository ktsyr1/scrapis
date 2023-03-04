import { useState } from "react";
import axios from "axios";

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/subscribe", { email })
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                console.error(error);
                setMessage("Error subscribing. Please try again later.");
            });
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email address:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Subscribe</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default function Newsletter() {
    return (
        <div>
            <h1>Subscribe to our newsletter</h1>
            <NewsletterForm />
        </div>
    );
}
