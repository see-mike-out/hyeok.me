import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="intro">Introduction</h2>
<section class="area"><p>Hi, I&#39;m Hyeok Kim (<a href="http://ipa-reader.xyz/?text=hj%CA%8Ck" target="_blank">hjʌk</a>). I&#39;m a PhD candidate in
    <a href="https://www.mccormick.northwestern.edu/computer-science/graduate/phd/" target="_blank">Computer Science at Northwestern University</a>. Currently, I work with Professor
    <a href="http://users.eecs.northwestern.edu/~jhullman/" target="_blank">Jessica Hullman</a>
    at
    <a href="https://mucollective.northwestern.edu/" target="_blank">MU Collective</a>. Previously, I did my masters in
    <a href="http://communication.snu.ac.kr" target="_blank">Communcation</a>
    at
    <a href="http://www.snu.ac.kr" target="_blank">Seoul National University</a>
    with colleagues from
    <a href="http://hcid.snu.ac.kr/" target="_blank">HCI+D Lab</a>. My research
    intersts mainly include 📊 data visualization, 📱🖥 responsive visualization
    and multi-context visualizations, 🛠 visualization system, formalization, and
    automation, 📜 narrative and communicative visualization, and 🧙🏻‍♂design
    research for societal problems. If you are interested in these areas as
    well, please feel free to contact me for collaboration 🙆🏻‍♂!
  </p>

  <h3>More background</h3>
  <p>I studied Linguistics for my undergraduate major, and Computational and
    Statistical Linguistics for my student-designed minor. Data visualization
    was my way to practice programming and statistics together—this was indeed a
    great approach and led me to various areas in HCI, including system design,
    visualization grammar, and design research. I am a first-generation PhD student.
  </p></section>`;
});
const Research = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="research">Research</h2>
<section class="area"><p>I have published papers on data visualization and design research in top HCI
    venues.
  </p>

  <h3>Responsive Visualization Authoring</h3>
  <p>Data visualization helps us to reason about various problems from daily
    decisions to professional judgment. As different types of devices have
    become affordable to many people, we face more and more visualization use
    cases through diverse device types. I have studied &quot;responsive
    visualization,&quot; referring to adpating visualizations for different device
    types.
  </p>
  <p>I particularly focus on responsive visualization authoring, which is not
    easy because of the lack of guidance in addition to challenges in managing
    multiple versions of charts. A first step to intelligent responsive
    visualization authoring systems is to undertstand a snapshot of current
    practices and trade-offs occuring around those practices. Analyzing 378
    pairs of desktop and mobile versions of communicative visualizations, <a href="https://arxiv.org/abs/2104.07724" target="_blank">our work</a>
    identifies
    <a href="http://mucollective.github.io/responsive-vis-gallery" target="_blank">a set of 76 design patterns</a>
    and characterize designing responsive visualization as density-message trade-off
    between adjusting graphical density and maintaining visualization insights. To
    facilitate reasoning about insight preservation in an automated way, we contribute
    <a href="https://arxiv.org/abs/2107.08141" target="_blank">task-oriented insight preservation measures</a>
    in terms of identification, comparison, and trend insights. More recently, we
    introduce,
    <a href="https://arxiv.org/abs/2203.08314" target="_blank">Cicero, a declarative grammar for responsive visualization</a> to better support related authoring systems.
  </p>

  <h5 class="indent-1">Publication</h5>
  <p class="indent-1"><strong><em>Hyeok Kim</em></strong>, Dominik Moritz, &amp; Jessica Hullman.
    2021. Design patterns and trade-offs in responsive visualization for
    communication. Computer Graphics Forum (EUROVIS 2021).
    <a href="https://arxiv.org/abs/2104.07724" target="_blank">Preprint</a>.
    <a href="http://mucollective.github.io/responsive-vis-gallery" target="_blank">Online gallery for responsive visualization</a>.
    <a href="https://osf.io/zrqfy/" target="_blank">Supplemental material</a>.
  </p>
  <p class="indent-1"><strong><em>Hyeok Kim</em></strong>, Ryan Rossi, Abhraneel Sarma, Dominik
    Moritz, &amp; Jessica Hullman. 2021. An Automated Approach to Reasoning About
    Task-Oriented Insights in Responsive Visualization. IEEE TVCG (VIS 2021).
    <a href="https://arxiv.org/abs/2107.08141" target="_blank">Preprint</a>.
    <a href="https://osf.io/jcvbx/" target="_blank">Supplemental material</a>.
  </p>
  <p class="indent-1"><strong><em>Hyeok Kim</em></strong>, Ryan Rossi, Fan Du, Eunyee Koh, Shunan
    Guo, Jessica Hullman, &amp; Jane Hoffswell. 2022. Cicero: A Declarative Grammar
    for Responsive Visualization. ACM CHI 2022.
    <a href="https://arxiv.org/abs/2203.08314" target="_blank">Preprint</a>.
    <a href="https://see-mike-out.github.io/cicero-supplemental" target="_blank">Online gallery for Cicero grammar</a>.
    <a href="https://osf.io/eg4xq/" target="_blank">Supplemental material</a>.
  </p>

  <h3>Design for Societal Problems</h3>
  <p>Designign for the underrepresetned helps us to communicate better as a
    community. Nevertheless, not every computing device or system is useful for
    the underrepresetned. I am particularly interested in how an understnading
    of a user group impacts the design of a system at a deeper level.
  </p>

  <h4>Information System for Sexual Violence Survivors</h4>
  <p>For example, sexual violence survivors often have hard time finding suitable
    support services for them due to various societal and personal reasons.
    While personalization is key to navigate a vast search space of
    support-seeking, how to personalize (i.e., how to ask for personalization
    and how to provide personalized information) has been less asked given its
    importance. To understand personalization in a conversational interaction
    setting, we performed a co-design workshop with experts, implemented a
    high-fidelity prototype system, and did a user study with self-identified
    sexual violence survivors.
  </p>

  <h5 class="indent-1">Publication</h5>
  <p class="indent-1"><strong><em>Hyeok Kim</em></strong>, Youjin Hwang, Jieun Lee, Youngjin Kwon,
    Yujin Park, &amp; Joonhwan Lee. 2022. Personalization Trade-offs in Designing a
    Dialogue-based Information System for Support-Seeking of Sexual Violence
    Survivors. ACM CHI 2022.
    <a href="https://arxiv.org/abs/2202.09150" target="_blank">Preprint</a>.
    <br>
    <a href="https://osf.io/qyscg/" target="_blank">Supplemental material</a>.
    <br></p>

  <h4>Design Guidelines for the In-game Sexual Harassment Prevention System</h4>
  <p>In online video games, sexual harassment against female gamers frequently
    occurs, and becomes worse with various factors. This research projects
    attempted to suggest design guidelines that both prevent harrassment. A shor
    paper for this project was published in HCI Korea 2018 Conference (extended
    abstract). <a href="pubs/ingame-sexual-harassment-2018.pdf" target="_blank">Download Preprint (Korean)</a></p>

  <h3>Media-as-Place Storytelling</h3>
  <p>From escape rooms to <i>Sara is Missing...</i> and <i>Searching...</i>, we
    experience a new kind of narratives where their places seem identical to
    their media: real objects in escape rooms, a smartphone for
    <i>Sara is Missing...</i>, and a computer for <i>Searching...</i>. We shed
    light on this emerging storytelling technique by identifying it as
    &#39;Media-as-Place&#39; storytelling. This approach will enhance place-based
    learning of HCI as well as enriching our digital narrtaive techniques.
  </p>

  <h4>The implementation of MiRO, a Media-as-Place computer game</h4>
  <div class="image-text"><img src="images/research_miro.png" alt="a screenshot of MiRO game">
    <p>This is an initial approach to explicate the idea of Media-as-Place
      storytelling. This work-in-progress was presented on at 2019 (<a href="https://dl.acm.org/citation.cfm?id=3323881">extended abstract link</a>,
      <a href="pubs/map-2019.pdf" target="_blank">Download Preprint</a>). The
      game is available via <a href="http://miro.xyz">here</a>.
    </p></div></section>`;
});
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="work">Work</h2>
<section class="area"><h3>Data visualization projects</h3>
  <p>Explore them <a href="https://see-mike-out.github.io/mike" target="_blank">here</a>!
  </p>

  <h3>Web development projects</h3>
  <h4>SNU FactCheck</h4>
  <p>SNU FactCheck is a news portal that aggregates factchecks from (initially)
    27 media outlets. This is serviced by SNU Institue for Communication
    Research and collaborated with Naver.
  </p>

  <h4>SNU Card NewsBot</h4>
  <p>SNU Card NewsBot is a robot journalism system that automatically generates
    personalized news slides. This was funded by Institute for Information and
    Communications Technology Promotion of South Korea.
  </p>

  <h4>Utopia</h4>
  <p>Utopia is a web app for energy education. My team developed user-side and
    content provider-side apps. The user-side app features an energy diary, a
    web comics with audio autoplay, and a book viewer system, and the content
    provider-side app offers functinalities to support those features.
  </p></section>`;
});
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="cv">CV</h2>
<section class="area"><p><a href="https://docs.google.com/document/d/1ll03ikdBISDG1HjDoPp73jiMfALZJ5GcNE1D_8xR1HA/edit?usp=sharing" target="_blank">Link</a> (last updated: May 11, 2023)
  </p></section>

<h2 id="contact">Contact</h2>
<section class="area"><p>Email: hyeokkim2024 [at] u.northwestern.edu
    <br>
    Twitter:
    <a href="https://twitter.com/hyeok__kim" target="_blank">@hyeok__kim</a>
    <br>
    Mastodon:
    <a href="https://vis.social/@hyeokkim" target="_blank">vis.social/@hyeokkim</a></p></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container main-body"><nav><a href="#intro">Introduction</a>
    <a href="#research">Research</a>
    <a href="#work">Work</a>
    <a href="#cv">CV</a>
    <a href="#contact">Contact</a></nav>
  <main>${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}
    ${validate_component(Research, "Research").$$render($$result, {}, {}, {})}
    ${validate_component(Work, "Work").$$render($$result, {}, {}, {})}
    ${validate_component(Links, "Links").$$render($$result, {}, {}, {})}</main></div>`;
});
export {
  Page as default
};
