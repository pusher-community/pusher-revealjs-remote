if(!Pusher) {
  console.warn('Pusher is not defined. The remote will not function.');
}

function PusherRevealRemote(pusher) {
  this._pusher = pusher;
  
  if(!Pusher.log) {
    Pusher.log = this._log.bind(this);
  }
  
  // TODO: Consider if this is the best approach. Should this be set up externally?
  this._pusher.config.authEndpoint = 'https://pusher-revealjs-remote-server.herokuapp.com/pusher-auth';
  
  this._slideChannel = this._pusher.subscribe('private-slide-control');
}

PusherRevealRemote.prototype.prev = function() {
  this._slideChannel.trigger('client-slide-prev', {});
};

PusherRevealRemote.prototype.next = function() {
  this._slideChannel.trigger('client-slide-next', {});
};

/** @private */
PusherRevealRemote.prototype._log = function(msg) {
  console.log(msg);
};
