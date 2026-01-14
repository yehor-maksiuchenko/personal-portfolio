export default function ContactMePage() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <p>You can reach me on{': '}</p>
        <ul>
          <li><a
                    href="https://www.linkedin.com/in/yehor-maksiuchenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    LinkedIn
                </a></li>
          <li><a
                    href="mailto:yehormaksiuchenko@gmail.com"
                    className="text-blue-600 underline"
                >
                    Email
                </a></li>
          <li>
            <a
              href="https://github.com/yehor-maksiuchenko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
          </li>
        </ul>
    </main>
  );
}