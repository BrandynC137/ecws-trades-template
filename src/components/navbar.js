export function navbar() {
    return `
        <header class="fixed w-full z-20 top-0 start-0">
            <nav class="bg-neutral-primary">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://trades.emeraldcoastwebsolutions.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/trades-logo.png" class="w-10" alt="Your Copmany Logo" />
                        <span class="self-center text-xl text-heading font-semibold whitespace-nowrap hidden sm:inline">Your Company</span>
                    </a>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" class="text-sm  text-body hover:underline">(555) 412-1234</a>
                        <a href="#" class="text-sm font-medium text-green-900 hover:underline">Login</a>
                    </div>
                </div>
            </nav>
            <nav class="bg-neutral-secondary-soft border-y border-default border-default">
                <div class="max-w-screen-xl px-4 py-3 mx-auto">
                    <div class="flex items-center">
                        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/#" class="text-green-900 hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/#about-us" class="text-green-900 hover:underline">Company</a>
                            </li>
                            <li>
                                <a href="/#services" class="text-green-900 hover:underline">Services</a>
                            </li>
                            <li>
                                <a href="/#contact-us" class="text-green-900 hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `

}