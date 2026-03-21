export function services() {
    return `
<section class="bg-gray-100 scroll-mt-18" id="services">
  <div class="py-12 px-4 mx-auto max-w-screen-xl lg:px-6">
      
      <!-- Header -->
      <div class="max-w-screen-md mb-12">
          <h2 class="mb-4 text-4xl font-extrabold text-green-900">
              Built for modern trade professionals
          </h2>
          <p class="text-gray-600 text-lg">
              Whether you're an electrician, landscaper, or contractor, we help you get the job done right.
          </p>
      </div>

      <!-- Grid -->
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Reliable Service -->
          <div>
              <div class="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-green-50">
                <i data-lucide="handshake" class="text-green-600"></i>  
              </div>
              <h3 class="mb-2 text-xl font-semibold text-gray-900">Reliable Service</h3>
              <p class="text-gray-600">
                  Dependable, on-time work you can trust for any project.
              </p>
          </div>

          <!-- Electrical / Skilled -->
          <div>
              <div class="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-green-50">
                  <!-- Lightning Bolt -->
                <i data-lucide="zap" class="text-green-600"></i>
              </div>
              <h3 class="mb-2 text-xl font-semibold text-gray-900">Skilled Workmanship</h3>
              <p class="text-gray-600">
                  Experienced professionals across electrical, construction, and more.
              </p>
          </div>

          <!-- Home / Projects -->
          <div>
              <div class="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-green-50">
                  <!-- Home -->
                <i data-lucide="home" class="text-green-600"></i>
              </div>
              <h3 class="mb-2 text-xl font-semibold text-gray-900">Residential & Commercial</h3>
              <p class="text-gray-600">
                  From homes to job sites, we handle projects of all sizes.
              </p>
          </div>

          <!-- Project Management -->
          <div>
              <div class="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-green-50">
                  <!-- Clipboard -->
                <i data-lucide="ChartNetwork" class="text-green-600"></i>
              </div>
              <h3 class="mb-2 text-xl font-semibold text-gray-900">Project Management</h3>
              <p class="text-gray-600">
                  Clear timelines, communication, and execution from start to finish.
              </p>
          </div>

          <!-- Custom Work -->
          <div>
              <div class="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-green-50">
                  <!-- Ruler -->
                <i data-lucide="clipboard" class="text-green-600"></i>
              </div>
              <h3 class="mb-2 text-xl font-semibold text-gray-900">Custom Solutions</h3>
              <p class="text-gray-600">
                  Tailored work to match your exact needs and budget.
              </p>
          </div>

          <!-- Trust -->
          <div>
              <div class="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-green-50">
                  <!-- Shield -->
                <i data-lucide="shield" class="text-green-600"></i>
              </div>
              <h3 class="mb-2 text-xl font-semibold text-gray-900">Licensed & Insured</h3>
              <p class="text-gray-600">
                  Fully covered and qualified for safe, professional work.
              </p>
          </div>

      </div>
  </div>
</section>
    `

}