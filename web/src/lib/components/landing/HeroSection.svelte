<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
                Japanese postcards mailed from Aichi to the world
            </h1>

            <p class="text-lg md:text-xl text-gray-600 mb-8">
                You choose the postcard, we print the address, add your message,
                stamp it and mail it from Japan.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button
                    variant="default"
                    class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg"
                >
                    Choose a postcard
                </Button>

                <Button
                    variant="outline"
                    class="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg text-lg"
                >
                    See how it works
                </Button>
            </div>

            <p class="text-sm text-gray-500">
                All postcards are mailed from Aichi Prefecture, Japan.
            </p>
        </div>

        <div class="mt-16 flex justify-center gap-4">
            <!-- Placeholder postcard images -->

            <div
                class="w-32 h-48 bg-gray-200 rounded-lg flex items-center justify-center"
            >
                <span class="text-gray-500">Postcard 1</span>
            </div>

            <div
                class="w-32 h-48 bg-gray-200 rounded-lg flex items-center justify-center"
            >
                <span class="text-gray-500">Postcard 2</span>
            </div>

            <div
                class="w-32 h-48 bg-gray-200 rounded-lg flex items-center justify-center"
            >
                <span class="text-gray-500">Postcard 3</span>
            </div>
        </div>
    </div>
</section>
