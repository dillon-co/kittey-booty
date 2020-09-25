import { Injectable } from '@angular/core';
// This app was made for my girlfriend, this section is for the logic that displays a random compliment every time she uses it

@Injectable()
export class LikeableService {
  public likeableThings = [
                           "wavy hair",
                           "smile",
                           "big blue eyes",
                           "Cheek Bones",
                           "spirituality",
                           "legs, oh your legs, they make my day",
                           "ability to grasp abstract concepts",
                           "entheusiasm",
                           "laugh",
                           "ability to voice your opinion",
                           "ability to overcome trials",
                           "willingness to try new things",
                           "bravery",
                           "advernterousness",
                           "cleverness",
                           "songs you write me",
                           "soft way of saying I love you",
                           "pleasant voice",
                           "ambition",
                           "zest for life",
                           "ability to be good with people",
                           "ability to follow your heart",
                           "care for your friends",
                         ]

    public likeableMemories = [
                                "our second date. Donut falls (almost made it), and motorcycle ride",
                                "that time we went to moab and didn't go camping",
                                "that romantic dinner we had at my parents house",
                                "that time we pretended to volunteer for the parking service",
                                "when we waited in the parking lot of the vet for 2 hours",
                                "that photoshoot in moab",
                                "that time we hiked to blood lake, but didn't make it",
                                "that wedding where you had a lot of fun and made friends while I was busy being a groomsman(you looked great)",
                                "that sapa date where we rode the scooter around town",
                                "that time we almsost missed our sapa dinner",
                                "that time you surprised me with a doordash smoothy",
                                "that time you looked beautiful",
                                "that baccon in moab",
                                "when we got caught in the rain on the motorcycle",
                                "when you kissed me",
                                "waking up to your grin, framed by the glow of your hair, touched by the sunrise",
                                "that time I won you over by showing up to your house with 2 latte's",
                                "that time you looked at me",
                                "when I made one too many three way jokes"
                              ]

  public thingsWeHaveInCommon = [
                                  "ambition",
                                  "love for the arts",
                                  "creativity",
                                  "love of life",
                                  "the audacity to make our own paths",
                                  "a love for sushi",
                                  "reading",
                                  "spirituality",
                                ]


  createCommonality(){
    return `I like how we have ${this.randomSample(this.thingsWeHaveInCommon)} In common`
  }

  createMemory(){
    var mem_messages = ['One of my favorite memories is ', "This made me smile, remember ", "It puts a smile on my face when I think about"]
    return `${this.randomSample(mem_messages)} ${this.randomSample(this.likeableMemories)}`
  }

  createCompliment(){
    var messages = ['I really like', 'I love', 'I enjoy', 'I smile when I think of', 'Want to know what makes me smile?\n']
    return `${this.randomSample(messages)} your ${this.randomSample(this.likeableThings)}`
  }

  getMessage(){
    var arr = [this.createCommonality(), this.createMemory(), this.createCompliment()]
    return this.randomSample(arr)
  }

  randomSample(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  constructor() {  }


}
