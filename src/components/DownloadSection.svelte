<script>
  import Icon from '@iconify/svelte';
  
  const features = [
    {
      title: '100% Free to use forever',
      icon: 'heroicons:check-circle',
      color: 'success'
    },
    {
      title: 'No ads or watermarks',
      icon: 'heroicons:no-symbol',
      color: 'info'
    },
    {
      title: 'Regular updates & support',
      icon: 'heroicons:arrow-path',
      color: 'warning'
    },
    {
      title: 'Safe and secure downloads',
      icon: 'heroicons:shield-check',
      color: 'error'
    }
  ];
</script>

<div class="max-w-5xl mx-auto">
  <div class="card card-body bg-base-100/80 backdrop-blur-lg shadow-2xl border border-base-300/50">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="animate-fade-in-up">
        <div class="flex items-center mb-8">
          <div class="avatar mr-4">
            <div class="w-20 rounded-2xl shadow-xl animate-pulse-glow">
              <img src="/Yas Download.png" alt="YAS Download" />
            </div>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-base-content gradient-text">YAS Download</h3>
            <p class="text-base-content/70 text-lg">Version 7.82 • iOS 15+</p>
            <div class="flex gap-2 mt-2">
              <div class="badge badge-success gap-1">
                <Icon icon="heroicons:check" class="w-3 h-3" />
                Free
              </div>
              <div class="badge badge-info gap-1">
                <Icon icon="heroicons:shield-check" class="w-3 h-3" />
                Safe
              </div>
              <div class="badge badge-warning gap-1">
                <Icon icon="heroicons:arrow-path" class="w-3 h-3" />
                Updated
              </div>
            </div>
          </div>
        </div>
        
        <div class="space-y-4 mb-8">
          {#each features as feature}
            <div class="flex items-center p-3 bg-{feature.color}/10 rounded-lg">
              <Icon icon={feature.icon} class="w-6 h-6 text-{feature.color} mr-4" />
              <span class="text-base-content font-medium">{feature.title}</span>
            </div>
          {/each}
        </div>
        
        <a href="/get" class="btn btn-primary btn-lg btn-glow w-full gap-2">
          <Icon icon="heroicons:arrow-down-tray" class="w-6 h-6" />
          Download YAS Now
        </a>
        
        <!-- Ad Banner -->
        <div class="mt-8 flex justify-center">
          <div data-ad-container class="ad-banner" style="width: 300px; height: 250px; display: flex; justify-content: center; align-items: center; background: #f0f0f0; border-radius: 8px;">
            <span style="color: #666;">Advertisement</span>
          </div>
        </div>
      </div>
      
      <div class="text-center animate-fade-in-up" style="animation-delay: 0.2s;">
        <div class="mockup-phone border-primary">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1 bg-base-300">
              <div class="p-4 space-y-4">
                <div class="card card-compact bg-primary shadow-xl">
                  <div class="card-body items-center text-center">
                    <div class="avatar">
                      <div class="w-16 rounded-xl">
                        <img src="/Yas Download.png" alt="YAS Download" />
                      </div>
                    </div>
                    <h3 class="card-title text-primary-content">YAS Download</h3>
                    <p class="text-primary-content/80">iOS Shortcut</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="skeleton h-4 w-full"></div>
                  <div class="skeleton h-4 w-3/4"></div>
                  <div class="skeleton h-4 w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>