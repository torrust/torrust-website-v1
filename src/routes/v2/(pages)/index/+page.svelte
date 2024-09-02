<script lang="ts">
	import Table from '$lib/v2/components/atoms/Table.svelte';
	import PostContainer from '$lib/v2/components/molecules/PostContainer.svelte';
	import PostTable from '$lib/v2/components/molecules/PostTable.svelte';
	import PostBody from '$lib/v2/components/molecules/PostBody.svelte';

	import Sqlite from '$lib/v2/icons/sqlite.svelte';
	import Rust from '$lib/v2/icons/rust.svelte';
	import Mysql from '$lib/v2/icons/mysql.svelte';
	import Nuxt from '$lib/v2/icons/nuxt.svelte';

	import {
		indexTitleArr1,
		indexTableHeadings,
		indexTableData,
		indexTable
	} from '$lib/v2/constants/constants';
	import { indexContent } from '$lib/v2/constants/postContent';
	import Slider from '$lib/v2/components/atoms/Slider.svelte';
</script>

<div class="container">
	<div class="svg-container">
		<div class="svg-content">
			<svg
				width="65"
				height="40"
				viewBox="0 0 65 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.0215 27.9684C18.4139 28.5934 18.6081 29.4151 19.1335 29.9255C19.6664 30.4435 20.4732 30.6053 21.0882 29.9753C21.7033 29.3429 21.5165 28.5411 20.9836 28.0231C20.4582 27.5127 19.5892 27.3857 19.024 27.9684H19.0215Z"
					fill="#F5F5F5"
					fill-opacity="0.96"
				/>
				<path
					d="M48.4786 8.45369C48.1649 3.64293 43.9692 0 39.1484 0H8.31677C4.05383 0 0.395958 3.33665 0.316277 7.5996C0.236596 11.9422 3.73261 15.488 8.05781 15.488H19.8008L11.2799 24.512C5.74954 30.3685 9.90044 40 17.9557 40C20.4258 40 22.7939 39.004 24.522 37.2385L45.7969 15.488C47.6644 13.6504 48.6479 11.0881 48.4786 8.45369ZM19.0538 33.5882C18.3442 34.375 17.4278 34.4522 16.5538 33.6031L15.0424 32.134L14.4074 32.7864L13.6629 32.0618L14.2978 31.4094L13.3965 30.5329L14.2331 29.6638L15.1395 30.5428L16.0782 29.5767L16.8228 30.3013L15.879 31.2749L17.3905 32.744C17.7241 33.0677 18.0678 33.0428 18.3292 32.7714C18.4612 32.637 18.5683 32.4377 18.6305 32.2485L19.6041 32.7241C19.4622 33.0702 19.3053 33.3167 19.0563 33.5857L19.0538 33.5882ZM21.8825 30.747C20.7794 31.8825 19.3003 31.7704 18.2919 30.7918C17.2909 29.8182 17.144 28.3242 18.2271 27.2087C19.3103 26.0931 20.8292 26.1778 21.8302 27.1489C22.8387 28.1275 22.9856 29.6091 21.8825 30.747ZM24.1559 28.252L20.6549 24.8506L21.4941 23.9866L21.8999 24.3775C21.7281 23.6877 22.017 23.262 22.3606 22.9084C22.7117 22.5473 23.1923 22.3357 23.5708 22.3307L23.9443 23.4512C23.623 23.4836 23.3865 23.5707 23.1101 23.8546C22.6694 24.3078 22.5025 24.9626 23.1499 25.5901L24.9951 27.383L24.1534 28.2495L24.1559 28.252ZM27.1938 25.1245L23.6928 21.7231L24.5319 20.8591L24.9378 21.25C24.766 20.5603 25.0548 20.1345 25.3984 19.7809C25.7495 19.4198 26.2301 19.2082 26.6086 19.2032L26.9821 20.3237C26.6609 20.3561 26.4243 20.4432 26.1479 20.7271C25.7072 21.1803 25.5404 21.8352 26.1878 22.4627L28.0329 24.2555L27.1913 25.122L27.1938 25.1245ZM32.8536 19.3152L32.3232 18.9094C32.3257 19.6165 32.1738 20.1145 31.6958 20.6051C30.8815 21.4417 29.6564 21.4392 28.5708 20.3835L26.7331 18.5981L27.5747 17.7316L29.4074 19.512C29.9403 20.0299 30.6275 20.132 31.1654 19.5767C31.6833 19.0438 31.5862 18.247 31.0558 17.7316L29.268 15.9935L30.1021 15.1345L33.6081 18.5408L32.8561 19.3152H32.8536ZM35.8491 16.4567C35.3113 17.0095 34.6813 17.4751 33.6529 17.4676L33.4487 16.4417C33.9667 16.4617 34.7236 16.0956 35.1121 15.7122C35.4358 15.3934 35.5628 14.9228 35.3063 14.6738C35.0648 14.4397 34.7734 14.5418 34.2605 15.01C33.5683 15.6225 32.5623 16.1753 31.768 15.4034C30.9587 14.6165 31.4891 13.5035 32.1091 12.8635C32.6395 12.3157 33.1475 12.0095 33.8945 11.9497L33.9941 12.9831C33.5185 13.003 33.1649 13.2122 32.8412 13.5458C32.4403 13.9567 32.3481 14.3078 32.5673 14.5219C32.7939 14.7435 33.1226 14.6614 33.5857 14.2405C34.2705 13.6205 35.2316 12.9283 36.1629 13.8322C36.7804 14.4323 36.8228 15.4532 35.8516 16.4542L35.8491 16.4567ZM39.1659 12.8884C38.4562 13.6753 37.5399 13.7525 36.6659 12.9034L35.1544 11.4343L34.5195 12.0867L33.7749 11.3621L34.4099 10.7097L33.5085 9.83317L34.3452 8.96414L35.2515 9.84313L36.1903 8.87699L36.9348 9.60159L35.9911 10.5752L37.5025 12.0443C37.8362 12.368 38.1798 12.3431 38.4413 12.0717C38.5732 11.9373 38.6803 11.738 38.7426 11.5488L39.7162 12.0244C39.5742 12.3705 39.4174 12.617 39.1684 12.886L39.1659 12.8884Z"
					fill="#F5F5F5"
					fill-opacity="0.96"
				/>
				<path
					d="M56.9398 0H43.135V0.151892C47.1888 0.913845 49.629 4.5991 49.629 9.04382C49.629 11.4666 48.6554 13.7898 46.9298 15.488H56.9398C61.2177 15.488 64.6838 12.0219 64.6838 7.74402C64.6838 3.46614 61.2177 0 56.9398 0Z"
					fill="#F5F5F5"
					fill-opacity="0.96"
				/>
			</svg>
			<h1>index</h1>
		</div>
	</div>
	<div class="inner-container">
		<h2>Key Features</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
	</div>
	<div>
		<Slider titleArr={indexTitleArr1} />
	</div>
	<div class="inner-container">
		<h2>Stack</h2>
		<p>
			Torrust Index is powered by SQLite and mySQL, leveraging Rust (Axum) for the REST API and Nuxt
			(VUE) for the frontend.
		</p>
		<div class="stack-icons">
			<div>
				<Sqlite />
				<Rust />
			</div>
			<div>
				<Mysql />
				<Nuxt />
			</div>
		</div>
	</div>
	<div class="inner-container">
		<h2>Comparison to other products</h2>
		<p>
			Sapien malesuada massa quam gravida ipsum iaculis nisl massa id. Sit tortor morbi in aenean
			lectus vel nulla dolor. Facilisis rhoncus viverra consequat dictum. Lobortis venenatis morbi
			et tortor feugiat.
		</p>
		<Table tableHeading={indexTableHeadings} tableData={indexTableData} />
	</div>

	<PostContainer>
		<PostTable table={indexTable} />
		<PostBody body={indexContent} />
	</PostContainer>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.container {
		padding: 0;
		background: rgba(26, 26, 26, 1);
		color: rgba(245, 245, 245, 0.96);
	}

	.svg-container {
		height: 480px;
		background-image: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width='768' height='480' viewBox='0 0 768 480' fill='rgb(254, 74, 30)'><path d='M1005.2 123.646C1027.43 11.7464 953.881 -97.3506 843.527 -126.92L138.041 -315.954C40.5775 -342.07 -63.6767 -288.152 -91.5498 -191.16C-119.946 -92.2144 -61.7805 10.2473 37.2454 36.7812L306.002 108.794L55.7571 263.014C-106.71 363.089 -70.6249 608.894 113.559 658.246C170.006 673.371 230.427 665.068 280.715 635.209L900.796 267.959C954.822 237.428 993.036 184.656 1005.25 123.451L1005.2 123.646Z' fill='rgb(254, 74, 30)' fill-opacity='1'/></svg>");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-color: rgb(255, 50, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.svg-content {
		display: flex;
		text-align: center;
	}

	.inner-container {
		text-align: center;

		h2 {
			margin-top: 4rem;
			padding-inline: 1.5rem;
		}

		p {
			margin-top: 1.4rem;
			padding-inline: 1.5rem;
		}
	}

	.stack-icons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-inline: 1.5rem;
	}

	.stack-icons div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		margin-top: 3rem;
	}

	@include for-tablet-portrait-up {
		.stack-icons {
			gap: 1.5rem;
		}

		.stack-icons div {
			flex-direction: row;
			gap: 1.5rem;
		}

		.stack-icons div:nth-of-type(1) {
			justify-content: flex-end;
		}

		.stack-icons div:nth-of-type(2) {
			justify-content: flex-start;
		}
	}

	@include for-tablet-portrait-up {
		.inner-container {
			padding-top: 3rem;
		}

		.inner-container h2,
		.inner-container p {
			width: 640px;
			margin: 0 auto;
		}
	}
</style>
