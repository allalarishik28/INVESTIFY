import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/api/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            alert("Login successful");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
