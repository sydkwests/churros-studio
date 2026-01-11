import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section class="min-h-screen px-6 py-10 flex flex-col items-center">
      
      <div class="max-w-4xl w-full text-center mb-16 relative z-10">
        <h1 class="font-display font-black text-6xl md:text-8xl mb-6">SAY HELLO</h1>
        <p class="font-body text-xl max-w-xl mx-auto">
          Got a project that needs some spice? Fill out the form below. 
          Warning: We may reply with excessive enthusiasm.
        </p>
      </div>

      <div class="w-full max-w-2xl relative">
        <!-- Form Decor -->
        <div class="absolute -top-20 -right-20 w-32 h-32 bg-churro-yellow border-4 border-churro-dark rounded-full z-0 hidden md:block animate-float shadow-hard pointer-events-none"></div>
        <div class="absolute -bottom-16 -left-20 w-40 h-40 bg-churro-lilac border-4 border-churro-dark z-0 hidden md:block animate-spin-slow shadow-hard pointer-events-none"></div>

        <form (submit)="onSubmit($event)" class="bg-churro-cream border-4 border-churro-dark p-8 md:p-12 rounded-lg shadow-hard-xl relative z-10 flex flex-col gap-6" novalidate>
          
          <!-- Name Field -->
          <div class="flex flex-col gap-2">
            <label class="font-display font-bold text-xl uppercase flex justify-between items-center">
              Your Name
              @if (attempted() && !formData.name) {
                <span class="text-red-600 text-sm animate-pulse normal-case font-body font-bold">Required!</span>
              }
            </label>
            <input type="text" required
              [(ngModel)]="formData.name" name="name"
              [class.border-red-600]="attempted() && !formData.name"
              [class.animate-shake]="attempted() && !formData.name"
              [class.border-churro-dark]="!attempted() || formData.name"
              class="bg-white border-4 p-4 font-body text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3C00] focus:-translate-y-1 transition-all placeholder:text-gray-300" 
              placeholder="Start with your name..." />
          </div>

          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label class="font-display font-bold text-xl uppercase flex justify-between items-center">
              Your Email
              @if (attempted() && !formData.email) {
                <span class="text-red-600 text-sm animate-pulse normal-case font-body font-bold">Required!</span>
              }
            </label>
            <input type="email" required
              [(ngModel)]="formData.email" name="email"
              [class.border-red-600]="attempted() && !formData.email"
              [class.animate-shake]="attempted() && !formData.email"
              [class.border-churro-dark]="!attempted() || formData.email"
              class="bg-white border-4 p-4 font-body text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3C00] focus:-translate-y-1 transition-all placeholder:text-gray-300" 
              placeholder="your@email.com" />
          </div>

          <!-- Message Field -->
          <div class="flex flex-col gap-2">
            <label class="font-display font-bold text-xl uppercase flex justify-between items-center">
              The Idea
              @if (attempted() && !formData.message) {
                <span class="text-red-600 text-sm animate-pulse normal-case font-body font-bold">Required!</span>
              }
            </label>
            <textarea required rows="4"
              [(ngModel)]="formData.message" name="message"
              [class.border-red-600]="attempted() && !formData.message"
              [class.animate-shake]="attempted() && !formData.message"
              [class.border-churro-dark]="!attempted() || formData.message"
              class="bg-white border-4 p-4 font-body text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3C00] focus:-translate-y-1 transition-all placeholder:text-gray-300 resize-none" 
              placeholder="Tell us about your monstrous project..."></textarea>
          </div>

          <button type="submit" 
            class="bg-churro-dark text-white font-display font-black text-2xl uppercase py-5 border-4 border-churro-dark mt-4 hover:bg-churro-orange hover:border-churro-orange hover:-translate-y-1 hover:shadow-lg transition-all active:translate-y-1 active:shadow-none">
            Send It
          </button>

          <!-- Success Overlay -->
          @if (submitted()) {
             <div class="absolute inset-0 bg-churro-cream/95 flex flex-col items-center justify-center text-center p-8 border-4 border-churro-dark m-2 animate-fade-in z-20">
               <div class="text-6xl mb-4 animate-bounce">🍩</div>
               <h3 class="font-display font-black text-4xl mb-2 text-churro-orange">FRESH FROM THE OVEN!</h3>
               <p class="font-body text-lg max-w-xs mx-auto mb-6">We've received your request. Expect a reply faster than you can eat a churro.</p>
               <button (click)="resetForm()" class="px-8 py-3 bg-churro-dark text-white font-bold uppercase hover:bg-churro-orange transition-colors border-2 border-transparent hover:border-churro-dark shadow-hard hover:shadow-hard-lg hover:-translate-y-1">
                 Bake Another
               </button>
             </div>
          }

        </form>
      </div>

    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
      20%, 40%, 60%, 80% { transform: translateX(4px); }
    }
    .animate-shake {
      animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
    }
  `]
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };
  submitted = signal(false);
  attempted = signal(false);

  onSubmit(e: Event) {
    e.preventDefault();
    this.attempted.set(true);
    
    // Check if fields are filled
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted.set(true);
    }
  }

  resetForm() {
    this.formData = { name: '', email: '', message: '' };
    this.submitted.set(false);
    this.attempted.set(false);
  }
}