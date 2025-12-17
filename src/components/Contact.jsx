function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Find Me On</h2>

      <div className="contact-icons">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kondru-anshu-a65554275/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24">
            <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 8.98h3.96V21H3V8.98ZM9.5 8.98H13v1.64h.05c.49-.92 1.7-1.89 3.5-1.89 3.75 0 4.45 2.47 4.45 5.68V21h-3.96v-5.48c0-1.3-.03-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88V21H9.5V8.98Z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/anshuu08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.8.5 12.3c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.8-5.5 6.1.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.7-1.6 8.1-6 8.1-11.2C23.5 5.8 18.35.5 12 .5Z" />
          </svg>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/anshu_08/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <svg viewBox="0 0 24 24">
            <path d="M16.3 2.8a1.1 1.1 0 0 1 0 1.6l-8 8a1.1 1.1 0 0 0 0 1.6l5.3 5.3a1.1 1.1 0 1 1-1.6 1.6l-5.3-5.3a3.3 3.3 0 0 1 0-4.7l8-8a1.1 1.1 0 0 1 1.6 0ZM20.7 11h-7.6a1.1 1.1 0 0 0 0 2.2h7.6a1.1 1.1 0 1 0 0-2.2Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Contact;
