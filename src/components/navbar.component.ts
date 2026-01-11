import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-8 sm:py-6 pointer-events-none">
      <div class="max-w-[1400px] mx-auto flex justify-between items-center">
        
        <!-- Logo -->
        <a routerLink="/" 
           class="pointer-events-auto bg-churro-cream border-4 border-churro-dark px-4 py-2 shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
           <span class="font-display font-black text-2xl tracking-tighter uppercase group-hover:text-churro-orange transition-colors relative z-10 inline-block group-hover:animate-jitter">
             Churros<span class="text-churro-orange group-hover:text-churro-dark">.</span>
           </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-4 pointer-events-auto">
          @for (item of menuItems; track item.path) {
            <a [routerLink]="item.path" 
               routerLinkActive="bg-churro-orange text-white rotate-2 shadow-hard-lg scale-105"
               [routerLinkActiveOptions]="{exact: item.exact}"
               class="bg-churro-cream border-4 border-churro-dark px-6 py-2 font-display font-bold text-lg uppercase tracking-tight shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-200">
              {{ item.label }}
            </a>
          }

          <!-- Contact CTA -->
          <a routerLink="/contact" 
             routerLinkActive="translate-y-1 shadow-none bg-churro-dark text-white"
             class="ml-4 bg-churro-orange text-white border-4 border-churro-dark px-6 py-2 font-display font-bold text-lg uppercase tracking-tight shadow-hard hover:-translate-y-1 hover:shadow-hard-lg hover:bg-churro-dark transition-all duration-200">
            Contact
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button (click)="toggleMenu()" class="md:hidden pointer-events-auto bg-churro-dark text-white p-3 shadow-hard hover:bg-churro-orange transition-colors z-50 relative">
          @if (!isMenuOpen()) {
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
              <path stroke-linecap="square" stroke-linejoin="miter" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          } @else {
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
              <path stroke-linecap="square" stroke-linejoin="miter" d="M6 18 18 6M6 6l12 12" />
            </svg>
          }
        </button>
      </div>

      <!-- Mobile Menu Overlay (Curtain) -->
      @if (isMenuOpen()) {
        <div class="fixed inset-0 bg-churro-orange z-40 flex flex-col justify-center items-center gap-6 pointer-events-auto md:hidden animate-curtain-drop overflow-hidden">
           <!-- Decor -->
           <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
           
          @for (item of menuItems; track item.path) {
            <a [routerLink]="item.path" 
               (click)="toggleMenu()"
               routerLinkActive="text-churro-dark scale-110"
               [routerLinkActiveOptions]="{exact: item.exact}"
               class="font-display font-black text-6xl uppercase text-white hover:text-churro-dark transition-all hover:scale-105 transform">
              {{ item.label }}
            </a>
          }

          <a routerLink="/contact" (click)="toggleMenu()" class="mt-8 bg-churro-dark text-white font-display font-bold text-2xl px-12 py-4 border-4 border-white shadow-[6px_6px_0px_0px_#fff] hover:shadow-[10px_10px_0px_0px_#fff] hover:-translate-y-1 transition-all uppercase">
            Contact
          </a>
        </div>
      }
    </nav>
  `,
  styles: [`
    @keyframes curtainDrop {
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    }
    .animate-curtain-drop {
      animation: curtainDrop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes jitter {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(-2px, 1px) rotate(-1deg); }
      50% { transform: translate(1px, -1px) rotate(1deg); }
      75% { transform: translate(-1px, 2px) rotate(0deg); }
      100% { transform: translate(1px, 1px) rotate(0deg); }
    }
    .animate-jitter {
      animation: jitter 0.3s ease-in-out infinite;
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  menuItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about', exact: false },
    { label: 'Work', path: '/work', exact: false },
    { label: 'Services', path: '/services', exact: false },
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}