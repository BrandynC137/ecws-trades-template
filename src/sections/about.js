export function about() {
    return `
        <section class="bg-white scroll-mt-20" id="about-us">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        Skilled Trades, Reliable Service
                    </h2>
                    <p class="mb-4">
                        At <strong>Your Company Name</strong>, we provide trusted trade services for homes and businesses. From electrical and plumbing work to renovations and repairs, our team brings experience, precision, and care to every project. Small enough to provide personal attention, big enough to handle projects of any size.
                    </p>
                    <p>
                        We take pride in getting the job done right the first time. Our skilled tradespeople are licensed, insured, and committed to delivering quality work on time, every time.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="/images/about-us-1.jpg" loading="lazy" alt="Trade team at work">
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/images/about-us-2.jpg" loading="lazy" alt="Completed trade project">
                </div>
                <a href="/gallery" data-navigo class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition">
                    Check out our work
                </a>
            </div>
        </section>
    `
}