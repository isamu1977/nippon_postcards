<script lang="ts">
  import { loadTranslations, t } from "$lib/translations/translations";
  import HeroSection from "$lib/components/landing/HeroSection.svelte";
  import TrustStrip from "$lib/components/landing/TrustStrip.svelte";
  import HowItWorksSection from "$lib/components/landing/HowItWorksSection.svelte";
  import CategoriesSection from "$lib/components/landing/CategoriesSection.svelte";
  import PricingSection from "$lib/components/landing/PricingSection.svelte";
  import WhyPhysicalSection from "$lib/components/landing/WhyPhysicalSection.svelte";
  import FaqSection from "$lib/components/landing/FaqSection.svelte";
  import FinalCtaSection from "$lib/components/landing/FinalCtaSection.svelte";

  const defaultLanguage = 'en';
  loadTranslations(defaultLanguage, "/");
</script>

<HeroSection />
<TrustStrip />
<HowItWorksSection />
<CategoriesSection />
<PricingSection />
<WhyPhysicalSection />
<FaqSection />
<FinalCtaSection />
