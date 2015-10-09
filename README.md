# Pusher RevealJS remote

A Pusher remote control library for [reveal.js](https://github.com/hakimel/reveal.js/).

## Set up

There are three sets of things that need to be set up in order to use the remote control:

1. The reveal.js slide deck so that it can receive navigation events from Pusher
2. A remote control for you to send events (probably from your phone) to the reveal.js slides
3. A Pusher authentication endpoint so that you can use Pusher [client events](https://pusher.com/docs/client_events)

### reveal.js slide deck

Within your reveal.js slide deck:

```html
<script src="path/to/reveal.js"></script>
<script src="//js.pusher.com/3.0/pusher.min.js"></script>
<script src="//pusher-community.github.io/pusher-revealjs-remote/js/pusher-revealjs-slides.js"></script>
<script>
var pusher = new Pusher('YOUR_APP_KEY');
var pusherRemote = new PusherRevealSlideController(Reveal, pusher);
</script>
```

### Remote control

For your remote control you'll need elements to click/touch in order to move through the slides. For now, only `prev` and `next` are supported.

You can find the code for a really simple remote example here:

* [Remote Control example](./example/remote/index.html)

Here are the details:

```html
<script src="//js.pusher.com/3.0/pusher.min.js"></script>
<script src="//pusher-community.github.io/pusher-revealjs-remote/js/pusher-revealjs-remote.js"></script>
<script>
var pusher = new Pusher('YOUR_APP_KEY');

var remote = new PusherRevealRemote(pusher);

document.getElementById('next').addEventListener('click', function() {
  remote.next();
});

document.getElementById('prev').addEventListener('click', function() {
  remote.prev();
});
```

*Note: For testing purposes you can use the application key `919c37c3a2c798eea5b9`. But please note that other slide deck users could trigger events that control your slides.*

### Pusher authentication endpoint

You can find the code for the Pusher authentication endpoint in the following location:

https://github.com/pusher-community/pusher-revealjs-remote-server

## Example

* [Slides](http://pusher-community.github.io/pusher-revealjs-remote/example/slides/)
* [Remote Control](http://pusher-community.github.io/pusher-revealjs-remote/example/remote/)
