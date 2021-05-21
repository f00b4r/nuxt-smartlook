<h1 align=center>Smartlook ❤️ Nuxt.js</h1>

<p align=center>
   Nuxt.js module for Smartlook.
</p>

<p align=center>
🕹 <a href="https://f3l1x.io">f3l1x.io</a> | 💻 <a href="https://github.com/f3l1x">f3l1x</a> | 🐦 <a href="https://twitter.com/xf3l1x">@xf3l1x</a>
</p>

<p align=center>
	<a href="https://github.com/f00b4r/nuxt-smartlook/actions">
		<img src="https://badgen.net/github/checks/f00b4r/nuxt-smartlook">
	</a>
	<a href="https://www.npmjs.com/package/nuxt-smartlook">
		<img src="https://badgen.net/npm/v/nuxt-smartlook">
	</a>
	<a href="https://www.npmjs.com/package/nuxt-smartlook">
		<img src="https://badgen.net/npm/dt/nuxt-smartlook">
	</a>
	<a href="/LICENSE">
		<img src="https://badgen.net/github/license/f00b4r/nuxt-smartlook">
	</a>
</p>

-----

## Usage

To install latest version use [NPM](https://npmjs.com).

```
npm install --save nuxt-smartlook
```

## Documentation

1. Register at [smartlook.com](https://www.smartlook.com/).
2. Get tracking code (Projects -> Tracking code).
3. Install `nuxt-smartlook` package using NPM.
4. Update `nuxt.config.js` of your Nuxt website.

```js
module.exports = {
	modules: [
		'nuxt-smartlook',
	],
	smartlook: {
		id: "**smartlook*key**",
		enabled: process.env.NODE_ENV === 'production',
	}
};
```

## Development

<a href="https://github.com/f3l1x">
	<img width="80" height="80" src="https://avatars2.githubusercontent.com/u/538058?v=3&s=80">
</a>

-----

Consider to [support](https://github.com/sponsors/f3l1x) **f3l1x**. Also thank you for using this package.
