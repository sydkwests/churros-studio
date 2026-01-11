import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, signal, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="min-h-[90vh] flex flex-col justify-center items-center relative px-6 overflow-hidden" (mousemove)="onHeroMouseMove($event)">
      <!-- Decor Shapes -->
      <div class="absolute top-1/4 left-10 w-32 h-32 bg-churro-yellow border-4 border-churro-dark rounded-full shadow-hard animate-float hidden lg:block transition-transform duration-100 ease-out"
           [style.transform]="'translate(' + (mouseX() * -0.02) + 'px, ' + (mouseY() * -0.02) + 'px)'"></div>
      <div class="absolute bottom-1/4 right-10 w-48 h-48 bg-churro-lilac border-4 border-churro-dark rounded-none rotate-12 shadow-hard animate-float hidden lg:block" style="animation-delay: 1s;"
           [style.transform]="'translate(' + (mouseX() * 0.02) + 'px, ' + (mouseY() * 0.02) + 'px) rotate(12deg)'"></div>
      
      <div class="max-w-6xl mx-auto text-center z-10 relative">
        <div class="inline-block bg-churro-orange border-4 border-churro-dark px-6 py-2 rounded-full mb-8 shadow-hard -rotate-2 transform hover:rotate-0 transition-transform cursor-default">
          <span class="font-display font-bold text-white tracking-wider uppercase text-sm md:text-base">Creative Digital Bakery</span>
        </div>
        
        <h1 class="font-display font-black text-6xl md:text-8xl lg:text-[11rem] leading-[0.85] tracking-tighter text-churro-dark mb-8 perspective-text">
          <span class="inline-block transition-transform duration-100 ease-out" [style.transform]="'translateX(' + (mouseX() * 0.03) + 'px)'">WE BAKE</span> <br>
          <span class="text-stroke inline-block transition-transform duration-100 ease-out" [style.transform]="'translateX(' + (mouseX() * -0.03) + 'px)'">BRANDS</span> THAT <br>
          <span class="text-churro-orange inline-block transition-transform duration-100 ease-out" [style.transform]="'translateX(' + (mouseX() * 0.02) + 'px)'">CRUNCH.</span>
        </h1>

        <p class="font-body text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
          Churros Studio is a monstrously creative agency. We serve hot, heavy, and sugar-coated digital experiences for bold companies.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a routerLink="/work" 
             class="bg-churro-dark text-white font-display font-bold text-xl px-10 py-5 border-4 border-churro-dark shadow-hard hover:shadow-hard-xl hover:-translate-y-2 hover:bg-white hover:text-churro-dark transition-all duration-300">
             VIEW OUR WORK
          </a>
          <a routerLink="/contact" 
             class="bg-churro-cream text-churro-dark font-display font-bold text-xl px-10 py-5 border-4 border-churro-dark shadow-hard hover:shadow-hard-xl hover:-translate-y-2 transition-all duration-300">
             HIRE US
          </a>
        </div>
      </div>
    </section>

    <!-- Marquee Banner -->
    <div class="bg-churro-orange border-y-8 border-churro-dark py-6 overflow-hidden relative rotate-1 scale-105 my-20">
      <div class="flex animate-marquee whitespace-nowrap items-center">
        @for (i of [1,2,3,4,5,6]; track i) {
          <div class="flex items-center">
             <span class="font-display font-black text-5xl md:text-7xl text-white mx-6 uppercase">Bold Strategy</span>
             <span class="text-4xl text-churro-dark animate-spin-slow">✦</span>
             <span class="font-display font-black text-5xl md:text-7xl text-white mx-6 uppercase">Heavy Visuals</span>
             <span class="text-4xl text-churro-dark animate-spin-slow">☀</span>
             <span class="font-display font-black text-5xl md:text-7xl text-white mx-6 uppercase">Tasty Code</span>
             <span class="text-4xl text-churro-dark animate-spin-slow">★</span>
          </div>
        }
      </div>
    </div>

    <!-- Featured Intro -->
    <section class="py-20 px-6">
      <div class="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Main Card with Animation -->
        <div class="relative">
          <div class="absolute inset-0 bg-churro-dark translate-x-4 translate-y-4 rounded-xl"></div>
          <!-- Card Body -->
          <div #animItem class="relative bg-churro-cream border-4 border-churro-dark p-10 md:p-16 rounded-xl overflow-hidden group opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-churro-orange rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
            
            <!-- Inner Text Stagger -->
            <h3 #animItem class="font-display font-black text-5xl mb-6 relative z-10 opacity-0 translate-y-12 transition-all duration-700 ease-out delay-200">NO BORING <br>WEBSITES.</h3>
            <p #animItem class="font-body text-xl leading-relaxed relative z-10 opacity-0 translate-y-12 transition-all duration-700 ease-out delay-300">
              We don't do corporate beige. We believe the web should be fun, tactile, and memorable. If you want to blend in, go elsewhere. If you want to stand out, grab a churro.
            </p>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Item 1 with Stagger -->
          <div #animItem class="flex items-center gap-6 group cursor-pointer opacity-0 translate-y-12 transition-all duration-700 ease-out delay-500">
            <div class="w-20 h-20 bg-churro-yellow border-4 border-churro-dark flex items-center justify-center text-3xl font-black shadow-hard group-hover:rotate-12 transition-transform">01</div>
            <div>
              <h4 class="font-display font-bold text-3xl">Loud & Proud</h4>
              <p class="font-body text-lg opacity-80">Design that shouts across the room.</p>
            </div>
          </div>
          
          <!-- Item 2 with Stagger -->
          <div #animItem class="flex items-center gap-6 group cursor-pointer opacity-0 translate-y-12 transition-all duration-700 ease-out delay-700">
            <div class="w-20 h-20 bg-churro-lilac border-4 border-churro-dark flex items-center justify-center text-3xl font-black shadow-hard group-hover:-rotate-12 transition-transform">02</div>
            <div>
              <h4 class="font-display font-bold text-3xl">Pixel Perfect</h4>
              <p class="font-body text-lg opacity-80">Code as clean as our kitchen.</p>
            </div>
          </div>
          
          <!-- Item 3 with Stagger -->
          <div #animItem class="flex items-center gap-6 group cursor-pointer opacity-0 translate-y-12 transition-all duration-700 ease-out delay-1000">
            <div class="w-20 h-20 bg-churro-orange border-4 border-churro-dark flex items-center justify-center text-3xl font-black shadow-hard text-white group-hover:rotate-12 transition-transform">03</div>
            <div>
              <h4 class="font-display font-bold text-3xl">User Obsessed</h4>
              <p class="font-body text-lg opacity-80">Crazy UI, but the UX is smooth butter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('animItem') animItems!: QueryList<ElementRef>;
  mouseX = signal(0);
  mouseY = signal(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      this.animItems.forEach(item => {
        observer.observe(item.nativeElement);
      });
    }
  }

  onHeroMouseMove(e: MouseEvent) {
    // Calculate mouse position relative to center of screen for parallax
    if (isPlatformBrowser(this.platformId)) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      this.mouseX.set(e.clientX - centerX);
      this.mouseY.set(e.clientY - centerY);
    }
  }
}