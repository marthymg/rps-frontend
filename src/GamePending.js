import React from 'react'

import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';

const Symbols = ['Rock', 'Paper', 'Scissors']; 

function GamePending (props) {

  return (
    <div> 
    {(props.userSymbol == 0) && <div><div className = "navbar"><div className = "ergebnis"><img alt="Rock" src={rock} /></div><div className="loader"></div></div><br/>Your choice was ... <b>{Symbols[props.userSymbol]}</b> ... waiting for answer from contract ...</div>}
    {(props.userSymbol == 1) && <div><div className = "navbar"><div className = "ergebnis"> <img alt="Paper" src={paper} /></div><div className="loader"></div></div><br/>Your choice was ... <b>{Symbols[props.userSymbol]}</b> ... waiting for answer from contract ...</div>}
    {(props.userSymbol == 2) && <div><div className = "navbar"><div className = "ergebnis"><img alt="Scissors" src={scissors} /></div><div className="loader"></div></div><br/>Your choice was ... <b>{Symbols[props.userSymbol]}</b> ... waiting for answer from contract ...</div>}  
  </div>
  );
}

export default GamePending;