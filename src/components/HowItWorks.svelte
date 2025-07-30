<script>
  import Icon from '@iconify/svelte';
  
  const steps = [
    {
      number: 1,
      title: 'Install Shortcut',
      description: 'Download and install the YAS Download shortcut to your iOS device with just one tap.',
      icon: 'heroicons:arrow-down-tray',
      badge: 'iOS 15+',
      badgeIcon: 'heroicons:device-phone-mobile',
      color: 'primary'
    },
    {
      number: 2,
      title: 'Share Content',
      description: 'Find the content you want to download and tap the share button in your favorite app.',
      icon: 'heroicons:share',
      badge: 'Universal',
      badgeIcon: 'heroicons:globe-alt',
      color: 'secondary'
    },
    {
      number: 3,
      title: 'Download',
      description: 'Select YAS Download from the share menu and enjoy your high-quality content!',
      icon: 'heroicons:arrow-down-circle',
      badge: 'Instant',
      badgeIcon: 'heroicons:bolt',
      color: 'accent'
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  {#each steps as step, index}
    <div class="card card-body bg-base-100 shadow-xl border border-{step.color}/20 text-center animate-fade-in-up" style="animation-delay: {(index + 1) * 0.1}s;">
      <div class="w-20 h-20 bg-{step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-glow">
        <span class="text-3xl font-bold text-{step.color}-content">{step.number}</span>
      </div>
      <h3 class="text-2xl font-bold text-base-content mb-4 flex items-center justify-center gap-2">
        <Icon icon={step.icon} class="w-6 h-6" />
        {step.title}
      </h3>
      <p class="text-base-content/70 leading-relaxed">
        {step.description}
      </p>
      <div class="mt-4">
        <div class="badge badge-{step.color} badge-outline gap-1">
          <Icon icon={step.badgeIcon} class="w-3 h-3" />
          {step.badge}
        </div>
      </div>
    </div>
  {/each}
</div>