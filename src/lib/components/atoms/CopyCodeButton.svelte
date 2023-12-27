<script lang='ts'>
    import Icon from '@iconify/svelte'
    let copyButton: HTMLButtonElement
    let showCheckmark = false

    function handleClick(){
        const preTagSibling = copyButton.nextElementSibling as HTMLPreElement

        navigator.clipboard.writeText(preTagSibling.innerText)

        showCheckmark = true

        setTimeout(() => showCheckmark = false, 1000);
    }
</script>

<button
    on:click={handleClick}
    bind:this={copyButton}
    class={`copy-button ${showCheckmark ? 'copy-button-green' : 'copy-button-gray'}`}
>
    {#if showCheckmark}
        <Icon icon="charm:tick" color="#6cdb2e" />
    {:else}
        <Icon icon="ion:copy-outline" color='#FFFFFF' />
    {/if}
</button>

<style>
    .copy-button {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        padding: 0.25rem;
        border-radius: 0.375rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        cursor: pointer;
    }

    .copy-button-green {
        background-color: #047857;
    }

    .copy-button-green:hover {
        background-color: #065f67;
    }

    .copy-button-gray {
        background-color: #4a5568;
    }

    .copy-button-gray:hover {
        background-color: #2d3748;
    }
</style>