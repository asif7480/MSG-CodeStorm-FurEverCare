import React, { useRef, useState } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import './Feedback.css' // keep your existing CSS

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [successMsg, setSuccessMsg] = useState('')
  const formRef = useRef(null)

  // Strong regex patterns (same as before)
  const regex = {
    name: /^[A-Za-z\s]{3,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
    message: /^.{10,500}$/,
  }

  // helper: set native validation message for an element
  const setNativeError = (el, message) => {
    if (!el) return
    el.setCustomValidity(message || '')
    // show tooltip if there's a message (useful if called on blur)
    // IMPORTANT: don't call reportValidity on every keystroke (we call it on submit or blur)
  }

  // live onInput handler: updates state and sets native validity message (but does not force tooltip)
  const handleInput = (e) => {
    const { id, value, validity } = e.target
    setFormData((p) => ({ ...p, [id]: value }))

    // Decide message
    let msg = ''
    if (id === 'name') {
      if (!value.trim()) msg = 'Name is required.'
      else if (!regex.name.test(value.trim())) msg = 'Name must be 3–50 letters (A–Z).'
    }

    if (id === 'email') {
      if (!value.trim()) msg = 'Email is required.'
      else if (!regex.email.test(value.trim())) msg = 'Please enter a valid email address.'
    }

    if (id === 'message') {
      if (!value.trim()) msg = 'Message is required.'
      else if (!regex.message.test(value)) msg = 'Message must be 10–500 characters.'
    }

    // set native custom validity (this will be used by browser native tooltip)
    setNativeError(e.target, msg)
    // We DO NOT call e.target.reportValidity() here to avoid annoying popups while typing.
    // Instead, rely on reportValidity() on blur/submit to show tooltip.
  }

  // On blur, if invalid, show native tooltip immediately
  const handleBlur = (e) => {
    const { target } = e
    // If invalid (or custom message present) show tooltip
    if (!target.checkValidity()) {
      target.reportValidity()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccessMsg('')

    const formEl = formRef.current
    if (!formEl) return

    // Before final submit, ensure we set custom messages for any empty/invalid fields
    const nameEl = formEl.querySelector('#name')
    const emailEl = formEl.querySelector('#email')
    const messageEl = formEl.querySelector('#message')

    // ensure native errors are set (in case user didn't trigger input events)
    setNativeError(
      nameEl,
      !nameEl.value.trim()
        ? 'Name is required.'
        : !regex.name.test(nameEl.value.trim())
        ? 'Name must be 3–50 letters (A–Z).'
        : ''
    )

    setNativeError(
      emailEl,
      !emailEl.value.trim()
        ? 'Email is required.'
        : !regex.email.test(emailEl.value.trim())
        ? 'Please enter a valid email address.'
        : ''
    )

    setNativeError(
      messageEl,
      !messageEl.value.trim()
        ? 'Message is required.'
        : !regex.message.test(messageEl.value)
        ? 'Message must be 10–500 characters.'
        : ''
    )

    // This will show the first invalid field's native tooltip (if any)
    if (!formEl.reportValidity()) {
      // invalid — browser already showed message
      return
    }

    // All good — perform submission (replace with real API call)
    // No alert; show success message inside the page
    // Simulate submit:
    setTimeout(() => {
      console.log('Feedback submitted', formData)
      setSuccessMsg('Thanks! Your feedback has been submitted.')
      setFormData({ name: '', email: '', message: '' })

      // Clear any lingering customValidity messages
      setNativeError(nameEl, '')
      setNativeError(emailEl, '')
      setNativeError(messageEl, '')
    }, 500)
  }

  return (
    <Layout>
      <Hero
        title={`Feedback`}
        description={`We value your feedback! Please let us know how we can improve our services.`}
        btnLink={``}
      />

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section">
        <div className="feedback-container">
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            {/* success message (inline) */}
            {successMsg && <div className="alert alert-success mb-3">{successMsg}</div>}

            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input
                id="name"
                type="text"
                className="form-control rounded-3"
                placeholder="Enter your name"
                value={formData.name}
                onInput={handleInput}
                onBlur={handleBlur}
                
                // pattern is optional; we rely on customValidity for message
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-control rounded-3"
                placeholder="Enter your email"
                value={formData.email}
                onInput={handleInput}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Your Feedback</label>
              <textarea
                id="message"
                className="form-control rounded-3"
                rows={5}
                placeholder="Write your feedback here..."
                value={formData.message}
                onInput={handleInput}
                onBlur={handleBlur}
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-submit-feedback">Submit Feedback</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Feedback
