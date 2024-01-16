<script lang="ts">
    import Icon from '@iconify/svelte';
    import { siteBaseUrl } from '$lib/data/meta';

    export let slug: string;
    export let title: string;

    const encodedSubject = encodeURIComponent("I wanted you to see this blog post");
    const encodedSlug = encodeURIComponent(slug);
    const encodedTitle = encodeURIComponent(title);
    const encodedBody = encodeURIComponent(" is a really interesting blog post from Torrust. Check it out here: ");
  
    const socialLinks = [
      {
        icon: "devicon:linkedin",
        href: `http://www.linkedin.com/shareArticle?mini=true&url=${siteBaseUrl}/${encodedSlug}`
      },
      {
        icon: "devicon:facebook",
        href: `https://www.facebook.com/sharer.php?u=${siteBaseUrl}/${encodedSlug}`
      },
      {
        icon: "ri:twitter-x-fill",
        href: `https://twitter.com/share?url=${siteBaseUrl}/${encodedSlug}&text=${title}`,
        color: "#000000"
      },
      {
        icon: "ic:outline-mail",
        href: `mailto:?subject=${encodedSubject}&body=${encodedTitle}${encodedBody}${siteBaseUrl}/${encodedSlug}`,
        color: "#1877f2"
      }
    ];
  </script>
  
<div class="link-container">
    {#each socialLinks as { icon, href, color }}
        <a {href} target="_blank" rel="noopener noreferrer">
            <Icon {icon} width="30" height="30" {color} />
        </a>
    {/each}
</div>
  
<style lang="scss">
    .link-container {
      display: flex;
      gap: 1rem;
    }
</style>
  
