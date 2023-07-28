new Vue({
  el: "#app",
  data: {
      dictionary: {
      dog: 'pies',
       cat:   'kot',
       fish: 'ryba',
       frog: 'żaba',
       camel: 'wielbłąd',
  },
      //lengthOfDictionary: Object.keys(this.dictionary).length,
      rightWords: [],
      pnkt: 0,
      answer: '',
      numberOfquestion: 0,
      isAnswerRight: undefined,
      buttonText: 'Sprawdź',
  },
  methods: {
      checkAnswer: function (){
          let currentKey = Object.keys(this.dictionary)[this.numberOfquestion];
          let currentValue = Object.values(this.dictionary)[this.numberOfquestion];

          // correct answer
          if(this.answer === currentKey){
              this.pnkt++;
              this.isAnswerRight = true;
              // add a right answer to new array rightWords
              this.rightWords.push({ key: currentKey , value: currentValue});
              this.numberOfquestion++;
          }

          // empty answer
          else if(this.answer === ''){
              this.pnkt = this.pnkt;
          }

          // incorrect answer
          else{
              // if user has 0 points
              if (this.pnkt > 0){
                  this.pnkt -= 0.5;
              }
              this.isAnswerRight = false;
              this.numberOfquestion++;
          }

          this.answer = '';

          // finish the game, try again
          if(this.numberOfquestion === this.lengthOfDictionary) {
              this.buttonText = 'Try again';
              let buttonTryAgain = document.getElementById('btn')
              buttonTryAgain.addEventListener('click', function () {
                  location.reload();
              });
          }
      }
  },
    computed:{
        lengthOfDictionary: function (){
            return Object.keys(this.dictionary).length;
        },
        currentKey: function (){
            return this.dictionary[Object.keys(this.dictionary)[this.numberOfquestion]];
        }
    }
});