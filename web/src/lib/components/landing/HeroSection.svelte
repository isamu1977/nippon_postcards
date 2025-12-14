<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<section id="hero" class="py-20 sm:py-24 lg:py-28 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
				Japanese postcards mailed from Aichi to the world
			</h1>

			<p class="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
				You choose the postcard, we print the address, add your message,
				stamp it and mail it from Japan.
			</p>

			<div class="flex flex-col sm:flex-row justify-center gap-4 mb-10">
				<a href="/shop" class="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg">
					Choose a postcard
				</a>

				<Button variant="outline" class="inline-flex items-center justify-center border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg text-lg">
					See how it works
				</Button>
			</div>

			<p class="text-sm text-gray-500">
				All postcards are mailed from Aichi Prefecture, Japan.
			</p>
		</div>

		<div class="mt-14 flex justify-center gap-4">
			<!-- Placeholder postcard images -->
			<div class="w-36 h-52 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md">
				<span class="text-gray-500">Postcard 1</span>
			</div>

			<div class="w-36 h-52 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md">
				<span class="text-gray-500">Postcard 2</span>
			</div>

			<div class="w-36 h-52 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md">
				<span class="text-gray-500">Postcard 3</span>
			</div>
		</div>
	</div>
</section>
