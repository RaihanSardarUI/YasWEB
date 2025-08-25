<script>
  import Icon from '@iconify/svelte';
  
  export let title = "YAS DOWNLOAD";
  export let subtitle = "Download iOS shortcuts and tools easily";
  export let logoSrc = "/logo.webp";
</script>

<section class="hero min-h-screen hero-modern">
  <div class="hero-content text-center relative z-10">
    <div class="max-w-4xl">
      <!-- Floating App Icon -->
      <div class="mb-8 animate-fade-in-up">
        <div class="avatar">
          <div class="w-32 rounded-3xl shadow-2xl animate-float animate-pulse-glow">
            <img src={logoSrc} alt="Yas Download" />
          </div>
        </div>
      </div>
      
      <!-- Main Title -->
      <h1 class="text-responsive-3xl font-black mb-6 animate-fade-in-up" style="animation-delay: 0.2s;">
        <span class="gradient-text">{title}</span>
      </h1>
      
      <!-- Subtitle -->
      <p class="text-xl lg:text-2xl text-base-content/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s;">
        {subtitle}
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style="animation-delay: 0.6s;">
        <a href="/get" class="btn btn-primary btn-lg btn-glow gap-2">
          <Icon icon="heroicons:arrow-down-tray" class="w-5 h-5" />
          Download Now
        </a>
        <a href="#features" class="btn btn-outline btn-lg gap-2">
          <Icon icon="heroicons:information-circle" class="w-5 h-5" />
          Learn More
        </a>
      </div>
      
      <!-- Ad Banner -->
      <div class="mb-12 animate-fade-in-up flex justify-center" style="animation-delay: 0.7s;">
        <div data-ad-container class="ad-banner" style="width: 300px; height: 250px; display: flex; justify-content: center; align-items: center; background: #f0f0f0; border-radius: 8px;">
          <span style="color: #666;">Advertisement</span>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100/10 backdrop-blur-lg border border-base-300/20 animate-fade-in-up" style="animation-delay: 0.8s;">
        <div class="stat">
          <div class="stat-figure text-primary">
            <Icon icon="heroicons:arrow-down-tray" class="w-8 h-8" />
          </div>
          <div class="stat-title">Downloads</div>
          <div class="stat-value text-primary">1M+</div>
          <div class="stat-desc">
            <Icon icon="heroicons:arrow-trending-up" class="w-4 h-4 inline" /> 400 (22%)
          </div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
            <Icon icon="heroicons:globe-alt" class="w-8 h-8" />
          </div>
          <div class="stat-title">Platforms</div>
          <div class="stat-value text-secondary">7+</div>
          <div class="stat-desc">
            <Icon icon="heroicons:arrow-trending-up" class="w-4 h-4 inline" /> 90 (14%)
          </div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-accent">
            <Icon icon="heroicons:check-badge" class="w-8 h-8" />
          </div>
          <div class="stat-title">Success Rate</div>
          <div class="stat-value text-accent">99%</div>
          <div class="stat-desc">
            <Icon icon="heroicons:arrow-trending-down" class="w-4 h-4 inline" /> 90 (14%)
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Background decorative elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
    <div class="absolute top-40 right-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 2s;"></div>
    <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 4s;"></div>
  </div>
</section>