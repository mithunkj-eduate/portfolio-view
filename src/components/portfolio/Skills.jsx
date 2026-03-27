import usePortfolioData from "../../data/portfolioData";

export default function Skills() {

  const { skills } = usePortfolioData();


  return (
    <section id="skills">
      <div className="section-tag">Tech Stack</div>
      <div className="section-title">Skills & Tools</div>
      <p className="section-sub">
        Technologies I work with daily to build full-stack products.
      </p>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-cat">
            <div className="skill-title">{skill.title}</div>

            <div className="skill-tags">
              {skill.items.map((item, idx) => (
                <span key={idx} className="skill-tag st-react">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* <section id="skills">
        <div class="section-tag">Tech Stack</div>
        <div class="section-title">Skills & Tools</div>
        <p class="section-sub">
          Technologies I work with daily to build full-stack products.
        </p>
        <div class="skills-grid">
          <div class="skill-cat">
            <div class="skill-cat-title">Frontend</div>
            <div class="skill-tags">
              <span class="skill-tag st-react">React.js</span>
              <span class="skill-tag st-react">Next.js</span>
              <span class="skill-tag st-ts">TypeScript</span>
              <span class="skill-tag st-gen">JavaScript ES6+</span>
              <span class="skill-tag st-gen">HTML5 / CSS3</span>
              <span class="skill-tag st-gen">Tailwind CSS</span>
              <span class="skill-tag st-gen">Bootstrap</span>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-title">Backend</div>
            <div class="skill-tags">
              <span class="skill-tag st-node">Node.js</span>
              <span class="skill-tag st-node">Express.js</span>
              <span class="skill-tag st-go">Golang</span>
              <span class="skill-tag st-go">Entgo</span>
              <span class="skill-tag st-gql">GraphQL</span>
              <span class="skill-tag st-gql">Apollo Client</span>
              <span class="skill-tag st-gen">REST APIs</span>
              <span class="skill-tag st-gen">Axios</span>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-title">Database</div>
            <div class="skill-tags">
              <span class="skill-tag st-mongo">MongoDB</span>
              <span class="skill-tag st-mongo">PostgreSQL</span>
              <span class="skill-tag st-gen">Schema Design</span>
              <span class="skill-tag st-gen">API Design</span>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-title">DevOps & Tools</div>
            <div class="skill-tags">
              <span class="skill-tag st-aws">AWS EC2 / S3</span>
              <span class="skill-tag st-gen">Docker</span>
              <span class="skill-tag st-gen">Kubernetes</span>
              <span class="skill-tag st-gen">Firebase Auth</span>
              <span class="skill-tag st-gen">Git</span>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
}
