document.addEventListener('DOMContentLoaded', () => {
    // Shared Navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
            <div class="container mx-auto px-6 py-4 flex justify-between items-center relative z-50">
                <a href="index.html" class="flex items-center gap-2 group">
                    <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        FCT
                    </div>
                    <span class="text-xl font-bold text-white tracking-wide hidden sm:block group-hover:text-blue-400 transition-colors">Faculty of Computing & Technology</span>
                </a>
                
                <!-- Desktop Menu -->
                <div class="hidden lg:flex items-center gap-8">
                    <a href="index.html" class="text-gray-300 hover:text-white hover:scale-105 transition-all text-sm font-medium uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Home</a>
                    <a href="degree_programs.html" class="text-gray-300 hover:text-white hover:scale-105 transition-all text-sm font-medium uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Degrees</a>
                    <a href="departments.html" class="text-gray-300 hover:text-white hover:scale-105 transition-all text-sm font-medium uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Departments</a>
                    <a href="research.html" class="text-gray-300 hover:text-white hover:scale-105 transition-all text-sm font-medium uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Research</a>
                    <a href="university_life.html" class="text-gray-300 hover:text-white hover:scale-105 transition-all text-sm font-medium uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Life</a>
                    <a href="achievements.html" class="text-gray-300 hover:text-white hover:scale-105 transition-all text-sm font-medium uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Achievements</a>
                    <a href="#contact" class="px-5 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">Contact</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="menu-btn" class="lg:hidden text-white focus:outline-none">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu content -->
            <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700 p-6 flex-col gap-4 lg:hidden z-40 transform origin-top scale-y-0 transition-transform duration-300">
                <a href="index.html" class="text-gray-300 hover:text-white text-lg font-medium">Home</a>
                <a href="degree_programs.html" class="text-gray-300 hover:text-white text-lg font-medium">Degrees</a>
                <a href="departments.html" class="text-gray-300 hover:text-white text-lg font-medium">Departments</a>
                <a href="research.html" class="text-gray-300 hover:text-white text-lg font-medium">Research</a>
                <a href="university_life.html" class="text-gray-300 hover:text-white text-lg font-medium">Life</a>
                <a href="achievements.html" class="text-gray-300 hover:text-white text-lg font-medium">Achievements</a>
                <a href="#contact" class="text-blue-400 font-bold">Contact Us</a>
            </div>
        `;

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if(menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                // Allow a small delay for removing hidden to let transition work if implemented via classes properly, 
                // but for simple toggle creating scale effect:
                if (mobileMenu.classList.contains('hidden')) {
                     mobileMenu.style.transform = 'scaleY(0)';
                } else {
                    requestAnimationFrame(() => {
                        mobileMenu.style.transform = 'scaleY(1)';
                    });
                }
            });
        }
    }

    // Footer
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="container mx-auto px-6 py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div class="space-y-4">
                        <div class="flex items-center gap-2">
                             <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                                FCT
                            </div>
                            <span class="text-xl font-bold text-white">FCT</span>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Empowering the future through innovation, technology, and excellence in education.
                        </p>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
                        <ul class="space-y-2 text-slate-400 text-sm">
                            <li><a href="degree_programs.html" class="hover:text-blue-400 transition-colors">Undergraduate Degrees</a></li>
                            <li><a href="research.html" class="hover:text-blue-400 transition-colors">Research Centers</a></li>
                            <li><a href="departments.html" class="hover:text-blue-400 transition-colors">Academic Departments</a></li>
                            <li><a href="university_life.html" class="hover:text-blue-400 transition-colors">Student Life</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Contact</h4>
                        <ul class="space-y-2 text-slate-400 text-sm">
                            <li class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> University Park, Tech City</li>
                            <li class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> contact@fct.ac.lk</li>
                            <li class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +94 11 234 5678</li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Follow Us</h4>
                        <div class="flex gap-4">
                            <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
                    &copy; 2024 Faculty of Computing and Technology. All rights reserved.
                </div>
            </div>
        `;
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
