import React, { Component } from 'react';
import '../src/components/styles.css';
//import BtnStart from './components/buttons/btn-start'
//import BtnStop from './components/buttons/btn-stop'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 10,
      msec: 0,
      autostart: false,
      step: 10,
      //running: false,
    };
    this.resetTimer = this.resetTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.counterDown = this.counterDown.bind(this);
    this.onTick = this.onTick.bind(this);
    this.minutes = this.minutes.bind(this);
    this.seconds = this.seconds.bind(this);
    this.miliseconds = this.miliseconds.bind(this);
    this.autostart = this.autostart.bind(this)
    this.setStep = this.setStep.bind(this);
    this.run = false;
    this.interval = null;
    this.auto = this.state.autostart;
    this.stepInterval = this.state.step;
    this.isActiveButton = true;
    this.startMinutes = this.state.min;
    this.startSeconds = this.state.sec;
    this.startMiliseconds = this.state.msec;
  }

  setStep (e) {
    if (e.target.value > this.state.sec * 1000 || e.target.value === this.state.sec * 1000) {
      alert ("Please choose another interval")
    } else {
      this.stepInterval = e.target.value
      this.setState((state) => {return {state: state.step = e.target.value}});
      console.log(this.stepInterval)
    }
    
  }

  counterDown () {
    if (this.run) {
      if (this.state.msec > 0) {
        this.setState((state) => {return {msec: state.msec - 1}});
      } else if (this.state.sec > 0) {
        this.setState((state) => {return {sec: state.sec - Math.ceil(this.stepInterval / 1000)}});
        this.onTick(this.state.min, this.state.sec);
        this.setState((state) => {return {state: state.msec = Math.floor(99 / this.stepInterval * 10)}});
      } else if (this.state.min > 0) {
        this.setState((state) => {return {min: state.min - 1}});
        this.setState((state) => {return {state: state.sec = Math.floor(59 / this.stepInterval * 10)}});
        this.setState((state) => {return {state: state.msec = Math.floor(99 / this.stepInterval * 10)}});
      } 

      
      /*if (this.stepInterval === 10 || this.state.step === 10) {
        if (this.state.msec > 0) {
          this.setState((state) => {return {msec: state.msec - 1}});
        } else if (this.state.sec > 0) {
          this.setState((state) => {return {sec: state.sec - 1}});
          this.onTick(this.state.min, this.state.sec);
          this.setState((state) => {return {state: state.msec = 99}});
        } else if (this.state.min > 0) {
          this.setState((state) => {return {min: state.min - 1}});
          this.setState((state) => {return {state: state.sec = 59}});
          this.setState((state) => {return {state: state.msec = 99}});
        } 
      } else if (this.stepInterval === 100 || this.state.step === 100) {
        if (this.state.msec > 0) {
          this.setState((state) => {return {msec: state.msec - 1}});
        } else if (this.state.sec > 0) {
          this.setState((state) => {return {sec: state.sec - 1}});
          this.onTick(this.state.min, this.state.sec);
          this.setState((state) => {return {state: state.msec = 9}});
        } else if (this.state.min > 0) {
          this.setState((state) => {return {min: state.min - 1}});
          this.setState((state) => {return {state: state.sec = 59}});
          this.setState((state) => {return {state: state.msec = 9}});
        } 
      } */


    //if (this.state.running) {  
      
    };
    if (this.state.min === 0 && this.state.sec === 0 && this.state.msec === 0) {
      if (this.auto === true) {
        this.setState((state) => {return {state: state.min = this.startMinutes}});
        this.setState((state) => {return {state: state.sec = this.startSeconds}});
        this.setState((state) => {return {state: state.msec = 0}});
      } else {
        this.resetTimer();
        this.onTimeEnd();
      }
    }
    if (this.state.min < 0 || this.state.sec < 0 || this.state.msec < 0 || this.state.sec * 1000 + this.state.msec * 10 < this.state.step) {
      if (this.auto === true) {
        this.setState((state) => {return {state: state.min = this.startMinutes}});
        this.setState((state) => {return {state: state.sec = this.startSeconds}});
        this.setState((state) => {return {state: state.msec = 0}});
      } else {
        this.resetTimer();
      }
    }
  }

  /*componentDidMount () {
    if (this.auto) {
      this.startTimer()
    }
  }*/

  startTimer () {
    clearInterval(this.interval);
    this.run = true;
    //this.setState({running : true})
    //this.isActiveButton = !this.isActiveButton;
    this.interval = setInterval(this.counterDown,this.stepInterval);
    this.onTimeStart();
  }
  pauseTimer () {
    //this.interval = setInterval(this.counterDown,this.stepInterval);
    this.run = false;
    //this.setState({running : false})
    //this.isActiveButton = true;
    this.onTimePaused();
  }

  resetTimer () {
    this.run = false;
    clearInterval(this.interval);
    this.setState((state) => {return {state: state.min = 0}});
    this.setState((state) => {return {state: state.sec = 0}});
    this.setState((state) => {return {state: state.msec = 0}});
  }

  onTimeStart () {
    console.log('Timer is started');
  }
  onTimePaused () {
    console.log('Timer on pause');
  }
  onTimeEnd () {
    console.log('Time is over')
  }
  onTick (mm, ss) {
    if (mm > 0) {
      console.log(`Remaining time is ${mm} min and ${ss} sec`);
    } else console.log(`Remaining time is ${ss} sec`)
  }
  autostart(){
    if (!this.auto === true) {
      console.log ('Autostart enabled')
    } else console.log ('Autostart disabled')
    return this.auto = !this.auto
  }

  

  twoDigits = (num) => {
    return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  minutes (e) {
    if (e.target.value > 59) {
      this.startMinutes = 59;
      this.setState((state) => {return {state: state.min = 59}});
    } else if (e.target.value === "") {
      this.startMinutes = 0;
      this.setState((state) => {return {state: state.min = 0}});
    }
    else {
      this.startMinutes = e.target.value;
      this.setState((state) => {return {state: state.min = e.target.value}});
    }
  }

  seconds (e) {
    if (e.target.value > 59) {
      this.startSeconds = 59;
      this.setState((state) => {return {state: state.sec = 59}});
    } else if (e.target.value === "") {
      this.startSeconds = 0;
      this.setState((state) => {return {state: state.sec = 0}});
    } else {
      this.startSeconds = e.target.value;
      this.setState((state) => {return {state: state.sec = e.target.value}});
    }
  }

  miliseconds () {
    return this.state.msec;
  }

  render() { 
    return (
      <div>
        <div className='timer_block'>
          <div className='input_block'>
            <div className='input_block-item'>
              <label className='br'>Min</label>
              <input value={this.twoDigits(this.state.min)} onChange={this.minutes} className='input'/>
            </div>
            <div className='input_block-item'>
              <label className='br'>Sec</label>
              <input value={this.twoDigits(this.state.sec)} onChange={this.seconds} className='input'/>
            </div>
            <div className='input_block-item'>
              <label className='br'>Msec</label>
              <input value={this.twoDigits(this.state.msec)} onChange={this.miliseconds} className='input'/>
            </div>
          </div>

          <div>
            <label className='autostart'>Autostart</label>
            <input type='checkbox' className='autostart_checkbox'onChange={this.autostart}/>
            <select value={this.stepInterval} onChange={this.setStep} className='select'>
              <option value={100}>10ms</option>
              <option value={10}>1ms</option>
              <option value={1000}>1s</option>
              <option value={2000}>2s</option>
              <option value={10000}>10s</option>
            </select>
          </div>

          <div>
            {this.run && <button className='btn-stop' onClick={this.pauseTimer}>Pause</button>}
            {!this.run && <button className='btn-start' onClick={this.startTimer}>Start</button>}
            <button className='btn-reset' onClick={this.resetTimer}>Reset</button>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default Timer;

//{this.run ? <button className='btn-stop' onClick={this.pauseTimer}>Pause</button> : <button className='btn-start' onClick={this.startTimer}>Start</button>}


//{this.run && <button className='btn-stop' onClick={this.pauseTimer}>Pause</button>}
        //{!this.run && <button className='btn-start' onClick={this.startTimer}>Start</button>}

//<button className='btn-start' onClick={this.startTimer}>Start</button>
        //<button className='btn-stop' onClick={this.pauseTimer}>Pause</button>





       /*if (this.run) {
      interval = setInterval(() => {

        if (this.state.msec > 0) {
          this.setState((state) => {return {msec: state.msec - 1}});
        } else if (this.state.sec > 0) {
          this.setState((state) => {return {sec: state.sec - 1}});
          console.log(this.state.sec);
          this.setState((state) => {return {state: state.msec = 99}});
        } else if (this.state.min > 0) {
          this.setState((state) => {return {min: state.min - 1}});
          this.setState((state) => {return {state: state.sec = 59}});
          this.setState((state) => {return {state: state.msec = 99}});
        } 
      }, this.state.step);
    }*/


    //this.setState({autostart: !this.state.autostart}

    
    //<BtnStart onClick={this.startTimer}/>
    //<BtnStop onClick={this.pauseTimer}/>

    //disabled={!this.isActiveButton}


    


    //<span><br/>{this.twoDigits(this.state.min)}:{this.twoDigits(this.state.sec)}:{this.twoDigits(this.state.msec)}</span>

    
    /*if (this.state.msec > 0) {
      this.setState((state) => {return {msec: state.msec - 1}});
    } else if (this.state.sec > 0) {
      this.setState((state) => {return {sec: state.sec - 1}});
      this.onTick(this.state.min, this.state.sec);
      this.setState((state) => {return {state: state.msec = 99}});
    } else if (this.state.min > 0) {
      this.setState((state) => {return {min: state.min - 1}});
      this.setState((state) => {return {state: state.sec = 59}});
      this.setState((state) => {return {state: state.msec = 99}});
    } */