<script>
	import Icon from '@iconify/svelte';
</script>

<footer>
	<div class="container">
		<p>Vegamedia-Blogs<a href="https://vegamedia.in">Github</a></p>
		<p>
			Copyright © 2024 - 2025 Vegamedia ,All Rights Reserved.
		</p>
		<div class="social-links">
			<a href="https://www.instagram.com/vegamedia.online/" title="Instagram" rel="noreferrer" target="_blank"><Icon icon="mdi:instagram" /></a>
			<a href="https://www.facebook.com/vegamedia.online" title="Telegram" rel="noreferrer" target="_blank"><Icon icon="mdi:facebook" /></a>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		position: relative;
		margin-top: 3rem;
		padding: 20px 0;
		background: $clr-bg-3;

		a {
			color: $accent-0;
			transition: color 0.2s;

			@include hover {
				color: $clr-fg-2;
			}
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background-image: linear-gradient(90deg, rgba(255, 0, 187, 1) 0%, rgba(182, 0, 255, 1) 50%, rgba(255, 173, 0, 1) 100%);
		}
		.container {
			margin: 0 auto;
			max-width: 1225px;
			margin-left: 6rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			p {
				margin: 0;
				font-size: 14px;
				color: $clr-fg-4;
			}

			.social-links {
				a {
					display: inline-block;
					margin-right: 10px;

					:global(svg) {
						font-size: 18px;
						color: darken($accent-0, 10%);
						transition: color 0.2s;
						
						@include hover {
							color: $accent-0;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: $tablet) {
		footer {
			margin-top: 1rem;
			margin-bottom: 4rem;
			.container {
				margin-inline: auto;
				padding-inline: 2rem;
				flex-direction: column;
				align-items: center;

				.social-links {
					display: none;
				}
			}
		}
	}
</style>
