import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section class="min-h-screen px-6 pb-20">
      <div class="max-w-[1400px] mx-auto">
        
        <div class="mb-20 pt-10 text-center">
          <h1 class="font-display font-black text-6xl md:text-9xl mb-4 text-stroke">
            OUR MENU
          </h1>
          <p class="font-body text-xl md:text-2xl max-w-3xl mx-auto">
            We don't sell hours. We sell impact. Here's what we're cooking in the kitchen.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          @for (service of services; track service.title) {
            <div class="bg-churro-cream border-4 border-churro-dark p-8 rounded-3xl shadow-hard hover:shadow-hard-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              
              <!-- Decor number -->
              <span class="absolute top-0 right-0 font-display font-black text-8xl text-churro-dark/5 -mt-2 -mr-2 group-hover:text-churro-orange/10 transition-colors">
                {{ service.id }}
              </span>

              <div class="w-16 h-16 bg-churro-dark rounded-full mb-6 border-4 border-churro-dark flex items-center justify-center group-hover:bg-churro-orange transition-colors">
                 <span class="text-3xl">{{ service.icon }}</span>
              </div>

              <h3 class="font-display font-black text-3xl mb-4 leading-none uppercase">{{ service.title }}</h3>
              
              <p class="font-body text-lg opacity-80 mb-8 flex-grow">
                {{ service.desc }}
              </p>

              <ul class="space-y-2 border-t-4 border-churro-dark/10 pt-6">
                @for (item of service.items; track item) {
                  <li class="flex items-center gap-2 font-bold font-body text-sm uppercase tracking-wide">
                    <span class="w-2 h-2 bg-churro-orange rounded-full"></span>
                    {{ item }}
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <!-- Process Section -->
        <div class="bg-churro-dark text-churro-cream rounded-3xl p-8 md:p-16 border-4 border-churro-orange relative overflow-hidden">
          <div class="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          
          <h2 class="font-display font-black text-5xl md:text-7xl mb-16 text-center relative z-10 text-stroke-white">HOW WE BAKE IT</h2>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            @for (step of process; track step.step) {
              <div class="relative group">
                <!-- Connector Line (Desktop) -->
                @if (step.step !== '04') {
                  <div class="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-churro-orange/30 -z-10"></div>
                }

                <div class="w-16 h-16 bg-churro-orange border-4 border-churro-cream rounded-full flex items-center justify-center text-churro-cream font-black text-xl mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_#fff]">
                  {{ step.step }}
                </div>

                <div class="text-center">
                  <h3 class="font-display font-bold text-2xl mb-2">{{ step.title }}</h3>
                  <p class="font-body text-white/70 text-sm">{{ step.desc }}</p>
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  services = [
    {
      id: '01',
      title: 'Brand Identity',
      icon: '👁️',
      desc: 'We craft logos and systems that make people stare. Unapologetically bold identities for brands that want to be seen.',
      items: ['Logo Design', 'Visual Systems', 'Tone of Voice']
    },
    {
      id: '02',
      title: 'Web Design',
      icon: '💻',
      desc: 'Digital storefronts that don’t look like templates. Custom, weird, and wonderful web experiences.',
      items: ['UI/UX', 'Wireframing', 'Prototyping']
    },
    {
      id: '03',
      title: 'Development',
      icon: '⚙️',
      desc: 'Clean code under the hood of a monster machine. Fast, accessible, and scalable.',
      items: ['Frontend', 'CMS Integration', 'Animation']
    },
    {
      id: '04',
      title: 'Motion',
      icon: '🎬',
      desc: 'If it doesn’t move, it’s dead. We bring static pixels to life with butter-smooth animation.',
      items: ['2D/3D Animation', 'Interaction', 'Video']
    },
    {
      id: '05',
      title: 'Strategy',
      icon: '🧠',
      desc: 'We don’t just make things pretty. We make them work. Data-driven madness.',
      items: ['Market Research', 'Positioning', 'Campaigns']
    },
    {
      id: '06',
      title: 'Content',
      icon: '📝',
      desc: 'Words that punch. Images that slap. Content that converts.',
      items: ['Copywriting', 'Art Direction', 'Social Media']
    }
  ];

  process = [
    { step: '01', title: 'Mixing', desc: 'Discovery & Strategy. We learn what makes you tick.' },
    { step: '02', title: 'Baking', desc: 'Design & Concept. We throw ideas into the oven.' },
    { step: '03', title: 'Frosting', desc: 'Development & Polish. Adding the sugar.' },
    { step: '04', title: 'Serving', desc: 'Launch & Hype. The world eats it up.' }
  ];
}