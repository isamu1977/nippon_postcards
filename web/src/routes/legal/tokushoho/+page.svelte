<script lang="ts">
  import { t } from "$lib/translations/translations";
</script>

<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
  <!-- Header -->
  <header class="mb-8">
    <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
      特定商取引法に基づく表記
      <span class="block text-base sm:text-lg font-semibold text-gray-600 mt-2">
        {$t("tokushoho.header.subtitle")}
      </span>
    </h1>
  </header>

  <!-- Content -->
  <div class="space-y-10 text-gray-800 leading-relaxed">
    <!-- 1. Seller Information -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        1. 事業者の情報
        <span class="block text-sm font-semibold text-gray-500">
          {$t("tokushoho.section1.subtitle")}
        </span>
      </h2>

      <dl class="rounded-2xl border border-gray-200 bg-white p-6 space-y-5">
        <div>
          <dt class="text-sm font-semibold text-gray-500">
            屋号・ショップ名 / {$t("tokushoho.labels.siteName")}
          </dt>
          <dd class="mt-1 text-base font-semibold text-gray-900">Nippon Postcards</dd>
          <dd class="text-sm text-gray-600">NipponPostcards.com</dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            販売業者名 / {$t("tokushoho.labels.sellerName")}
          </dt>
          <dd class="mt-1 text-base font-semibold text-gray-900">松山 武</dd>
          <dd class="text-sm text-gray-600">Isamu Matsuyama</dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            所在地 / {$t("tokushoho.labels.address")}
          </dt>
          <dd class="mt-1 text-base text-gray-900">
            〒440-0863 愛知県豊橋市向山東町２７番地１
          </dd>
          <dd class="text-sm text-gray-600">
            440-0863 Aichi-ken Toyohashi-shi, Mukaiyama Higashimachi 27-1, Japan
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            電話番号 / {$t("tokushoho.labels.phone")}
          </dt>
          <dd class="mt-1 text-base text-gray-900">080-7837-9187</dd>
          <dd class="text-sm text-gray-600">
            <span class="font-semibold text-gray-700">
              {$t("tokushoho.labels.mobilePhoneNumber")}
            </span>
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            メールアドレス / {$t("tokushoho.labels.email")}
          </dt>
          <dd class="mt-1 text-base">
            <a
              class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
              href="mailto:cyberjapanservices@gmail.com"
            >
              cyberjapanservices@gmail.com
            </a>
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            ホームページURL / {$t("tokushoho.labels.website")}
          </dt>
          <dd class="mt-1 text-base">
            <a
              class="text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800 font-semibold"
              href="https://www.nipponpostcards.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.nipponpostcards.com
            </a>
          </dd>
        </div>
      </dl>
    </section>

    <!-- 2. Product/Service Information -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold text-gray-900">
        2. 商品・サービスに関する情報
        <span class="block text-sm font-semibold text-gray-500">
          {$t("tokushoho.section2.subtitle")}
        </span>
      </h2>

      <dl class="rounded-2xl border border-gray-200 bg-white p-6 space-y-5">
        <div>
          <dt class="text-sm font-semibold text-gray-500">
            販売価格 / {$t("tokushoho.labels.salesPrice")}
          </dt>
          <dd class="mt-1 text-base text-gray-900">
            ポストカード1枚一律 <span class="font-semibold">US$15</span>（税込）
          </dd>
          <dd class="text-sm text-gray-600">
            {$t("tokushoho.values.usd15PerPostcardTaxIncluded")}
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            注文方法 / {$t("tokushoho.labels.orderMethod")}
          </dt>
          <dd class="mt-1 text-base text-gray-900">インターネット（当サイト）</dd>
          <dd class="text-sm text-gray-600">
            {$t("tokushoho.values.internetAndWebsiteOnly")}
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            支払方法 / {$t("tokushoho.labels.paymentMethod")}
          </dt>
          <dd class="mt-1 text-base text-gray-900">クレジットカード、PayPal</dd>
          <dd class="text-sm text-gray-600">
            {$t("tokushoho.values.creditCardAndPayPal")}
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            支払時期 / {$t("tokushoho.labels.paymentTiming")}
          </dt>
          <dd class="mt-1 text-base text-gray-900">注文時に決済</dd>
          <dd class="text-sm text-gray-600">
            {$t("tokushoho.values.paymentAtTimeOfOrder")}
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            引渡し時期 / {$t("tokushoho.labels.deliveryShipping")}
          </dt>
          <dd class="mt-1 text-base text-gray-900">
            決済確認後、<span class="font-semibold">2日以内</span>に発送します。普通郵便で発送するため、トラッキングはできません。
          </dd>
          <dd class="text-sm text-gray-600">
            {$t("tokushoho.values.shippedWithin2DaysNoTracking")}
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            返品・交換・キャンセル / {$t("tokushoho.labels.returnsExchangesCancellations")}
          </dt>
          <dd class="mt-2 space-y-2 text-base text-gray-900">
            <p>
              <span class="font-semibold">返品・交換：</span>
              商品の性質上、発送後の返品および交換は原則としてお受けできません。
            </p>
            <p>
              <span class="font-semibold">キャンセル：</span>
              発送前に限り、キャンセルが可能です。キャンセルをご希望の場合は、できるだけ早くメールにてご連絡ください。
            </p>
            <p class="text-sm text-gray-600">
              {$t("tokushoho.values.returnsExchangesCancellationsText")}
            </p>
          </dd>
        </div>

        <div>
          <dt class="text-sm font-semibold text-gray-500">
            クーリングオフ / {$t("tokushoho.labels.coolingOffPeriod")}
          </dt>
          <dd class="mt-1 text-base text-gray-900">
            当サイトは通信販売のため、クーリングオフは適用されません。
          </dd>
          <dd class="text-sm text-gray-600">
            {$t("tokushoho.values.coolingOffDoesNotApply")}
          </dd>
        </div>
      </dl>
    </section>

    <!-- Notes -->
    <section class="rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-3">
      <h3 class="text-base font-bold text-gray-900">
        補足 / {$t("tokushoho.notes.title")}
      </h3>
      <ul class="pl-5 list-disc space-y-2 text-sm text-gray-700">
        <li>
          表記内容は予告なく変更される場合があります。最新情報は本ページをご確認ください。
        </li>
        <li>
          海外宛の配送では、国・地域により関税・輸入税・手数料が発生する場合があります（発生する場合は受取人負担となることがあります）。
        </li>
      </ul>
    </section>
  </div>
</section>