import {
  trigger,
  animate,
  transition,
  style,
  query
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

// import {
//   trigger,
//   // state,
//   style,
//   animate,
//   transition,
//   query as q,
//   animateChild,
//   group
// } from '@angular/animations';

// const query = (s, a, o = { optional: true }) => q(s, a, o);

// export const routeAnimations = trigger('routeAnimations', [
//   transition('* => *', [
//     query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
//     query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),

//     group([
//       query(':leave', [
//         style({ transform: 'translateX(0%)' }),
//         animate('1.0s ease-in-out', style({ transform: 'translateX(-100%)' }))
//       ], { optional: true }),
//       query(':enter', [
//         animate('1.0s ease-in-out', style({ transform: 'translateX(0%)' })),
//         animateChild()
//       ], { optional: true })
//     ]),
//   ]),
// ]);

// export const routeAnimations = trigger('routeAnimations', [
//   transition('* <=> *', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%'
//       })
//     ]),
//     query(':enter', [
//       style({ left: '-100%' })
//     ]),
//     query(':leave', animateChild()),
//     group([
//       query(':leave', [
//         animate('300ms ease-out', style({ left: '100%' }))
//       ]),
//       query(':enter', [
//         animate('300ms ease-out', style({ left: '0%' }))
//       ])
//     ]),
//     query(':enter', animateChild()),
//   ]),
//   transition('* <=> FilterPage', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%'
//       })
//     ]),
//     query(':enter', [
//       style({ left: '-100%' })
//     ]),
//     query(':leave', animateChild()),
//     group([
//       query(':leave', [
//         animate('200ms ease-out', style({ left: '100%' }))
//       ]),
//       query(':enter', [
//         animate('300ms ease-out', style({ left: '0%' }))
//       ])
//     ]),
//     query(':enter', animateChild()),
//   ])
// ]);