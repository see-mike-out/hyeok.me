import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container"><p><a href="../">Go back</a></p>
  <h2>SNU Card NewsBot</h2>
  <section class="area"><p>SNU Card NewsBot is an automated, personalized slide news service for the
      7th local election of South Korea. Slide news (or card news) is a
      pervasive snack news format in South Korea because of its convenience and
      quick reading. Users can swipe news slides horizontally to navigate.
      However, generating quality slide news is challenging because it demands
      reasoning about another way of involving visualization, verbal messages,
      layout design, and storytelling at once. In addition, people have
      different concerns about local elections (e.g., regions, candidates,
      parties), manually generating each card news consumes a lot of time. Thus,
      my team applied robot journalism technology to automate this
      personalization and generation process.
    </p>
    <p>In this project, my main job was to render news slides from a raw JSON
      format. To do this, I first designed a declarative (JSON) format grammar
      for data API to help every part of the team (front-end, data management,
      back-end, content generation) effectively communicate with each other.
      Then, I implemented the renderer of news slides given the declarative
      grammar. Another mission was to design and implement a user application to
      reach to general audience. In this case, I applied a card UI because
      higher fluidity of the elements was necessary as the end-product (a web
      app) contained various heterogeneous elements, such as lists of news
      articles and contorl panels for personalization.
    </p>
    <p><strong>Period</strong> Jan 2017 - May 2017<br>
      <strong>My Role</strong> Front-end Developer and Designer<br>
      <strong>Client</strong> SNU Institute for Communication Research
      (sponsored by Naver)<br>
      <strong>Director</strong> Prof. Joonhwan Lee and Prof. Bongwon Suh<br>
      <strong>Back-end Developer</strong> Joonseok Kim, Sion Baek, and Jinho Seo<br>
      <strong>Database Management</strong> Gibeom Park and Jinhan Choi<br>
      <strong>Text Generation</strong> Sanghyuk Lee, Youjin Hwang, Seongmin Park,
      Younah Ahn, and Woobin Choi
    </p>

    <h3>Demo Video</h3>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/TzF42Ak_B9c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display: block;"></iframe>
    <p></p>

    <h3>Card Rendering API</h3>
    <img src="images/snucardnewsbot/snucardnewsbot_api.png" class="clean w600" alt="The card rendering API for SNU Card News Bot service">
    <p>To reduce the system resources for news slide (card) generation, we
      decided to generate cards on browser run-time. Thus, I surveyed prior news
      slide designs to derive layouts for our project, eventually deriving a
      reusable and extendible declarative grammar that works for those various
      slide formats. Major types of information elements were text, image, graph
      visualization, comparison data, and map visualization.
    </p>

    <h3>Declarative Grammar for Card Generation</h3>
    <img src="images/snucardnewsbot/snucardnewsbot_api.png" class="clean w600" alt="The declarative grammar for SNU Card News Bot service">
    <p>A generalizable grammar was viatal to effectively operate the card
      rendering API. I designed the card rendering grammar through collaboration
      with and data management and content generation teams in terms of card
      layout type (e.g. map+text, vis+text, text, image, cover, and closing) and
      information element types (i.e. text, image, vis).
    </p>

    <h3>Card UI</h3>
    <p>Responsive Web design should be aligned with user&#39;s journey. An important
      concern was to provide various elements (articles, control panels, and
      alert messages) in a consistent format. The card UI was effective because
      many of the control panels had to be foldable.
    </p>
    <h4>Main Page</h4>
    <img src="images/snucardnewsbot/snucardnewsbot_ui_1.png" class="clean w600" alt="The user interface of the main page of SNU Card News Bot service">
    <h4>News Slide Viewer (using slick.js)</h4>
    <img src="images/snucardnewsbot/snucardnewsbot_ui_2.png" class="clean w600" alt="The user interface of the news slide viewer of SNU Card News Bot service">
    <h4>Personalization Setting Page</h4>
    <img src="images/snucardnewsbot/snucardnewsbot_ui_3.png" class="clean w600" alt="The user interface of the personalization setting of SNU Card News Bot service">
    <h4>Personal Archive</h4>
    <img src="images/snucardnewsbot/snucardnewsbot_ui_4.png" class="clean w600" alt="The user interface of the personal archive of SNU Card News Bot service">

    <p></p>
    <h3>Concept Art</h3>
    <p>The contents of news slides were highly political, so using image was not
      very easy while text-only views can be boring. Thus, I created various
      illustrations in order to visually assist news contents.
    </p>
    <img src="images/snucardnewsbot/snucardnewsbot_concept.png" class="clean w600" alt="The concept art images for SNU Card News Bot service"></section></div>`;
});
export {
  Page as default
};
