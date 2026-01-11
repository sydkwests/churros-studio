import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="min-h-screen px-6 pb-20">
      <div class="max-w-[1200px] mx-auto pt-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h1 class="font-display font-black text-7xl md:text-8xl mb-8 leading-[0.9]">
              SMALL TEAM.<br>
              <span class="text-churro-orange">BIG TEETH.</span>
            </h1>
          </div>
          <div class="font-body text-xl leading-relaxed space-y-6 pt-4">
            <p>
              <strong>Churros Studio</strong> was founded on a simple premise: the internet has become too safe. Too clean. Too corporate.
            </p>
            <p>
              We are a collective of digital maximalists who believe that "fun" is a serious business strategy. We don't just build websites; we build playgrounds for your customers.
            </p>
            <p class="text-2xl font-bold font-display uppercase border-b-4 border-churro-orange inline-block pb-1">
              Based in the Cloud, Heart in the Chaos.
            </p>
          </div>
        </div>

        <!-- Philosophy Image/Graphic -->
        <div class="w-full h-64 md:h-96 bg-churro-dark rounded-3xl border-4 border-churro-dark mb-24 relative overflow-hidden shadow-hard flex items-center justify-center group">
          <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,#1C1917_0px,#1C1917_10px,#2a2a2a_10px,#2a2a2a_20px)] opacity-20"></div>
          <h2 class="font-display font-black text-6xl md:text-9xl text-white mix-blend-difference group-hover:scale-110 transition-transform duration-500">
            FEARLESS.
          </h2>
        </div>

        <!-- Team -->
        <h2 class="font-display font-black text-5xl mb-12 text-center">THE BAKERS</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
           @for (member of team; track member.name) {
             <div class="text-center group">
                <div class="w-48 h-48 mx-auto bg-churro-cream border-4 border-churro-dark rounded-full mb-6 overflow-hidden relative shadow-hard group-hover:shadow-hard-xl group-hover:scale-105 transition-all">
                  <div [class]="'w-full h-full ' + member.color"></div>
                  <!-- Simple CSS Avatars -->
                  <div class="absolute inset-0 flex items-center justify-center font-display font-black text-6xl opacity-20 select-none">
                    {{ member.initials }}
                  </div>
                </div>
                <h3 class="font-display font-bold text-2xl">{{ member.name }}</h3>
                <p class="font-body text-churro-orange font-bold uppercase tracking-widest text-sm">{{ member.role }}</p>
             </div>
           }
        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  team = [
    { name: 'Alex M.', role: 'Creative Director', color: 'bg-blue-400', initials: 'AM' },
    { name: 'Sarah J.', role: 'Tech Lead', color: 'bg-green-400', initials: 'SJ' },
    { name: 'Davide R.', role: '3D Artist', color: 'bg-purple-400', initials: 'DR' },
  ];
}