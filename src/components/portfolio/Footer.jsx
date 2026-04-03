
export default function Footer({footer}) {


  return (
    <footer>
      <div className="footer-content">
        <div>{footer.text}</div>

        <div className="footer-links">
          {footer.links.map((link, i) => (
            <a key={i} href={link.link} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}