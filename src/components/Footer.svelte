<script>
  import Icon from '@iconify/svelte';
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content">
  <div class="max-w-6xl mx-auto">
    <!-- Logo and Brand -->
    <div class="mb-8">
      <div class="avatar mb-4">
        <div class="w-20 rounded-2xl shadow-xl animate-pulse-glow">
          <img src="/Yas Download.png" alt="YasDownload" />
        </div>
      </div>
      <h3 class="text-3xl font-bold gradient-text mb-2">YasDownload.Pro</h3>
      <p class="text-base-content/70 text-lg">The Best Video Downloader For iPhone Users</p>
      <div class="badge badge-primary badge-lg mt-2 gap-2">
        <Icon icon="heroicons:check-badge" class="w-4 h-4" />
        Trusted by 1M+ Users
      </div>
    </div>
    
    <!-- Navigation Links -->
    <nav class="mb-8">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
        <a href="/" class="btn btn-ghost btn-sm gap-2">
          <Icon icon="heroicons:home" class="w-4 h-4" />
          Home
        </a>
        <a href="/get" class="btn btn-ghost btn-sm gap-2">
          <Icon icon="heroicons:arrow-down-tray" class="w-4 h-4" />
          Get
        </a>
        <a href="/blog" class="btn btn-ghost btn-sm gap-2">
          <Icon icon="heroicons:document-text" class="w-4 h-4" />
          Blog
        </a>
        <a href="/privacy-policy" class="btn btn-ghost btn-sm gap-2">
          <Icon icon="heroicons:shield-check" class="w-4 h-4" />
          Privacy
        </a>
        <a href="/terms-and-conditions" class="btn btn-ghost btn-sm gap-2">
          <Icon icon="heroicons:document-text" class="w-4 h-4" />
          Terms
        </a>
        <a href="/disclaimer" class="btn btn-ghost btn-sm gap-2">
          <Icon icon="heroicons:exclamation-triangle" class="w-4 h-4" />
          Disclaimer
        </a>
        <a href="/cookie-policy" class="btn btn-ghost btn-sm gap-2">
          <Icon icon="heroicons:cookie" class="w-4 h-4" />
          Cookies
        </a>
      </div>
    </nav>
    
    <!-- Social Media -->
    <nav class="mb-8">
      <div class="text-center mb-4">
        <h4 class="text-lg font-semibold text-base-content mb-2">Follow Us</h4>
        <p class="text-sm text-base-content/70">Stay updated with the latest features and updates</p>
      </div>
      <div class="flex justify-center gap-3 flex-wrap">
        <a href="https://twitter.com/yasdownload" 
           class="social-btn social-btn-twitter" 
           aria-label="Follow us on Twitter"
           target="_blank" 
           rel="noopener noreferrer">
          <Icon icon="mdi:twitter" class="w-5 h-5" />
          <span class="social-text">Twitter</span>
        </a>
        <a href="https://instagram.com/yasdownload" 
           class="social-btn social-btn-instagram" 
           aria-label="Follow us on Instagram"
           target="_blank" 
           rel="noopener noreferrer">
          <Icon icon="mdi:instagram" class="w-5 h-5" />
          <span class="social-text">Instagram</span>
        </a>
        <a href="https://youtube.com/@yasdownload" 
           class="social-btn social-btn-youtube" 
           aria-label="Subscribe to our YouTube channel"
           target="_blank" 
           rel="noopener noreferrer">
          <Icon icon="mdi:youtube" class="w-5 h-5" />
          <span class="social-text">YouTube</span>
        </a>
        <a href="https://tiktok.com/@yasdownload" 
           class="social-btn social-btn-tiktok" 
           aria-label="Follow us on TikTok"
           target="_blank" 
           rel="noopener noreferrer">
          <Icon icon="ic:baseline-tiktok" class="w-5 h-5" />
          <span class="social-text">TikTok</span>
        </a>
        <a href="https://facebook.com/yasdownload" 
           class="social-btn social-btn-facebook" 
           aria-label="Like us on Facebook"
           target="_blank" 
           rel="noopener noreferrer">
          <Icon icon="mdi:facebook" class="w-5 h-5" />
          <span class="social-text">Facebook</span>
        </a>
        <a href="https://discord.gg/yasdownload" 
           class="social-btn social-btn-discord" 
           aria-label="Join our Discord community"
           target="_blank" 
           rel="noopener noreferrer">
          <Icon icon="mdi:discord" class="w-5 h-5" />
          <span class="social-text">Discord</span>
        </a>
      </div>
    </nav>
    
    <!-- Features Highlight -->
    <div class="mb-8">
      <div class="flex flex-wrap justify-center gap-2">
        <div class="badge badge-outline gap-1">
          <Icon icon="heroicons:check" class="w-3 h-3" />
          Free Forever
        </div>
        <div class="badge badge-outline gap-1">
          <Icon icon="heroicons:no-symbol" class="w-3 h-3" />
          No Watermarks
        </div>
        <div class="badge badge-outline gap-1">
          <Icon icon="heroicons:bolt" class="w-3 h-3" />
          Lightning Fast
        </div>
        <div class="badge badge-outline gap-1">
          <Icon icon="heroicons:shield-check" class="w-3 h-3" />
          100% Safe
        </div>
        <div class="badge badge-outline gap-1">
          <Icon icon="heroicons:device-phone-mobile" class="w-3 h-3" />
          iOS Compatible
        </div>
      </div>
    </div>
    
    <div class="divider w-full max-w-md"></div>
    
    <!-- Copyright -->
    <aside class="text-center space-y-2">
      <p class="text-base-content/80">
        Copyright © 2024 - <span class="font-semibold gradient-text">YasDownload.Pro</span>. All rights reserved.
      </p>
      <p class="text-sm text-base-content/60 flex items-center justify-center gap-1">
        Made with <Icon icon="heroicons:heart" class="w-4 h-4 text-red-500" /> for iOS users worldwide
      </p>
      <p class="text-xs text-base-content/50">
        Download content responsibly and respect copyright laws
      </p>
    </aside>
  </div>
