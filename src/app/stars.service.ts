import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarsService {
  stars : object[] = [
    {
      "name": "Sirius",
      "astronomical_name": "Alpha Canis Majoris",
      "description": "Sirius, also known as the Dog Star, is the brightest star in the night sky. Its name comes from the Greek word for scorching. Many early cultures had names for it, and it had special meanings in terms of rituals and the deities they saw in the sky. It's actually a double star system, with a very bright primary and a dimmer secondary star. Sirius is visible from late August (in the early mornings) until mid-to-late March) and lies 8.6 light-years away from us. Astronomers classify it as a type A1Vm star, based on their method of classifying stars by their temperatures and other characteristics."
    },
    {
      "name": "Canopus",
      "astronomical_name": "Alpha Carinae",
      "description": "Canopus was well known to the ancients and is named either for an ancient city in northern Egypt or the helmsman for Menelaus, a mythological king of Sparta. It's the second brightest star in the night sky, and mainly visible from the Southern Hemisphere. Observers who live in the southern regions of the Northern Hemisphere can also see it low in their skies during certain parts of the year. Canopus lies 74 light-years away from us and forms part of the constellation Carina. Astronomers classify it as a type F star, which means it's slightly hotter and more massive than the Sun.  It's also a more aged star than our Sun."
    },
    {
      "name": "Rigil Kentaurus",
      "astronomical_name": "Alpha Centauri",
      "description": "Rigel Kentaurus, also known as Alpha Centauri, is the third brightest star in the night sky. Its name literally means foot of the centaur and comes from the term Rijl al-Qanṭūris in Arabic. It's one of the most famous stars in the sky, and first-time travelers to the Southern Hemisphere are often eager to view it. Rigel Kentaurus is not just one star. It's actually part of a three-star system, with each star looping around with the others in an intricate dance. It lies 4.3 light-years away from us and is part of the constellation Centaurus. Astronomers classify Rigel Kentaurus as a type G2V star, similar to the Sun's classification. It may be about the same age as our Sun and is in roughly the same evolutionary period in its life."
    }
  ]
  constructor() { }
  getData(){
    return this.stars
  }
}
