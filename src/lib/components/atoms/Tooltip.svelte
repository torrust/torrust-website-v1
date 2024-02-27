<script lang="ts">
    export let text: string = ''
</script>

<div class="tooltip">
    <slot />
    <div class="tooltiptext">
        {text}
    </div>
</div>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }
  
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 200px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        top: 100%;
        left: 50%;
        margin-left: -100px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: .8rem;
    }
  
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    @media (max-width: 767px) {
		.tooltip:hover .tooltiptext {
			opacity: 0; /* Set opacity to 0 for smaller screens when tooltip is hovered */
		}
	}
</style>