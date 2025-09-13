import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Welcome.css";

function Welcome() {
  const [selected, setSelected] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { category, setCategory, name, setName } = useAuth();

  // Page load par agar values hain to auto set
  useEffect(() => {
    if (name) setUsername(name);
    if (category) setSelected(category);
  }, [name, category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Please enter your name!");
      return;
    }
    if (selected) {
      setCategory(selected);
      setName(username);

      if (selected.toLowerCase() === "owner") navigate("/owner");
      else if (selected.toLowerCase() === "shelter") navigate("/shelter");
      else if (selected.toLowerCase() === "veterinarian") navigate("/veterinarian");
    } else {
      alert("Please select a category first!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9f5f0 0%, #ffe6e1 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div className="card">
        {/* Image */}
        <div className="imageWrapper">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Cute pet icon"
            className="petImage"
          />
        </div>

        {/* Titles */}
        <h2 className="title">Welcome to FurEver Care</h2>
        <p className="subtitle">Your Trusted Companion for All Things Pet Care</p>
        <p className="loveText">They Deserve Forever Love</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="label">
            Enter Your Name:
          </label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
            required
            className="input"
          />

          <label className="categoryLabel">
            Select the user category you belong to:
          </label>

          {[
            { id: "owner", label: "Pet Owner", value: "owner" },
            { id: "vet", label: "Veterinarian", value: "veterinarian" },
            { id: "shelter", label: "Animal Shelter / Rescue Volunteer", value: "shelter" },
          ].map(({ id, label, value }) => (
            <div
              key={id}
              className="radioWrapper"
              onClick={() => setSelected(value)}
            >
              <input
                type="radio"
                id={id}
                name="category"
                value={value}
                checked={selected === value}
                onChange={() => setSelected(value)}
                required
                className="radioInput"
              />
              <label htmlFor={id} className="radioLabel">
                {label}
              </label>
            </div>
          ))}

          <button type="submit" className="submitButton">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Welcome;
