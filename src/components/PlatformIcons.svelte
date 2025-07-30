<script>
  import Icon from '@iconify/svelte';
  
  const platforms = [
    { name: 'YouTube', icon: 'mdi:youtube', color: 'bg-red-500' },
    { name: 'TikTok', icon: 'ic:baseline-tiktok', color: 'bg-black' },
    { name: 'Instagram', icon: 'mdi:instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { name: 'Facebook', icon: 'mdi:facebook', color: 'bg-blue-600' },
    { name: 'Twitter', icon: 'mdi:twitter', color: 'bg-blue-400' },
    { name: 'Pinterest', icon: 'mdi:pinterest', color: 'bg-red-600' },
    { name: 'More', icon: 'heroicons:plus', color: 'bg-gradient-to-br from-primary to-secondary' }
  ];
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6">
  {#each platforms as platform}
    <div class="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
      <div class="card-body items-center text-center p-3 sm:p-4">
        <div class="w-10 h-10 sm:w-12 sm:h-12 {platform.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 shadow-md">
          <Icon icon={platform.icon} class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h3 class="font-semibold text-base-content text-xs sm:text-sm lg:text-base leading-tight">{platform.name}</h3>
      </div>
    </div>
  {/each}
</div>