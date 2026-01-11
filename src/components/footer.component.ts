import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-churro-dark text-churro-cream pt-20 pb-10 px-6 border-t-[8px] border-churro-orange mt-20 relative overflow-hidden">
      <!-- Background Abstract -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-churro-orange rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        <!-- Brand -->
        <div class="space-y-6">
          <h2 class="font-display font-black text-5xl tracking-tighter text-stroke-white">CHURROS.</h2>
          <p class="font-body text-lg opacity-80 max-w-xs leading-relaxed">
            Hot & Crispy Digital Experiences. Baking brands since 2024.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-display font-bold text-2xl mb-6 text-churro-orange">Sitemap</h3>
          <ul class="space-y-3 font-body text-lg">
            <li><a routerLink="/" class="hover:text-churro-orange hover:translate-x-2 inline-block transition-transform">Home</a></li>
            <li><a routerLink="/work" class="hover:text-churro-orange hover:translate-x-2 inline-block transition-transform">Selected Work</a></li>
            <li><a routerLink="/services" class="hover:text-churro-orange hover:translate-x-2 inline-block transition-transform">Services</a></li>
            <li><a routerLink="/about" class="hover:text-churro-orange hover:translate-x-2 inline-block transition-transform">The Team</a></li>
          </ul>
        </div>

        <!-- Socials -->
        <div>
          <h3 class="font-display font-bold text-2xl mb-6 text-churro-orange">Connect</h3>
          <ul class="space-y-3 font-body text-lg">
            <li><a href="#" class="hover:text-churro-orange hover:underline decoration-4">Instagram</a></li>
            <li><a href="#" class="hover:text-churro-orange hover:underline decoration-4">Twitter / X</a></li>
            <li><a href="#" class="hover:text-churro-orange hover:underline decoration-4">LinkedIn</a></li>
            <li><a href="#" class="hover:text-churro-orange hover:underline decoration-4">Behance</a></li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="flex flex-col justify-between">
           <div class="p-6 bg-churro-cream text-churro-dark border-4 border-churro-orange shadow-[8px_8px_0px_0px_#FF3C00] hover:shadow-[12px_12px_0px_0px_#FF3C00] hover:-translate-y-1 transition-all duration-300">
             <span class="block font-display font-bold text-xl mb-2">Have a project?</span>
             <a routerLink="/contact" class="font-display font-black text-3xl hover:underline decoration-4 underline-offset-4">LET'S TALK -></a>
           </div>
        </div>
      </div>

      <div class="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-churro-cream/20 flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
        <p>&copy; 2024 Churros Studio. All rights reserved.</p>
        <p>Baking the web better.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}