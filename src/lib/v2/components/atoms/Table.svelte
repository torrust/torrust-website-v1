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
</style>
