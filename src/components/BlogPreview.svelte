<script>
  const blogPosts = [
    {
      title: "How to remove yas download shortcut on macOS and iOS ?",
      excerpt: "You've got the Yas Download iOS shortcut on your device and you didn't like it, now you want to remove or delete this shortcut...",
      url: "/blog/how-to-remove-yas-download-shortcut-on-macos-and-ios",
      date: "2024-01-15"
    },
    {
      title: "Where You Can Download the YasDownload Shortcut for iOS ?",
      excerpt: "You are on the right page if you want to download the Yas Download Shortcut for iOS. Here, we will tell you where and how...",
      url: "/blog/where-you-can-download-the-yasdownload-shortcut-for-ios",
      date: "2024-01-10"
    },
    {
      title: "Top 3 Best IOS Shortcuts of 2024",
      excerpt: "iOS shortcuts are super helpful. They save time, simplify tasks, and help your iPhone feel smarter. Here are the Top 3 Best...",
      url: "/blog/top-3-best-ios-shortcuts-of-2024",
      date: "2024-01-05"
    }
  ];
</script>

<section class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-16">Latest Blog Posts</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each blogPosts as post}
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-lg">{post.title}</h3>
            <p class="text-gray-300 text-sm mb-4">{post.date}</p>
            <p class="text-gray-400">{post.excerpt}</p>
            <div class="card-actions justify-end mt-4">
              <a href={post.url} class="btn btn-primary btn-sm">Read More</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <a href="/blog" class="btn btn-outline btn-primary">View All Posts</a>
    </div>
  </div>
</section>