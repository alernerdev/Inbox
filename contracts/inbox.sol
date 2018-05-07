pragma solidity ^0.4.17;

contract Inbox {
    // public members automatically get a "get" property
    string public message;
    
    constructor(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
  
}
