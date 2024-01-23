<script lang="ts">
    import {onMount, onDestroy} from 'svelte'

    let showHoverStrap = true
    let hoverStrapTimeout: any
    let progressBarWidth = 100

    function hideHoverStrap(){
        showHoverStrap = false
    }

    onMount(() => {
        const duration = 10000
        const interval = 100
        let elapsed = 0

        hoverStrapTimeout = setInterval(() => {
            elapsed += interval
            progressBarWidth = ((duration - elapsed) / duration) * 100

            if(elapsed >= duration){
                clearInterval(hoverStrapTimeout)
                hideHoverStrap()
            }
        }, interval)
    })

    onDestroy(() => {
        clearInterval(hoverStrapTimeout)
    })
</script>

{#if showHoverStrap}
    <div class="hover-strap" on:mouseover={() => clearInterval(hoverStrapTimeout)} on:focus>
        <div class="progress-bar" style="width: {progressBarWidth}%"></div>
        <div class="github-div">
            Watch our <a href="https://github.com/torrust/torrust-tracker" target="_blank" rel="noopener noreferrer">GitHub repo</a> to stay up to date
        </div>
    </div>
{/if}

<style>
    .hover-strap {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        padding: .3rem;
        background: transparent;
        color: #000;
        text-align: center;
        cursor: pointer;
        z-index: 1001;
        overflow: hidden;
        transition: opacity 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .progress-bar {
        height: 5px;
        background: rgba(248, 181, 153, 1);
        transition: width 100ms linear;
        border-radius: 10px;
    }

    .github-div{
        cursor: default;
    }
</style>