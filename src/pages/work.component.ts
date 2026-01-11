import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  template: `
    <section class="px-6 pb-20 min-h-screen">
      <div class="max-w-[1400px] mx-auto">
        <!-- Header -->
        <div class="mb-20 pt-10">
          <h1 class="font-display font-black text-6xl md:text-8xl tracking-tighter mb-6">
            SELECTED <span class="text-churro-orange">TRIUMPHS</span>
          </h1>
          <p class="font-body text-2xl max-w-2xl border-l-8 border-churro-dark pl-6 ml-2">
            A gallery of digital monsters we've unleashed upon the world.
          </p>
        </div>

        <!-- Projects Grid with Offset -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-0">
          
          @for (project of projects; track project.id) {
            <article class="group relative" [class.md:mt-32]="project.id % 2 === 0" [class.md:-mt-10]="project.id % 2 !== 0 && project.id > 1">
              <!-- Visual Card -->
              <div class="relative h-[400px] md:h-[550px] mb-8 bg-churro-dark border-4 border-churro-dark overflow-hidden rounded-2xl shadow-hard group-hover:shadow-hard-xl group-hover:-translate-y-2 transition-all duration-300">
                <!-- Abstract Art Background -->
                <div [class]="'absolute inset-0 ' + project.bgClass">
                    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <!-- Dynamic shapes based on index for variety -->
                    @if (project.id % 2 === 0) {
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                        <div class="absolute bottom-10 right-10 w-32 h-32 border-8 border-black/10 rotate-45"></div>
                    } @else {
                        <div class="absolute top-10 left-10 w-full h-full bg-gradient-to-br from-white/10 to-transparent transform rotate-12"></div>
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-display font-black text-black/10 select-none group-hover:scale-110 transition-transform duration-700">{{project.letter}}</div>
                    }
                </div>
                
                <!-- Overlay Content -->
                <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-churro-dark/95 via-churro-dark/50 to-transparent">
                   <div class="flex gap-2 mb-3 flex-wrap">
                     @for (tag of project.tags; track tag) {
                       <span class="bg-churro-cream text-churro-dark text-xs font-bold px-3 py-1 border-2 border-churro-dark uppercase tracking-wider shadow-[2px_2px_0px_0px_#000]">{{tag}}</span>
                     }
                   </div>
                </div>
              </div>

              <!-- Text Content -->
              <div class="px-2 mb-16 md:mb-0">
                <h3 class="font-display font-black text-4xl mb-2 group-hover:text-churro-orange transition-colors">{{ project.title }}</h3>
                <p class="font-body text-lg opacity-80 mb-4 max-w-md">{{ project.concept }}</p>
                <button class="font-bold uppercase tracking-widest text-sm border-b-2 border-churro-dark pb-1 group-hover:border-churro-orange transition-colors">View Case Study</button>
              </div>
            </article>
          }

        </div>
      </div>
    </section>
  `
})
export class WorkComponent {
  projects = [
    {
      id: 1,
      title: 'Neon Jungle',
      concept: 'A brutalist ecommerce experience for rare plants.',
      tags: ['Branding', 'Web Design'],
      bgClass: 'bg-green-600',
      letter: 'N'
    },
    {
      id: 2,
      title: 'Hyper Juice',
      concept: 'High-energy motion identity for a sports drink.',
      tags: ['Motion', '3D', 'Strategy'],
      bgClass: 'bg-purple-600',
      letter: 'H'
    },
    {
      id: 3,
      title: 'Block Party',
      concept: 'Decentralized social network UI system.',
      tags: ['Product Design', 'UI/UX'],
      bgClass: 'bg-blue-600',
      letter: 'B'
    },
    {
      id: 4,
      title: 'Mono Type',
      concept: 'Experimental typography festival website.',
      tags: ['Web Development', 'Creative Direction'],
      bgClass: 'bg-red-600',
      letter: 'M'
    }
  ];
}