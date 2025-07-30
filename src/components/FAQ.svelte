<script>
  import Icon from '@iconify/svelte';
  
  const faqs = [
    {
      question: "Can I Install YAS Shortcut for free?",
      answer: "Yes, you can Install this application without paying any money just by tapping the \"view shortcut\" button in the Install section area.",
      icon: "heroicons:currency-dollar",
      badge: "Free"
    },
    {
      question: "Can I Utilize a shortcut file for YAS in all iOS versions?",
      answer: "YAS shortcut supports almost every IOS version including iOS 15, 16, 17 and newer versions.",
      icon: "heroicons:device-phone-mobile",
      badge: "Compatible"
    },
    {
      question: "What is the current version of Yas Shortcut?",
      answer: "The latest version of YAS download is 7.82 according to the latest reports and updates.",
      icon: "heroicons:arrow-path",
      badge: "v7.82"
    },
    {
      question: "Is YAS Download safe to use?",
      answer: "Yes, YAS Download is completely safe to use. It's a legitimate iOS shortcut that doesn't require any suspicious permissions.",
      icon: "heroicons:shield-check",
      badge: "Secure"
    },
    {
      question: "Which social media platforms are supported?",
      answer: "YAS Download supports YouTube, TikTok, Instagram, Facebook, Twitter, Pinterest, and many more platforms.",
      icon: "heroicons:globe-alt",
      badge: "7+ Platforms"
    }
  ];
</script>

<div class="space-y-4">
  {#each faqs as faq, index}
    <div class="collapse collapse-plus card-glass shadow-xl border border-base-300/20 hover:border-primary/30 transition-all duration-300">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-semibold">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-primary/10">
              <Icon icon={faq.icon} class="w-6 h-6 text-primary" />
            </div>
            <span class="text-base-content">{faq.question}</span>
          </div>
          <div class="badge badge-primary badge-outline">{faq.badge}</div>
        </div>
      </div>
      <div class="collapse-content">
        <div class="pt-4 pb-2">
          <div class="alert alert-info shadow-lg">
            <Icon icon="heroicons:information-circle" class="w-6 h-6" />
            <span class="text-base-content leading-relaxed">{faq.answer}</span>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>