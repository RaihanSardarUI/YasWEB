<script>
  import Icon from '@iconify/svelte';
  
  export let icon;
  export let text;
  export let color = 'primary';
</script>

<div class="badge badge-{color} badge-lg mb-4 gap-2">
  <Icon icon={icon} class="w-4 h-4" />
  {text}
</div>