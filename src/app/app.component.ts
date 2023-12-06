import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isIntialCall:any;
  status:any;
  playerPoints=0;
  dealerPoints=0;
  aceConvertedPlayer:any;
  aceConvertedDealer:any;
  originalDeck = [
    { name: 'Ace of Hearts', points: [1, 11], imagePath: '../assets/hearts_ace.svg' },
    { name: '2 of Hearts', points: 2, imagePath: '../assets/hearts_2.svg' },
    { name: '3 of Hearts', points: 3, imagePath: '../assets/hearts_3.svg' },
    { name: '4 of Hearts', points: 4, imagePath: '../assets/hearts_4.svg' },
    { name: '5 of Hearts', points: 5, imagePath: '../assets/hearts_5.svg' },
    { name: '6 of Hearts', points: 6, imagePath: '../assets/hearts_6.svg' },
    { name: '7 of Hearts', points: 7, imagePath: '../assets/hearts_7.svg' },
    { name: '8 of Hearts', points: 8, imagePath: '../assets/hearts_8.svg' },
    { name: '9 of Hearts', points: 9, imagePath: '../assets/hearts_9.svg' },
    { name: '10 of Hearts', points: 10, imagePath: '../assets/hearts_10.svg' },
    { name: 'Jack of Hearts', points: 10, imagePath: '../assets/hearts_jack.svg' },
    { name: 'Queen of Hearts', points: 10, imagePath: '../assets/hearts_queen.svg' },
    { name: 'King of Hearts', points: 10, imagePath: '../assets/hearts_king.svg' },
    { name: 'Ace of Spades', points: [1, 11], imagePath: '../assets/spades_ace.svg' },
    { name: '2 of Spades', points: 2, imagePath: '../assets/spades_2.svg' },
    { name: '3 of Spades', points: 3, imagePath: '../assets/spades_3.svg' },
    { name: '4 of Spades', points: 4, imagePath: '../assets/spades_4.svg' },
    { name: '5 of Spades', points: 5, imagePath: '../assets/spades_5.svg' },
    { name: '6 of Spades', points: 6, imagePath: '../assets/spades_6.svg' },
    { name: '7 of Spades', points: 7, imagePath: '../assets/spades_7.svg' },
    { name: '8 of Spades', points: 8, imagePath: '../assets/spades_8.svg' },
    { name: '9 of Spades', points: 9, imagePath: '../assets/spades_9.svg' },
    { name: '10 of Spades', points: 10, imagePath: '../assets/spades_10.svg' },
    { name: 'Jack of Spades', points: 10, imagePath: '../assets/spades_jack.svg' },
    { name: 'Queen of Spades', points: 10, imagePath: '../assets/spades_queen.svg' },
    { name: 'King of Spades', points: 10, imagePath: '../assets/spades_king.svg' },
    { name: 'Ace of Diamonds', points: [1, 11], imagePath: '../assets/diamonds_ace.svg' },
    { name: '2 of Diamonds', points: 2, imagePath: '../assets/diamonds_2.svg' },
    { name: '3 of Diamonds', points: 3, imagePath: '../assets/diamonds_3.svg' },
    { name: '4 of Diamonds', points: 4, imagePath: '../assets/diamonds_4.svg' },
    { name: '5 of Diamonds', points: 5, imagePath: '../assets/diamonds_5.svg' },
    { name: '6 of Diamonds', points: 6, imagePath: '../assets/diamonds_6.svg' },
    { name: '7 of Diamonds', points: 7, imagePath: '../assets/diamonds_7.svg' },
    { name: '8 of Diamonds', points: 8, imagePath: '../assets/diamonds_8.svg' },
    { name: '9 of Diamonds', points: 9, imagePath: '../assets/diamonds_9.svg' },
    { name: '10 of Diamonds', points: 10, imagePath: '../assets/diamonds_10.svg' },
    { name: 'Jack of Diamonds', points: 10, imagePath: '../assets/diamonds_jack.svg' },
    { name: 'Queen of Diamonds', points: 10, imagePath: '../assets/diamonds_queen.svg' },
    { name: 'King of Diamonds', points: 10, imagePath: '../assets/diamonds_king.svg' },
    { name: 'Ace of Clubs', points: [1, 11], imagePath: '../assets/clubs_ace.svg' },
    { name: '2 of Clubs', points: 2, imagePath: '../assets/clubs_2.svg' },
    { name: '3 of Clubs', points: 3, imagePath: '../assets/clubs_3.svg' },
    { name: '4 of Clubs', points: 4, imagePath: '../assets/clubs_4.svg' },
    { name: '5 of Clubs', points: 5, imagePath: '../assets/clubs_5.svg' },
    { name: '6 of Clubs', points: 6, imagePath: '../assets/clubs_6.svg' },
    { name: '7 of Clubs', points: 7, imagePath: '../assets/clubs_7.svg' },
    { name: '8 of Clubs', points: 8, imagePath: '../assets/clubs_8.svg' },
    { name: '9 of Clubs', points: 9, imagePath: '../assets/clubs_9.svg' },
    { name: '10 of Clubs', points: 10, imagePath: '../assets/clubs_10.svg' },
    { name: 'Jack of Clubs', points: 10, imagePath: '../assets/clubs_jack.svg' },
    { name: 'Queen of Clubs', points: 10, imagePath: '../assets/clubs_queen.svg' },
    { name: 'King of Clubs', points: 10, imagePath: '../assets/clubs_king.svg' },
  ];
  dealerCards: any[] = [];  // Initialize as an empty array
  playerCards: any[] = [];  // Initialize as an empty array
  deck: any[] = [];



  getRandomElement(array:any) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const removedElement = array.splice(randomIndex, 1)[0];
    return removedElement;
  }
  // playerPick():void{
  //   const card =this.getRandomElement(this.deck);
  //   console.log(card.points+"player")
  //   if(card.name.includes("Ace"))
  //   {
  //     this.playerPoints=this.playerPoints+11;
  //   }
  //   else{
  //     this.playerPoints=this.playerPoints+card.points;
  //   }
  //   this.playerCards.push(card);
  // }
  // DealerPick():void{
  //   const card =this.getRandomElement(this.deck);
  //   console.log(card.points+"deal")
  //   if(card.name.includes("Ace"))
  //   {
  //     this.dealerPoints=this.dealerPoints+11;
  //   }
  //   else{
  //     this.dealerPoints=this.dealerPoints+card.points;
  //   }
  //   this.dealerCards.push(card);
  // }
  playerPick(): void {
    const card = this.getRandomElement(this.deck);
    console.log(card.points + " player");
  
    if (card.name.includes("Ace")) {
      // If adding 11 points for the Ace would exceed 21, add 1 point instead
      this.playerPoints = this.playerPoints + (this.playerPoints + 11 <= 21 ? 11 : 1);
    } else {
      this.playerPoints = this.playerPoints + card.points;
    }
  
    // Check for Aces and adjust points if needed
    if(!this.aceConvertedPlayer)
    {
    this.adjustPointsForAcesPlayer(this.playerCards);
    }
    this.playerCards.push(card);
  }
  
  DealerPick(): void {
    const card = this.getRandomElement(this.deck);
    console.log(card.points + " deal");
  
    if (card.name.includes("Ace")) {
      // If adding 11 points for the Ace would exceed 21, add 1 point instead
      this.dealerPoints = this.dealerPoints + (this.dealerPoints + 11 <= 21 ? 11 : 1);
    } else {
      this.dealerPoints = this.dealerPoints + card.points;
    }
  
    // Check for Aces and adjust points if needed
    if(!this.aceConvertedDealer)
    {
    this.adjustPointsForAcesDealer(this.dealerCards);
    }
    this.dealerCards.push(card);
  }
  
  // Function to adjust points for Aces
  adjustPointsForAcesDealer(cards: any[]): void {
    // Count the number of Aces in the hand
    let numAces = cards.filter(card => card.name.includes("Ace")).length;
  
    // Adjust points for Aces while the total points exceed 21
    while (numAces > 0 && this.dealerPoints > 21) {
      this.dealerPoints = this.dealerPoints - 10; // Convert 11 to 1 for an Ace
      this.aceConvertedDealer=true;
      numAces--;
    }
  } 
  adjustPointsForAcesPlayer(cards: any[]): void {
    // Count the number of Aces in the hand
    let numAces = cards.filter(card => card.name.includes("Ace")).length;
  
    // Adjust points for Aces while the total points exceed 21
    while (numAces > 0 && this.playerPoints > 21 ) {
      this.playerPoints = this.playerPoints - 10; // Convert 11 to 1 for an Ace
      numAces--;
      this.aceConvertedPlayer=true;
    }
  }  
  intialPlay(): void
  {
    console.clear()
    this.deck = JSON.parse(JSON.stringify(this.originalDeck));
    this.status="";
    this.aceConvertedPlayer=false;
    this.aceConvertedDealer=false;
    this.playerPoints=0;
    this.dealerPoints=0;
    this.dealerCards=[];
    this.playerCards=[];
    this.isIntialCall= true;
  this.playerPick();
  this.DealerPick();
  this.playerPick();
  this.DealerPick();
  console.log(this.playerPoints+"p")
  console.log(this.dealerPoints+"d")
  if(this.playerPoints===21)
  {
    this.status="BJ YOU WIN";
    console.log("BJ YOU WIN")
  }
  if(this.dealerPoints===21)
  {
    this.status="Dealer's BJ YOU Lose";
    this.isIntialCall=false;
    console.log("Dealer's BJ YOU Lose")
  }
  }
  hit(): void {
    this.playerPick();
  
    if (this.playerPoints === 21) {
      console.log("21");
      this.stand();
    } else if (this.playerPoints > 21) {
      this.status="BUST";
      console.log("BUST");
    }
  
    console.log(this.playerPoints);
  }

dealerLoop():void
{
while(this.dealerPoints<17)
{
  this.DealerPick();
}
return;
}
stand(): void{  
this.isIntialCall=false;
this.dealerLoop();
if(this.dealerPoints>21)
{
  this.status="YOU WIN DEALER BUSTED";
  console.log("YOU WIN DEALER BUSTED");
}
else if(this.playerPoints===this.dealerPoints)
{
  this.status="PUSH";
  console.log("PUSH");
}
else if(this.playerPoints>this.dealerPoints)
{
  this.status="YOU WIN";
  console.log("YOU WIN");
}
else
{
  this.status="YOU LOSE";
  console.log("YOU LOSE")
}


}
}

