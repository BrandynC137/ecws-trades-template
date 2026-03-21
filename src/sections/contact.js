export function contact() {
    return `
        <section class="bg-white scroll-mt-18" id="contact-us">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Get a Quote or Ask a Question
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Need a quick repair, a project estimate, or want to discuss your home improvement plans? Fill out the form below and one of our skilled tradespeople will get back to you.
                </p>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="John Doe" required>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="you@example.com" required>
                    </div>
                    <div>
                        <label for="service" class="block mb-2 text-sm font-medium text-gray-900">Service Needed</label>
                        <select id="service" class="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required>
                            <option value="">Select a service</option>
                            <option>Electrical</option>
                            <option>Plumbing</option>
                            <option>HVAC</option>
                            <option>Home Renovation</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Project Details / Message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us what you need done, when, and any details that will help..." required></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-emerald-700 sm:w-fit hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:cursor-pointer">
                        Request Service
                    </button>
                </form>
            </div>
        </section>
    
    `
}