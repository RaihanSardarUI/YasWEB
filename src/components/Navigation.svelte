<script>
  import Icon from '@iconify/svelte';
  
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<!-- Simple DaisyUI Navigation -->
<div class="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-lg">
  <div class="navbar-start">
    <!-- Mobile Menu Button -->
    <div class="dropdown">
      <button 
        type="button"
        class="btn btn-ghost lg:hidden" 
        on:click={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <!-- Mobile Menu -->
      {#if isMenuOpen}
        <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/" on:click={closeMenu}><Icon icon="heroicons:home" class="w-4 h-4" /> Home</a></li>
          <li><a href="/#get-shortcut-btn" on:click={closeMenu}><Icon icon="heroicons:arrow-down-tray" class="w-4 h-4" /> Download</a></li>

          <li><a href="/privacy-policy" on:click={closeMenu}><Icon icon="heroicons:shield-check" class="w-4 h-4" /> Privacy</a></li>
        </ul>
      {/if}
    </div>
    
    <!-- Logo -->
    <a href="/" class="btn btn-ghost text-xl font-bold">
      <div class="avatar">
        <div class="w-8 rounded-lg">
          <img src="/Yas Download.png" alt="YasDownload" />
        </div>
      </div>
      <span class="gradient-text hidden sm:inline">YasDownload</span>
      <span class="gradient-text sm:hidden">YAS</span>
    </a>
  </div>
  
  <!-- Desktop Navigation -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/"><Icon icon="heroicons:home" class="w-4 h-4" /> Home</a></li>
      <li><a href="/#get-shortcut-btn"><Icon icon="heroicons:arrow-down-tray" class="w-4 h-4" /> Download</a></li>

      <li><a href="/privacy-policy"><Icon icon="heroicons:shield-check" class="w-4 h-4" /> Privacy</a></li>
    </ul>
  </div>
  
  <!-- CTA Button -->
  <div class="navbar-end">
    <a href="/#get-shortcut-btn" class="btn btn-primary">
      <Icon icon="heroicons:arrow-down-tray" class="w-4 h-4" />
      <span class="hidden sm:inline">Get Started</span>
      <span class="sm:hidden">Get</span>
    </a>
  </div>
</div>

<style>
  .gradient-text {
    background: linear-gradient(135deg, #efc902, #fffa15);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>