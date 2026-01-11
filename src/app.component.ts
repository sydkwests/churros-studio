import { Component, signal, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  template: `
    <!-- Scroll Progress -->
    <div class="fixed top-0 left-0 h-3 bg-churro-orange z-[100] transition-all duration-100 ease-out border-b-2 border-churro-dark"
         [style.width.%]="scrollProgress()"></div>

    <!-- Custom Cursor (Desktop Only) -->
    <!-- Removed transition-transform on the outer container for 1:1 responsiveness (no lag) -->
    <div class="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block will-change-transform"
         [style.transform]="'translate3d(' + cursorX() + 'px, ' + cursorY() + 'px, 0)'">
       
       <!-- Inner Circle: 
            - Uses translate to perfectly center on the mouse coordinate 
            - Hover: Becomes a transparent ring (border) instead of a solid block 
            - Size: Reduced from 64px to 40px for better precision
       -->
       <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out"
            [class.w-3]="!isHovering()" [class.h-3]="!isHovering()" [class.bg-white]="!isHovering()" [class.border-0]="!isHovering()"
            [class.w-10]="isHovering()" [class.h-10]="isHovering()" [class.bg-transparent]="isHovering()" [class.border-2]="isHovering()" [class.border-white]="isHovering()">
       </div>
    </div>

    <div class="min-h-screen flex flex-col font-body selection:bg-churro-orange selection:text-white cursor-auto md:cursor-none">
      <app-navbar />
      <main class="flex-grow pt-24 sm:pt-32">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  scrollProgress = signal(0);
  cursorX = signal(-100);
  cursorY = signal(-100);
  isHovering = signal(false);

  private scrollListener: any;
  private mouseMoveListener: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Scroll Progress
      this.scrollListener = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        this.scrollProgress.set(scrolled);
      };
      window.addEventListener('scroll', this.scrollListener);

      // Custom Cursor
      this.mouseMoveListener = (e: MouseEvent) => {
        // Direct mapping for instant response
        this.cursorX.set(e.clientX);
        this.cursorY.set(e.clientY);

        // Check for hover targets
        const target = e.target as HTMLElement;
        // Expanded selector list to catch more interactive elements
        const isInteractive = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
        this.isHovering.set(!!isInteractive);
      };
      window.addEventListener('mousemove', this.mouseMoveListener);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollListener);
      window.removeEventListener('mousemove', this.mouseMoveListener);
    }
  }
}