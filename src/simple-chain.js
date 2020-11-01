const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainLinks: [],
  counter: 0,

  getLength() {
    return this.counter;
  },

  addLink(value) {
    this.counter++;
    this.chainLinks.push(value === 'undefined' ? this.chainLinks.push('( )') : `( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 0 ){
      this.chainLinks = [];
      throw new Error();
    }else{
      this.chainLinks.splice(position-1,1);
    }
    return this;
  },

  reverseChain() {
    this.chainLinks.reverse();
    return this;
  },

  finishChain() {
    let resultString = this.chainLinks.join('~~');  
    this.chainLinks = [];
    return resultString;
  }
};

module.exports = chainMaker;
