export function hero() {
    return `
        <section class="bg-gray-50 pt-32 pb-20" id="hero-section">
        <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
            
            <div class="max-w-2xl">
            
            <!-- Headline -->
            <h1 class="mb-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Reliable Landscaping & Contracting Services You Can Trust
            </h1>

            <!-- Subtext -->
            <p class="mb-6 text-lg text-gray-600">
                From outdoor transformations to home improvements, we deliver quality workmanship at a fair price. Serving homeowners and businesses in your local area.
            </p>

            <!-- Trust Signals -->
            <div class="flex flex-wrap gap-4 mb-8 text-sm text-gray-700">
                <div class="bg-white px-3 py-1 rounded-full shadow-sm flex"><i data-lucide="BadgeCheck"></i><span class="">&nbsp; Free Estimates</span></div>
                <div class="bg-white px-3 py-1 rounded-full shadow-sm flex"><i data-lucide="BadgeCheck"></i><span class="">&nbsp; Licensed & Insured</span></div>
                <div class="bg-white px-3 py-1 rounded-full shadow-sm flex"><i data-lucide="BadgeCheck"></i><span class="">&nbsp; Local & Reliable</span></div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
                
                <a href="#contact-us" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition">
                Get a Free Estimate
                </a>

                <a href="tel:1234567890" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                <i data-lucide="phone" class="text-emerald-800 w-5"></i><span>&nbsp; Call Now</span>
                </a>
            </div>
            </div>

        </div>
        </section>

    `
}