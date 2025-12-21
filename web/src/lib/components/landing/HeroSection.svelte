<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte"
    import { t } from "$lib/translations/translations"
    import Carousel from "$lib/components/ui/Carousel.svelte"

    // Editable list of hero images — change as needed
    const heroImages = [
        '/images/hero.png',
        '/images/mount-fuji.png',
        '/images/himeji-castle.png',
        '/images/itsukushima-jinja.png'
    ];
</script>

<section id="hero" class="relative overflow-hidden">
    <!-- Background carousel -->
    <div class="absolute inset-0">
        <Carousel images={heroImages} interval={6000} />
        <!-- Overlay: improves text contrast -->
        <div
            class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"
        ></div>
        <!-- Optional: subtle tint to match brand -->
        <div class="absolute inset-0 bg-red-950/10"></div>
    </div>

    <!-- Content -->
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="max-w-2xl">
            <div
                class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur"
            >
                <span class="flex h-2 w-2 rounded-full bg-red-400 mr-2"></span>
                {$t('homePage.hero.badge.text')}
            </div>

            <h1
                class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
                <span class="block xl:inline">{$t('homePage.hero.title.line1')}</span>
            </h1>

            <p class="mt-4 text-base text-white/85 sm:text-xl">
                {$t('homePage.hero.description')}
            </p>

            <div class="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                    href="/shop"
                    class="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-base font-semibold text-white hover:bg-red-700 transition shadow-red-600/20 hover:shadow-red-600/40"
                >
                    {$t('homePage.hero.cta.primary')}
                </a>

                <a
                    href="/#how-it-works"
                    class="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-8 py-3 text-base font-semibold text-white hover:bg-white/15 transition backdrop-blur"
                >
                    {$t('homePage.hero.cta.secondary')}
                </a>
            </div>

            <div
                class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75"
            >
                <div class="flex items-center">
                    <svg
                        class="h-5 w-5 text-green-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                    {$t('homePage.hero.features.globalShipping')}
                </div>
                <div class="flex items-center">
                    <svg
                        class="h-5 w-5 text-green-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                    {$t('homePage.hero.features.securePayment')}
                </div>
            </div>
        </div>
    </div>
</section>