</footer>

<style>
  /* Enhanced Social Media Buttons */
  .social-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .social-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .social-text {
    display: none;
  }
  
  @media (min-width: 640px) {
    .social-text {
      display: inline;
    }
  }
  
  /* Platform-specific colors */
  .social-btn-twitter {
    color: #1DA1F2;
    border-color: rgba(29, 161, 242, 0.3);
  }
  
  .social-btn-twitter:hover {
    background: #1DA1F2;
    color: white;
    border-color: #1DA1F2;
  }
  
  .social-btn-instagram {
    color: #E4405F;
    border-color: rgba(228, 64, 95, 0.3);
  }
  
  .social-btn-instagram:hover {
    background: linear-gradient(45deg, #E4405F, #833AB4, #F77737);
    color: white;
    border-color: #E4405F;
  }
  
  .social-btn-youtube {
    color: #FF0000;
    border-color: rgba(255, 0, 0, 0.3);
  }
  
  .social-btn-youtube:hover {
    background: #FF0000;
    color: white;
    border-color: #FF0000;
  }
  
  .social-btn-tiktok {
    color: #000000;
    border-color: rgba(0, 0, 0, 0.3);
  }
  
  .social-btn-tiktok:hover {
    background: #000000;
    color: white;
    border-color: #000000;
  }
  
  .social-btn-facebook {
    color: #1877F2;
    border-color: rgba(24, 119, 242, 0.3);
  }
  
  .social-btn-facebook:hover {
    background: #1877F2;
    color: white;
    border-color: #1877F2;
  }
  
  .social-btn-discord {
    color: #5865F2;
    border-color: rgba(88, 101, 242, 0.3);
  }
  
  .social-btn-discord:hover {
    background: #5865F2;
    color: white;
    border-color: #5865F2;
  }
  
  /* Mobile optimizations */
  @media (max-width: 639px) {
    .social-btn {
      padding: 0.5rem;
      min-width: 2.5rem;
      justify-content: center;
    }
  }
</style>