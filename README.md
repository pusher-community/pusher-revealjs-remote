# Pusher RevealJS remote

A Pusher remote control library for [reveal.js](https://github.com/hakimel/reveal.js/).

## Usage

Within your reveal.js slide deck:

```html
<script src="path/to/reveal.js"></script>
<script src="//js.pusher.com/3.0/pusher.min.js"></script>
<script src="path/to/pusher-revealjs-slides.js"></script>
<script>
var pusher = new Pusher('YOUR_APP_KEY');
var pusherRemote = new PusherRevealSlideController(Reveal, pusher);
</script>
```

For your remote control you'll need elements to click/touch in order to move through the slides. For now, only `prev` and `next` are supported.

```html
<script src="//js.pusher.com/3.0/pusher.min.js"></script>
<script src="path/to/pusher-revealjs-remote.js"></script>
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
