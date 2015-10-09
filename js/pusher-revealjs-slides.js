var detectedRuntimeProblems = [];
if(!Reveal) {
  detectedRuntimeProblems.push('Reveal JS API was not detected. The Pusher slides controller will not function.');
}
if(!Pusher) {
  detectedRuntimeProblems.push('Pusher API was not detected. The Pusher slides controller will not function.');
}

if(detectedRuntimeProblems.length > 0) {
  console.warn(detectedRuntimeProblems.join('\n'));
}

function PusherRevealSlideController(reveal, pusher) {
  this._reveal = reveal;
  this._pusher = pusher;
  
  if(!Pusher.log) {
    Pusher.log = this._log.bind(this);
  }
  
  // TODO: Consider if this is the best approach. Should this be set up externally?
  this._pusher.config.authEndpoint = 'https://pusher-revealjs-remote-server.herokuapp.com/pusher-auth';
  
  this._slideChannel = this._pusher.subscribe('private-slide-control');
  this._slideChannel.bind('client-slide-next', this._next.bind(this));
  this._slideChannel.bind('client-slide-prev', this._prev.bind(this));
}

/** @private */
PusherRevealSlideController.prototype._next = function() {
  Reveal.next();
};

/** @private */
PusherRevealSlideController.prototype._prev = function() {
  Reveal.prev();
};

/** @private */
PusherRevealSlideController.prototype._log = function(msg) {
  console.log(msg);
};
