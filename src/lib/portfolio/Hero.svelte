<script>
</script>

<section id="hero" data-scroll-section>
	<slot />
	<div class="hero__content" data-scroll>
		<img src="/static/favicon.png" alt="">
		<p>Welcome to our blog, your go-to source for insights on business, real estate, wineries, private jets, and interior design. Here, we explore the latest trends and strategies that drive success in these dynamic industries. Whether you’re an entrepreneur or simply curious, our concise articles are designed to inform and inspire. Dive in and discover the keys to thriving in today’s competitive landscape! </p>
		
		<a class="btn" href="/blogs">READ THE BLOG</a>
	</div>
</section>

<style lang="scss">
	#hero {
		min-height: 100vh;
		background-color: rgb(28, 25, 38);
		background-image: linear-gradient(rgba(28, 25, 38, 0.6), rgba(28, 25, 38, 0.3), rgba(28, 25, 38, 0.4)),
			url('https://raw.githubusercontent.com/NotYasho/personal-portfolio/master/static/img/bg/hero-bg.webp?token=GHSAT0AAAAAAB4WNDHPMZIMCG6JWFF4P3GCY6ABK4Q');
		background-size: cover;
		background-position: center;
	}

	.hero__content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;

		img {
			width: 15rem;
			border-radius: 50%;
			transition: all 0.2s ease-in-out;
			&:hover {
				transform: scale(1.05);
			}
		}
	}


	p {
		display: block;
		width: 40vw;
		font-size: 17px;
		line-height: 1.2;
		color: #d5d5ff;
		min-width: 300px;
		text-align: center;
		padding: 1rem;
	}
</style>
