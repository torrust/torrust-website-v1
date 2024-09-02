<script lang="ts">
	export let tableHeading;
	export let tableData;
</script>

<div class="table-container">
	<table>
		<tr>
			{#each tableHeading as heading}
				<th>{heading}</th>
			{/each}
		</tr>
		<tr>
			{#each tableData as data}
				<td>{data}</td>
			{/each}
		</tr>
	</table>
</div>

<style>
	.table-container {
		overflow-x: auto;
		margin-top: 3rem;
		padding-inline: 1.5rem;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	th,
	td {
		border-bottom: 1px solid black;
		padding: 8px;
		text-align: left;
		white-space: nowrap;
	}

	/* Scrollbar styles */
	.table-container::-webkit-scrollbar {
		height: 12px; /* Adjust the height of the scrollbar */
	}

	.table-container::-webkit-scrollbar-track {
		background: #f1f1f1; /* Background of the scrollbar track */
	}

	.table-container::-webkit-scrollbar-thumb {
		background-color: rgba(255, 49, 0, 1); /* The sliding part of the scrollbar */
		border-radius: 10px; /* Rounded corners for the scrollbar */
		border: 2px solid #f1f1f1; /* Optional: border around the scrollbar thumb */
	}

	/* Firefox scrollbar styling */
	.table-container {
		scrollbar-width: thin; /* For Firefox */
		scrollbar-color: rgba(255, 49, 0, 1) #f1f1f1; /* Thumb color and track color */
	}
</style>
