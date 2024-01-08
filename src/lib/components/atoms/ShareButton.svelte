<script lang="ts">
    import Icon from '@iconify/svelte';
    export let slug: string;
  
    const socialLinks = [
      {
        icon: "devicon:linkedin",
        href: `http://www.linkedin.com/shareArticle?mini=true&url=https://torrust.com/${slug}`
      },
      {
        icon: "devicon:facebook",
        href: `https://www.facebook.com/sharer.php?u=https://torrust.com/${slug}`
      },
      {
        icon: "ri:twitter-x-fill",
        href: `https://twitter.com/share?url=https://torrust.com/${slug}`,
        color: "#000000"
      },
      {
        icon: "ic:outline-mail",
        href: `mailto:?subject=I wanted you to see this blog post&body=Check out this blog post https://torrust.com/${slug}`,
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
  