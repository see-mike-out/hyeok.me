<div class="container">
  <p><a href="../">Go back</a></p>
  <h2>SNU FactCheck</h2>
  <section class="area">
    <p>
      SNU FactCheck is a fact-checking portal where general people request an
      issue to be fact-checked and professional journalists fact-check it. This
      service is the first service in Korea that collects factcheck contents
      from various sources. At first, it started with 7 media outlets, but now
      there are 27, including the top 3 broadcasting companies (KBS, MBC, and
      SBS) and the top 2 newspaper companies (Chosun and Jungang). It was our
      mission to provide an effective visual summary for the factcheck contents
      from multiple journalists, which are often likely to be too lengthy to
      read. Therefore, my team suggested FactMeter, a gauge-like object showing
      the degree of an issue's factuality. Also, my mission as a front-end
      developer was to implement the card UI elements responsively to fit
      various screen types.
    </p>
    <p>
      <strong>Period</strong> Jan 2017 - May 2017<br />
      <strong>My Role</strong> Front-end Developer<br />
      <strong>Client</strong> SNU Institute for Communication Research
      (sponsored by Naver)<br />
      <strong>Director</strong> Prof. Joonhwan Lee<br />
      <strong>Vice Director</strong> Cindy Oh<br />
      <strong>Designer</strong> Nahi Hong<br />
      <strong>Back-end Developer</strong> Jinsu Eun (Ruby on Rails)
    </p>

    <h3>FactMeter</h3>
    <img
      src="images/factcheck/factcheck_factmeter.png"
      class="clean w600"
      alt="FactMeter for SNU Fact Check service"
    />
    <p>
      The idea of FactMeter was proposed by the director, and the designer
      visualized this. My job was to make the FactMeter effectively represent
      the outcome of factcheck (the degree of uncertainty to which a given topic
      is fact). Basically, the needle of a FactMeter moves along with the
      issue's fact-score (1-5). An easier way might be to provide a static
      FactMeter with the mean of the fact-score. However, the fact-score cannot
      be pooled because an average score easily ignore how much the factuality
      of an issue varies. Thus, the needle should represent the distribution of
      the outcomes, which we chose to animate the outcomes.
    </p>
    <p>
      There was a trade-off: a short period of time enough to present most of
      the outcomes vs. a long perioud time enough to recognize (at least
      glimpse) each outcome. This debate might be a common issue when the
      movement (speed and direction) of an element is actually a visual variable
      of a visualization. In order to obtain an appropriate speed of the
      needle's movement, we tested several spped options with groups of people,
      and applied the most agreed option to the final system.
    </p>

    <h3>Variation of Card UI</h3>
    <img
      src="images/factcheck/factcheck_card.png"
      class="clean w600"
      alt="The card design of SNU Fact Check service"
    />
    <p>
      A card-based user interface is often applicable to a system showing a list
      of many information objects because it flexibly demarcates each piece of
      information. The cards appear responsively to the screen sizes, enabled by
      precise and dynamic CSS positioning to match the visual and informational
      hierarchies.
    </p>

    <h3>Custom Grid System</h3>
    <img
      src="images/factcheck/factcheck_grid.png"
      class="clean w600"
      alt="The grid design of SNU Fact Check service"
    />
    <p>
      A grid system is pervasive for responsive design, and 12-equal-width grid
      system is conventional. However, the existing Bootstrap and Materialize
      are often hard to cusomize, while our service required a more flexible
      grid system. So, I implemented a custom grid system that fit to our card
      design.
    </p>
  </section>
</div>
