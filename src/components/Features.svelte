<script>
  import Icon from '@iconify/svelte';
  
  const features = [
    {
      icon: "heroicons:sparkles",
      title: "High Quality Downloads",
      description: "Download content in the highest quality available, up to 4K resolution with crystal clear audio.",
      color: "primary"
    },
    {
      icon: "heroicons:no-symbol",
      title: "No Watermarks",
      description: "Clean downloads without any watermarks, logos, or branding - just pure content.",
      color: "secondary"
    },
    {
      icon: "heroicons:bolt",
      title: "Lightning Fast",
      description: "Download content in seconds with our optimized processing and advanced algorithms.",
      color: "accent"
    },
    {
      icon: "heroicons:shield-check",
      title: "100% Safe & Secure",
      description: "Your privacy is protected. No data collection, no tracking, completely secure downloads.",
      color: "info"
    },
    {
      icon: "heroicons:device-phone-mobile",
      title: "iOS Optimized",
      description: "Designed specifically for iOS devices with seamless integration into your workflow.",
      color: "success"
    },
    {
      icon: "heroicons:globe-alt",
      title: "Multi-Platform Support",
      description: "Works with 7+ major platforms including YouTube, TikTok, Instagram, and more.",
      color: "warning"
    }
  ];
</script>

<section id="features" class="py-20 bg-base-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16 animate-fade-in-up">
      <div class="badge badge-primary badge-lg mb-4 gap-2">
        <Icon icon="heroicons:sparkles" class="w-4 h-4" />
        Features
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold text-base-content mb-6">
        Why Choose <span class="gradient-text">YAS Download</span>?
      </h2>
      <p class="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
        Experience the most powerful and user-friendly iOS content downloader with cutting-edge features
      </p>
    </div>
    
    <!-- Features Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {#each features as feature, index}
        <div class="feature-card card-body animate-fade-in-up p-4 sm:p-6" style="animation-delay: {index * 0.1}s;">
          <!-- Icon -->
          <div class="flex justify-center mb-4 sm:mb-6">
            <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-{feature.color}/10 flex items-center justify-center shadow-lg">
              <Icon icon={feature.icon} class="w-6 h-6 sm:w-8 sm:h-8 text-{feature.color}" />
            </div>
          </div>
          
          <!-- Content -->
          <div class="text-center">
            <h3 class="text-lg sm:text-xl font-bold text-base-content mb-3 sm:mb-4 leading-tight">{feature.title}</h3>
            <p class="text-sm sm:text-base text-base-content/70 leading-relaxed">{feature.description}</p>
          </div>
          
          <!-- Decorative Element -->
          <div class="flex justify-center mt-4 sm:mt-6">
            <div class="w-8 sm:w-12 h-1 bg-{feature.color} rounded-full opacity-50"></div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Call to Action -->
    <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.8s;">
      <div class="card card-body bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 max-w-2xl mx-auto">
        <h3 class="text-2xl font-bold text-base-content mb-4">Ready to Experience the Difference?</h3>
        <p class="text-base-content/70 mb-6">Join over 1 million users who trust YAS Download for their content needs.</p>
        <a href="/get" class="btn btn-primary btn-lg btn-glow gap-2 mx-auto">
          <Icon icon="heroicons:arrow-down-tray" class="w-5 h-5" />
          Get Started Now
        </a>
      </div>
    </div>
  </div>
</section>