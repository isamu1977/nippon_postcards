<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  export let images: string[] = [];
  export let interval = 5000;
export let ariaLabel = 'Image carousel';

  let idx = 0;
  let timer: ReturnType<typeof setInterval> | null = null;

  function next() {
    if (images.length === 0) return;
    idx = (idx + 1) % images.length;
  }

  function start() {
    if (timer || images.length <= 1) return;
    timer = setInterval(next, interval);
  }

  function stop() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
  }

  onMount(() => {
    start();
  });

  onDestroy(() => {
    stop();
  });
</script>

<div class="relative w-full h-full overflow-hidden hero-carousel" role="region" aria-label="Image carousel" on:mouseenter={stop} on:mouseleave={start}>
  {#each images as src, i}
    <img
      src={src}
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      style="opacity: {i === idx ? 1 : 0};"
      loading={i === 0 ? 'eager' : 'lazy'}
    />
  {/each}
</div>

<style>
  /* ensure container fills the area where used */
  :global(.hero-carousel) {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
