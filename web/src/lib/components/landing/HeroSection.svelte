<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<section id="hero" class="py-16 sm:py-20 lg:py-24 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto text-center">
			<h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
				Japanese postcards mailed from Aichi to the world
			</h1>

			<p class="text-lg sm:text-xl text-gray-600 mb-8">
				You choose the postcard, we print the address, add your message,
				stamp it and mail it from Japan.
			</p>

			<div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
				<Button variant="default" class="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg">
					Choose a postcard
				</Button>

				<Button variant="outline" class="inline-flex items-center justify-center border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg text-lg">
					See how it works
				</Button>
			</div>

			<p class="text-sm text-gray-500">
				All postcards are mailed from Aichi Prefecture, Japan.
			</p>
		</div>

		<div class="mt-12 flex justify-center gap-4">
			<!-- Placeholder postcard images -->
			<div class="w-32 h-48 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
				<span class="text-gray-500">Postcard 1</span>
			</div>

			<div class="w-32 h-48 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
				<span class="text-gray-500">Postcard 2</span>
			</div>

			<div class="w-32 h-48 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
				<span class="text-gray-500">Postcard 3</span>
			</div>
		</div>
	</div>
</section>
