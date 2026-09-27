import { useState } from 'react'

function InstagramGlyph() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" aria-label="Instagram">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#ig-grad)" />
      <rect x="10" y="10" width="28" height="28" rx="9" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="24" cy="24" r="7" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="33" cy="15" r="2.2" fill="#fff" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#4599ff" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  )
}

function Field({ label, type, value, onChange }) {
  const [focused, setFocused] = useState(false)
  const floated = focused || value.length > 0
  const isPassword = type === 'password'
  return (
    <div className={`field ${floated ? 'floated' : ''}`}>
      <label className="field-label">{label}</label>
      <input
        className="field-input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  )
}

function HeartOutline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-9.5-9.2C1 8 3.3 4.5 6.8 4.5c2 0 3.6 1.1 5.2 2.9 1.6-1.8 3.2-2.9 5.2-2.9 3.5 0 5.8 3.5 4.3 7.3C19.5 16.4 12 21 12 21z" />
    </svg>
  )
}

function StoryCard({ className, seed }) {
  return (
    <div className={`story ${className}`}>
      <img
        className="story-img"
        src={`https://picsum.photos/seed/${seed}/360/640`}
        alt=""
        loading="eager"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
      <div className="story-progress" />
      <div className="story-footer">
        <div className="reply-pill" />
        <div className="reply-heart"><HeartOutline /></div>
      </div>
    </div>
  )
}

function Collage() {
  return (
    <div className="collage">
      <StoryCard className="story-left" seed="ig-left" />
      <StoryCard className="story-right" seed="ig-right" />
      <StoryCard className="story-mid" seed="ig-mid" />

      <div className="sticker" aria-hidden="true">
        <span>🧑‍🎤</span><span>🍉</span><span>🦊</span>
      </div>

      <div className="cf-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="#fff" width="13" height="13">
          <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.4 5.8 21l1.6-7L2 9.3l7.1-.7z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" width="10" height="10">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      <svg className="big-heart" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="heart-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff6b8a" />
            <stop offset="55%" stopColor="#ff2d55" />
            <stop offset="100%" stopColor="#c8103a" />
          </linearGradient>
        </defs>
        <path
          fill="url(#heart-grad)"
          d="M32 58S6 42 6 22C6 13 13 6 21 6c5 0 9 3 11 7 2-4 6-7 11-7 8 0 15 7 15 16 0 20-26 36-26 36z"
        />
        <ellipse cx="20" cy="17" rx="6" ry="4" fill="#fff" opacity="0.35" transform="rotate(-25 20 17)" />
      </svg>

      <div className="avatar-ring" aria-hidden="true">
        <div className="avatar-inner">
          <img
            src="https://picsum.photos/seed/ig-avatar/120/120"
            alt=""
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const canSubmit = user.trim().length > 0 && pass.length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI clone — no network request is made.
  }

  return (
    <div className="page">
      <div className="left">
        <div className="brand">
          <InstagramGlyph />
        </div>
        <h1 className="headline">
          See everyday moments from your{' '}
          <span className="accent">close friends</span>.
        </h1>
        <Collage />
      </div>

      <div className="right">
        <div className="login-box">
          <h2 className="login-title">Log into Instagram</h2>
          <form onSubmit={handleSubmit}>
            <Field
              label="Mobile number, username or email"
              type="text"
              value={user}
              onChange={setUser}
            />
            <Field
              label="Password"
              type="password"
              value={pass}
              onChange={setPass}
            />
            <button
              type="submit"
              className={`login-btn ${canSubmit ? 'active' : ''}`}
              disabled={!canSubmit}
            >
              Log in
            </button>
          </form>

          <a className="forgot" href="#">Forgot password?</a>

          <button type="button" className="fb-btn">
            <FacebookIcon />
            <span>Log in with Facebook</span>
          </button>

          <button type="button" className="create-btn">Create new account</button>

          <div className="meta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#a8a8a8" aria-hidden="true">
              <path d="M6.5 5C3.46 5 2 8.2 2 12s1.46 7 4.5 7c1.98 0 3.2-1.7 4.3-3.7l.7-1.3.7 1.3c1.1 2 2.32 3.7 4.3 3.7 3.04 0 4.5-3.2 4.5-7s-1.46-7-4.5-7c-1.98 0-3.2 1.7-4.3 3.7L12 8l-.7-1.3C10.2 6.7 8.98 5 6.5 5zm0 2c1.02 0 1.9 1.2 2.8 2.9l1 1.9-1 1.9C8.4 15.8 7.52 17 6.5 17 5 17 4 14.9 4 12s1-5 2.5-5zm11 0C19 7 20 9.1 20 12s-1 5-2.5 5c-1.02 0-1.9-1.2-2.8-2.9l-1-1.9 1-1.9C15.6 8.2 16.48 7 17.5 7z" />
            </svg>
            <span>Meta</span>
          </div>
        </div>
      </div>
    </div>
  )
}
