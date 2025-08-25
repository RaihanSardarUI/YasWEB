<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Load the ad script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pregnantskipper.com/826f292d2220f0443cf1b759ae9a729c/invoke.js';
    document.head.appendChild(script);
  });
</script>

<div class="ad-container flex justify-center my-8">
  <div class="ad-banner">
    <script type="text/javascript">
      atOptions = {
        'key' : '826f292d2220f0443cf1b759ae9a729c',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    </script>
  </div>
</div>

<style>
  .ad-container {
    padding: 1rem;
  }
  
  .ad-banner {
    max-width: 300px;
    width: 100%;
  }
</style>