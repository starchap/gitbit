import { animate, query, style, transition, trigger } from '@angular/animations';

export type ComponentNavigation = {
  icon: string;
  title: string;
  url: string;
  numberIndicator?: number|0;
}


/**
 * Custom animation for when changing between tabs in the tabmenu.component.html
 * The animations does by default not work once a tab menu applies routing.
 */
export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [

        style({
          position: 'absolute',
          left: 0,
          width: '-100%',
          opacity: 0,
          transform: 'scale(0)',
        }),
      ], { optional: true }),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1)' })),
      ], { optional: true })
    ]),
  ]);
