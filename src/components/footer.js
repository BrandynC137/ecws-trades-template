export function footer() {
    return `
<footer class="p-6 bg-gray-100">
  <div class="mx-auto max-w-screen-xl">

    <div class="grid gap-8 md:grid-cols-4">
      
      <!-- Company Info -->
      <div>
        <a href="https://trades.emeraldcoastwebsolutions.com" class="flex items-center mb-4">
          <img src="/images/trades-logo.webp" class="mr-3 h-8" alt="Company Logo" />
          <span class="text-xl font-semibold text-gray-900">Your Company</span>
        </a>
        <p class="text-gray-600 text-sm">
          Reliable and affordable services you can trust. Serving residential and commercial clients with quality workmanship.
        </p>
      </div>

      <!-- Services -->
      <div>
        <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase">Services</h2>
        <ul class="text-gray-600 space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Landscaping</a></li>
          <li><a href="#" class="hover:underline">General Contracting</a></li>
          <li><a href="#" class="hover:underline">Home Renovations</a></li>
          <li><a href="#" class="hover:underline">Outdoor Projects</a></li>
        </ul>
      </div>

      <!-- Service Area -->
      <div>
        <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase">Service Area</h2>
        <ul class="text-gray-600 space-y-2 text-sm">
          <li>City, State</li>
          <li>Nearby Area 1</li>
          <li>Nearby Area 2</li>
          <li>Nearby Area 3</li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase">Contact</h2>
        <ul class="text-gray-600 space-y-2 text-sm">
          <li class="flex"><i data-lucide="phone" class="w-4 text-green-900"></i>&nbsp; (123) 456-7890</li>
          <li class="flex"><i data-lucide="mail" class="w-4 text-green-900"></i>&nbsp; info@yourcompany.com</li>
          <li class="flex"><i data-lucide="clock" class="w-4 text-green-900"></i>&nbsp; Mon - Fri: 8AM - 6PM</li>
        </ul>
      </div>

    </div>

    <hr class="my-6 border-gray-300" />

    <!-- Bottom -->
    <div class="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
      <span>
        © 2026 Your Company. All Rights Reserved.
      </span>

      <span class="mt-2 sm:mt-0">
        Website by 
        <a href="https://emeraldcoastwebsolutions.com" class="hover:underline hover:text-green-900 text-gray-700 font-medium">
          Emerald Coast Web Solutions
        </a>
      </span>
    </div>

  </div>
</footer>
    `
}