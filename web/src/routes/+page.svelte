<script lang="ts">
	import { t } from "$lib/translations/translations";
</script>

<section>
	<h1>SvelteKit app</h1>

	<!-- ここで言語に応じた文言を表示してみる -->
	<p>{$t("common.heroTitle")}</p>
	<div class="h-[200px] w-[200px] bg-red-600">oi</div>
</section>
