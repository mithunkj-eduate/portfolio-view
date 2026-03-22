import { Fragment } from "react";
import usePortfolioData from "../data/portfolioData";

export default function Contact() {
  const { contact } = usePortfolioData();

  return (
    <section id="contact">
      <div className="section-tag">Get In Touch</div>
      <div className="section-title">{contact.title}</div>

      <p className="section-sub">{contact.desc}</p>

      <div className="contact-card">
        {/* <p>
          I'm based in Bengaluru and actively looking for new opportunities.
          Whether you have a project or just want to chat tech — reach out!
        </p> */}
        <div className="contact-links">
          <a className="contact-link" href="mailto:mithunkj1996@gmail.com">
            <div className="contact-icon">✉️</div>
            <div className="contact-info">
              <div className="contact-label">Email</div>
              <div className="contact-val">{contact.email}</div>
            </div>
          </a>
          <a className="contact-link" href="tel:+916361849001">
            <div className="contact-icon">📱</div>
            <div className="contact-info">
              <div className="contact-label">Phone</div>
              <div className="contact-val">{contact.phone}</div>
            </div>
          </a>

          {contact.social.map((s, i) => (
            <Fragment key={i}>
              {s.name && s.name?.toLowerCase() === "linkedin" ? (
                <a className="contact-link" href={s.link} target="_blank">
                  <div
                    className="contact-icon"
                    style={{
                      background: "rgba(0,119,181,0.15)",
                      borderColor: "rgba(0,119,181,0.25)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#0077b5",
                    }}
                  >
                    in
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">LinkedIn</div>
                    <div className="contact-val">{s.link}</div>
                  </div>
                </a>
              ) : s.name && s.name?.toLowerCase() === "github" ? (
                <a className="contact-link" href={s.link} target="_blank">
                  <div
                    className="contact-icon"
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--muted)",
                    }}
                  >
                    GH
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">GitHub</div>
                    <div className="contact-val">{s.link}</div>
                  </div>
                </a>
              ) : (
                <a className="contact-link" href={s.link} target="_blank">
                  <div
                    className="contact-icon"
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--muted)",
                    }}
                  >
                    {s.name && s.name.charAt(0)}
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">{s.name}</div>
                    <div className="contact-val">{s.link}</div>
                  </div>
                </a>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* <div class="contact-wrap">
        <div class="section-tag" style="text-align:center;">
          Let's Connect
        </div>
        <div class="section-title" style="text-align:center;">
          Get In Touch
        </div>
        <p class="section-sub" style="margin:0 auto;text-align:center;">
          Open to full-time roles, freelance projects, and collaborations.
        </p>
        <div class="contact-card">
          <p>
            I'm based in Bengaluru and actively looking for new opportunities.
            Whether you have a project or just want to chat tech — reach out!
          </p>
          <div class="contact-links">
            <a class="contact-link" href="mailto:mithunkj1996@gmail.com">
              <div class="contact-icon">✉️</div>
              <div class="contact-info">
                <div class="contact-label">Email</div>
                <div class="contact-val">mithunkj1996@gmail.com</div>
              </div>
            </a>
            <a class="contact-link" href="tel:+916361849001">
              <div class="contact-icon">📱</div>
              <div class="contact-info">
                <div class="contact-label">Phone</div>
                <div class="contact-val">+91 63618 49001</div>
              </div>
            </a>
            <a
              class="contact-link"
              href="https://linkedin.com/in/mithun-k-j-8118b9274"
              target="_blank"
            >
              <div
                class="contact-icon"
                style="background:rgba(0,119,181,0.15);border-color:rgba(0,119,181,0.25);font-size:0.85rem;font-weight:700;color:#0077b5;"
              >
                in
              </div>
              <div class="contact-info">
                <div class="contact-label">LinkedIn</div>
                <div class="contact-val">mithun-k-j-8118b9274</div>
              </div>
            </a>
            <a
              class="contact-link"
              href="https://github.com/mithunkj-eduate"
              target="_blank"
            >
              <div
                class="contact-icon"
                style="font-size:0.82rem;font-weight:700;color:var(--muted);"
              >
                GH
              </div>
              <div class="contact-info">
                <div class="contact-label">GitHub</div>
                <div class="contact-val">mithunkj-eduate</div>
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
