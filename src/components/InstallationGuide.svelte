<script>
  import Icon from '@iconify/svelte';
  
  const steps = [
    {
      step: 1,
      title: "Open Safari Browser",
      description: "Launch Safari on your iPhone or iPad device",
      icon: "heroicons:globe-alt"
    },
    {
      step: 2,
      title: "Visit YasDownload.Pro",
      description: "Navigate to our official website and click 'Get Shortcut'",
      icon: "heroicons:cursor-arrow-rays"
    },
    {
      step: 3,
      title: "Add to Shortcuts",
      description: "Tap 'Add Shortcut' when prompted by iOS",
      icon: "heroicons:plus-circle"
    },
    {
      step: 4,
      title: "Allow Permissions",
      description: "Grant necessary permissions for the shortcut to work",
      icon: "heroicons:shield-check"
    },
    {
      step: 5,
      title: "Start Downloading",
      description: "Use the share menu in any app to access YAS Download",
      icon: "heroicons:arrow-down-tray"
    }
  ];
</script>

<section class="py-20 bg-base-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 animate-fade-in-up">
      <div class="badge badge-warning badge-lg mb-4 gap-2">
        <Icon icon="heroicons:cog-6-tooth" class="w-4 h-4" />
        Installation
      </div>
      <h2 class="text-4xl lg:text-5xl font-bold text-base-content mb-6">
        Installation Procedure of <span class="gradient-text">YAS Shortcut</span>
      </h2>
      <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
        If you're a new iPhone user looking for an easy technique to install this amazing shortcut into your iOS device, let us help you!
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each steps as step, index}
        <div class="card card-body bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style="animation-delay: {index * 0.1}s;">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
              <span class="text-primary-content font-bold">{step.step}</span>
            </div>
            <Icon icon={step.icon} class="w-8 h-8 text-primary" />
          </div>
          
          <h3 class="text-xl font-bold text-base-content mb-3">{step.title}</h3>
          <p class="text-base-content/70 leading-relaxed">{step.description}</p>
        </div>
      {/each}
    </div>

    <div class="text-center mt-12">
      <div class="alert alert-info shadow-lg max-w-2xl mx-auto">
        <Icon icon="heroicons:light-bulb" class="w-6 h-6" />
        <div>
          <h3 class="font-bold">Pro Tip!</h3>
          <div class="text-sm">Make sure to allow "Untrusted Shortcuts" in Settings > Shortcuts if prompted during installation.</div>
        </div>
      </div>
    </div>
  </div>
</section>