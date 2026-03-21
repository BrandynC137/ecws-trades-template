export function notfound() {
    return `
        <section class="bg-white min-h-screen flex items-center justify-center px-4">
            <div class="text-center max-w-xl">
                
                <!-- Big 404 -->
                <h1 class="text-6xl font-extrabold text-heading mb-4">404</h1>
                
                <!-- Message -->
                <h2 class="text-2xl font-bold text-gray-900 mb-2">
                Page Not Found
                </h2>
                <p class="text-gray-500 mb-6">
                Looks like the page you’re looking for doesn’t exist or may have been moved.
                If you need help, we’re just a call away.
                </p>

                <!-- Actions -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">

                <a href="/contact" data-navigo
                    class="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 text-center">
                    Request Service
                </a>
                </div>

                <!-- Call CTA -->
                <div class="mt-6">
                <a href="tel:5554121234" class="text-sm text-green-900 font-medium hover:underline">
                    Or call us: (555) 412-1234
                </a>
                </div>

            </div>
        </section>
    `
}