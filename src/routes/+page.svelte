<script>
  import Intro from "./intro.svelte";
  import Research from "./research.svelte";
  import Work from "./work.svelte";
  import Links from "./links.svelte";
</script>

<div class="container main-body">
  <nav>
    <a href="#intro">Introduction</a>
    <a href="#research">Research</a>
    <a href="#work">Work</a>
    <a href="#cv">CV</a>
    <a href="#contact">Contact</a>
  </nav>
  <main>
    <Intro />
    <Research />
    <Work />
    <Links />
  </main>
</div>
