import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="bg-gray-900 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-xl font-bold">BLUE PLAN</div>
        <div class="space-x-6">
          <a href="#" class="nav-link">ABOUT US</a>
          <a href="#" class="nav-link">WHAT WE DO</a>
          <a href="#" class="nav-link">BLOG</a>
          <a href="#" class="nav-link">CONTACT</a>
        </div>
      </div>
    </nav>

    <div class="container mx-auto">
      <!-- Hero Section -->
      <section class="hero-section h-[500px] flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-4 text-gray-900">HOW WILL YOU BE REMEMBERED?</h1>
        </div>
      </section>

      <!-- About Us -->
      <section class="py-16 bg-white rounded-3xl my-8 shadow-lg">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="glass-card">
              <h2 class="section-title">ABOUT US</h2>
              <p class="text-gray-600">
                Blue Plan is a forward-thinking consultancy firm specialized in helping
                organizations achieve their triple bottom line goals. Through our expertise
                in sustainability and environmental management, we enable our clients to
                create lasting positive impact.
              </p>
            </div>
            <div class="rounded-lg overflow-hidden">
              <img src="/nature-image.jpg" alt="Nature" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </section>

      <!-- What We Do -->
      <section class="what-we-do-section py-16">
        <div class="container mx-auto px-4">
          <h2 class="section-title text-center">WHAT WE DO</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="glass-card">
              <h3 class="text-xl font-bold mb-4">Research</h3>
              <p>Evidence-based knowledge and methodologies</p>
            </div>
            <div class="glass-card">
              <h3 class="text-xl font-bold mb-4">Strategy</h3>
              <p>Sustainable growth and development planning</p>
            </div>
            <div class="glass-card">
              <h3 class="text-xl font-bold mb-4">Implementation</h3>
              <p>Practical solutions and measurable results</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Section -->
      <section class="py-16 bg-white rounded-3xl my-8 shadow-lg">
        <div class="container mx-auto px-4">
          <h2 class="section-title">BLOG</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="blog-card">
              <img src="/blog1.jpg" alt="Blog 1" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="font-bold">Record Temperature in Malaysia This Year</h3>
              </div>
            </div>
            <div class="blog-card">
              <img src="/blog2.jpg" alt="Blog 2" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="font-bold">Record Temperature in Philippines This Year</h3>
              </div>
            </div>
            <div class="blog-card">
              <img src="/blog3.jpg" alt="Blog 3" class="w-full h-48 object-cover">
              <div class="p-4">
                <h3 class="font-bold">Record Temperature in Thailand This Year</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-16 bg-gray-900 text-white rounded-3xl my-8 shadow-lg">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 class="text-3xl font-bold mb-6">CONTACT</h2>
              <div class="space-y-4">
                <p>+65 8551 5475</p>
                <p>info@blueplan.co</p>
                <p>Mon-Fri 9:00am to 5:00pm</p>
              </div>
            </div>
            <div class="glass-card bg-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817224696876!2d103.8494!3d1.2839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTAuMCJOIDEwM8KwNTAnNTguMCJF!5e0!3m2!1sen!2ssg!4v1620000000000!5m2!1sen!2ssg"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-4">
      <div class="container mx-auto px-4 text-center">
        <p>Copyright 2024 All Right Reserved Blue Plan</p>
      </div>
    </footer>
  </div>
`