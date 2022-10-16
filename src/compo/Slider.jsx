import React, { Component } from 'react'


class Node{
    constructor(element){
        this.element= element
        this.next= null;
    }
}
export default class Slider extends Component {
    constructor() {
        super()
        this.head= null;
        this.size = 0;
    }    
    Add(element){
        var node = new Node(element);
        var current;       
        if(this.head==null){
            this.head = element
        }else{
            current = this.head
            while(current.head){
                this.next = current
            }
            this.next = node
        }
        this.size++ 
    }
    show(){
        var curr = this.element
        console.log(curr)
    }
    render(){
    return (<>

<button onClick={this.Add(2)}>slider      
      </button>
      <button onClick={this.show()}>slider      
      </button>
    </>
    
    )
  }
}
