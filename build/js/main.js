(function () {
	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var colorName = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};

	var isArrayish = function isArrayish(obj) {
		if (!obj || typeof obj === 'string') {
			return false;
		}

		return obj instanceof Array || Array.isArray(obj) ||
			(obj.length >= 0 && (obj.splice instanceof Function ||
				(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
	};

	var simpleSwizzle = createCommonjsModule(function (module) {



	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;

	var swizzle = module.exports = function swizzle(args) {
		var results = [];

		for (var i = 0, len = args.length; i < len; i++) {
			var arg = args[i];

			if (isArrayish(arg)) {
				// http://jsperf.com/javascript-array-concat-vs-push/98
				results = concat.call(results, slice.call(arg));
			} else {
				results.push(arg);
			}
		}

		return results;
	};

	swizzle.wrap = function (fn) {
		return function () {
			return fn(swizzle(arguments));
		};
	};
	});

	var colorString = createCommonjsModule(function (module) {
	/* MIT license */



	var reverseNames = {};

	// create a list of reverse color names
	for (var name in colorName) {
		if (colorName.hasOwnProperty(name)) {
			reverseNames[colorName[name]] = name;
		}
	}

	var cs = module.exports = {
		to: {},
		get: {}
	};

	cs.get = function (string) {
		var prefix = string.substring(0, 3).toLowerCase();
		var val;
		var model;
		switch (prefix) {
			case 'hsl':
				val = cs.get.hsl(string);
				model = 'hsl';
				break;
			case 'hwb':
				val = cs.get.hwb(string);
				model = 'hwb';
				break;
			default:
				val = cs.get.rgb(string);
				model = 'rgb';
				break;
		}

		if (!val) {
			return null;
		}

		return {model: model, value: val};
	};

	cs.get.rgb = function (string) {
		if (!string) {
			return null;
		}

		var abbr = /^#([a-f0-9]{3,4})$/i;
		var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
		var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var keyword = /(\D+)/;

		var rgb = [0, 0, 0, 1];
		var match;
		var i;
		var hexAlpha;

		if (match = string.match(hex)) {
			hexAlpha = match[2];
			match = match[1];

			for (i = 0; i < 3; i++) {
				// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
				var i2 = i * 2;
				rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
			}

			if (hexAlpha) {
				rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
			}
		} else if (match = string.match(abbr)) {
			match = match[1];
			hexAlpha = match[3];

			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i] + match[i], 16);
			}

			if (hexAlpha) {
				rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
			}
		} else if (match = string.match(rgba)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i + 1], 0);
			}

			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(per)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
			}

			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(keyword)) {
			if (match[1] === 'transparent') {
				return [0, 0, 0, 0];
			}

			rgb = colorName[match[1]];

			if (!rgb) {
				return null;
			}

			rgb[3] = 1;

			return rgb;
		} else {
			return null;
		}

		for (i = 0; i < 3; i++) {
			rgb[i] = clamp(rgb[i], 0, 255);
		}
		rgb[3] = clamp(rgb[3], 0, 1);

		return rgb;
	};

	cs.get.hsl = function (string) {
		if (!string) {
			return null;
		}

		var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hsl);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = (parseFloat(match[1]) + 360) % 360;
			var s = clamp(parseFloat(match[2]), 0, 100);
			var l = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

			return [h, s, l, a];
		}

		return null;
	};

	cs.get.hwb = function (string) {
		if (!string) {
			return null;
		}

		var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hwb);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = ((parseFloat(match[1]) % 360) + 360) % 360;
			var w = clamp(parseFloat(match[2]), 0, 100);
			var b = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
			return [h, w, b, a];
		}

		return null;
	};

	cs.to.hex = function () {
		var rgba = simpleSwizzle(arguments);

		return (
			'#' +
			hexDouble(rgba[0]) +
			hexDouble(rgba[1]) +
			hexDouble(rgba[2]) +
			(rgba[3] < 1
				? (hexDouble(Math.round(rgba[3] * 255)))
				: '')
		);
	};

	cs.to.rgb = function () {
		var rgba = simpleSwizzle(arguments);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
			: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function () {
		var rgba = simpleSwizzle(arguments);

		var r = Math.round(rgba[0] / 255 * 100);
		var g = Math.round(rgba[1] / 255 * 100);
		var b = Math.round(rgba[2] / 255 * 100);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
			: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function () {
		var hsla = simpleSwizzle(arguments);
		return hsla.length < 4 || hsla[3] === 1
			? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
			: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	};

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	cs.to.hwb = function () {
		var hwba = simpleSwizzle(arguments);

		var a = '';
		if (hwba.length >= 4 && hwba[3] !== 1) {
			a = ', ' + hwba[3];
		}

		return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (rgb) {
		return reverseNames[rgb.slice(0, 3)];
	};

	// helpers
	function clamp(num, min, max) {
		return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
		var str = num.toString(16).toUpperCase();
		return (str.length < 2) ? '0' + str : str;
	}
	});
	var colorString_1 = colorString.to;
	var colorString_2 = colorString.get;

	var conversions = createCommonjsModule(function (module) {
	/* MIT license */


	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	var reverseKeywords = {};
	for (var key in colorName) {
		if (colorName.hasOwnProperty(key)) {
			reverseKeywords[colorName[key]] = key;
		}
	}

	var convert = module.exports = {
		rgb: {channels: 3, labels: 'rgb'},
		hsl: {channels: 3, labels: 'hsl'},
		hsv: {channels: 3, labels: 'hsv'},
		hwb: {channels: 3, labels: 'hwb'},
		cmyk: {channels: 4, labels: 'cmyk'},
		xyz: {channels: 3, labels: 'xyz'},
		lab: {channels: 3, labels: 'lab'},
		lch: {channels: 3, labels: 'lch'},
		hex: {channels: 1, labels: ['hex']},
		keyword: {channels: 1, labels: ['keyword']},
		ansi16: {channels: 1, labels: ['ansi16']},
		ansi256: {channels: 1, labels: ['ansi256']},
		hcg: {channels: 3, labels: ['h', 'c', 'g']},
		apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
		gray: {channels: 1, labels: ['gray']}
	};

	// hide .channels and .labels properties
	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}

			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}

			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}

			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', {value: channels});
			Object.defineProperty(convert[model], 'labels', {value: labels});
		}
	}

	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		var rdif;
		var gdif;
		var bdif;
		var h;
		var s;

		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var v = Math.max(r, g, b);
		var diff = v - Math.min(r, g, b);
		var diffc = function (c) {
			return (v - c) / 6 / diff + 1 / 2;
		};

		if (diff === 0) {
			h = s = 0;
		} else {
			s = diff / v;
			rdif = diffc(r);
			gdif = diffc(g);
			bdif = diffc(b);

			if (r === v) {
				h = bdif - gdif;
			} else if (g === v) {
				h = (1 / 3) + rdif - bdif;
			} else if (b === v) {
				h = (2 / 3) + gdif - rdif;
			}
			if (h < 0) {
				h += 1;
			} else if (h > 1) {
				h -= 1;
			}
		}

		return [
			h * 360,
			s * 100,
			v * 100
		];
	};

	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;

		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	/**
	 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	 * */
	function comparativeDistance(x, y) {
		return (
			Math.pow(x[0] - y[0], 2) +
			Math.pow(x[1] - y[1], 2) +
			Math.pow(x[2] - y[2], 2)
		);
	}

	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		var currentClosestDistance = Infinity;
		var currentClosestKeyword;

		for (var keyword in colorName) {
			if (colorName.hasOwnProperty(keyword)) {
				var value = colorName[keyword];

				// Compute comparative distance
				var distance = comparativeDistance(rgb, value);

				// Check if its less, if so set as closest
				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return colorName[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;

		// assume sRGB
		r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
		g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
		b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

		var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
		var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
		var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;

		l *= 2;
		s *= (l <= 1) ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;

		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - (s * f));
		var t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;

		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= (lmin <= 1) ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;

		// wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh); // linear interpolation

		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0: r = v; g = n; b = wh; break;
			case 1: r = n; g = v; b = wh; break;
			case 2: r = wh; g = v; b = n; break;
			case 3: r = wh; g = n; b = v; break;
			case 4: r = n; g = wh; b = v; break;
			case 5: r = v; g = wh; b = n; break;
		}

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;

		r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
		g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
		b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

		// assume sRGB
		r = r > 0.0031308
			? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
			: r * 12.92;

		g = g > 0.0031308
			? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
			: g * 12.92;

		b = b > 0.0031308
			? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
			: b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;

		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		var ansi = 30
			+ ((Math.round(b / 255) << 2)
			| (Math.round(g / 255) << 1)
			| Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		// optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];

		// we use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round(((r - 8) / 247) * 24) + 232;
		}

		var ansi = 16
			+ (36 * Math.round(r / 255 * 5))
			+ (6 * Math.round(g / 255 * 5))
			+ Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		var color = args % 10;

		// handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		var mult = (~~(args > 50) + 1) * 0.5;
		var r = ((color & 1) * mult) * 255;
		var g = (((color >> 1) & 1) * mult) * 255;
		var b = (((color >> 2) & 1) * mult) * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		// handle greyscale
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = (rem % 6) / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16)
			+ ((Math.round(args[1]) & 0xFF) << 8)
			+ (Math.round(args[2]) & 0xFF);

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		var colorString = match[0];

		if (match[0].length === 3) {
			colorString = colorString.split('').map(function (char) {
				return char + char;
			}).join('');
		}

		var integer = parseInt(colorString, 16);
		var r = (integer >> 16) & 0xFF;
		var g = (integer >> 8) & 0xFF;
		var b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = (max - min);
		var grayscale;
		var hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else
		if (max === r) {
			hue = ((g - b) / chroma) % 6;
		} else
		if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;

		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}

		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;

		var c = s * v;
		var f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		var pure = [0, 0, 0];
		var hi = (h % 1) * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;

		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			case 1:
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			case 2:
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			case 3:
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			case 4:
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			default:
				pure[0] = 1; pure[1] = 0; pure[2] = w;
		}

		mg = (1.0 - c) * g;

		return [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255
		];
	};

	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var v = c + g * (1.0 - c);
		var f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else
		if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
	});
	var conversions_1 = conversions.rgb;
	var conversions_2 = conversions.hsl;
	var conversions_3 = conversions.hsv;
	var conversions_4 = conversions.hwb;
	var conversions_5 = conversions.cmyk;
	var conversions_6 = conversions.xyz;
	var conversions_7 = conversions.lab;
	var conversions_8 = conversions.lch;
	var conversions_9 = conversions.hex;
	var conversions_10 = conversions.keyword;
	var conversions_11 = conversions.ansi16;
	var conversions_12 = conversions.ansi256;
	var conversions_13 = conversions.hcg;
	var conversions_14 = conversions.apple;
	var conversions_15 = conversions.gray;

	/*
		this function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
		var graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		var models = Object.keys(conversions);

		for (var len = models.length, i = 0; i < len; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null
			};
		}

		return graph;
	}

	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		var graph = buildGraph();
		var queue = [fromModel]; // unshift -> queue -> pop

		graph[fromModel].distance = 0;

		while (queue.length) {
			var current = queue.pop();
			var adjacents = Object.keys(conversions[current]);

			for (var len = adjacents.length, i = 0; i < len; i++) {
				var adjacent = adjacents[i];
				var node = graph[adjacent];

				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		var path = [graph[toModel].parent, toModel];
		var fn = conversions[graph[toModel].parent][toModel];

		var cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(conversions[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}

		fn.conversion = path;
		return fn;
	}

	var route = function (fromModel) {
		var graph = deriveBFS(fromModel);
		var conversion = {};

		var models = Object.keys(graph);
		for (var len = models.length, i = 0; i < len; i++) {
			var toModel = models[i];
			var node = graph[toModel];

			if (node.parent === null) {
				// no possible conversion, or this node is the source model.
				continue;
			}

			conversion[toModel] = wrapConversion(toModel, graph);
		}

		return conversion;
	};

	var convert = {};

	var models = Object.keys(conversions);

	function wrapRaw(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			return fn(args);
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	function wrapRounded(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			var result = fn(args);

			// we're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if (typeof result === 'object') {
				for (var len = result.length, i = 0; i < len; i++) {
					result[i] = Math.round(result[i]);
				}
			}

			return result;
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	models.forEach(function (fromModel) {
		convert[fromModel] = {};

		Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
		Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

		var routes = route(fromModel);
		var routeModels = Object.keys(routes);

		routeModels.forEach(function (toModel) {
			var fn = routes[toModel];

			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		});
	});

	var colorConvert = convert;

	var _slice = [].slice;

	var skippedModels = [
		// to be honest, I don't really feel like keyword belongs in color convert, but eh.
		'keyword',

		// gray conflicts with some method names, and has its own method defined.
		'gray',

		// shouldn't really be in color-convert either...
		'hex'
	];

	var hashedModelKeys = {};
	Object.keys(colorConvert).forEach(function (model) {
		hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
	});

	var limiters = {};

	function Color(obj, model) {
		if (!(this instanceof Color)) {
			return new Color(obj, model);
		}

		if (model && model in skippedModels) {
			model = null;
		}

		if (model && !(model in colorConvert)) {
			throw new Error('Unknown model: ' + model);
		}

		var i;
		var channels;

		if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
			this.model = 'rgb';
			this.color = [0, 0, 0];
			this.valpha = 1;
		} else if (obj instanceof Color) {
			this.model = obj.model;
			this.color = obj.color.slice();
			this.valpha = obj.valpha;
		} else if (typeof obj === 'string') {
			var result = colorString.get(obj);
			if (result === null) {
				throw new Error('Unable to parse color from string: ' + obj);
			}

			this.model = result.model;
			channels = colorConvert[this.model].channels;
			this.color = result.value.slice(0, channels);
			this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
		} else if (obj.length) {
			this.model = model || 'rgb';
			channels = colorConvert[this.model].channels;
			var newArr = _slice.call(obj, 0, channels);
			this.color = zeroArray(newArr, channels);
			this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
		} else if (typeof obj === 'number') {
			// this is always RGB - can be converted later on.
			obj &= 0xFFFFFF;
			this.model = 'rgb';
			this.color = [
				(obj >> 16) & 0xFF,
				(obj >> 8) & 0xFF,
				obj & 0xFF
			];
			this.valpha = 1;
		} else {
			this.valpha = 1;

			var keys = Object.keys(obj);
			if ('alpha' in obj) {
				keys.splice(keys.indexOf('alpha'), 1);
				this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
			}

			var hashedKeys = keys.sort().join('');
			if (!(hashedKeys in hashedModelKeys)) {
				throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
			}

			this.model = hashedModelKeys[hashedKeys];

			var labels = colorConvert[this.model].labels;
			var color = [];
			for (i = 0; i < labels.length; i++) {
				color.push(obj[labels[i]]);
			}

			this.color = zeroArray(color);
		}

		// perform limitations (clamping, etc.)
		if (limiters[this.model]) {
			channels = colorConvert[this.model].channels;
			for (i = 0; i < channels; i++) {
				var limit = limiters[this.model][i];
				if (limit) {
					this.color[i] = limit(this.color[i]);
				}
			}
		}

		this.valpha = Math.max(0, Math.min(1, this.valpha));

		if (Object.freeze) {
			Object.freeze(this);
		}
	}

	Color.prototype = {
		toString: function () {
			return this.string();
		},

		toJSON: function () {
			return this[this.model]();
		},

		string: function (places) {
			var self = this.model in colorString.to ? this : this.rgb();
			self = self.round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to[self.model](args);
		},

		percentString: function (places) {
			var self = this.rgb().round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to.rgb.percent(args);
		},

		array: function () {
			return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
		},

		object: function () {
			var result = {};
			var channels = colorConvert[this.model].channels;
			var labels = colorConvert[this.model].labels;

			for (var i = 0; i < channels; i++) {
				result[labels[i]] = this.color[i];
			}

			if (this.valpha !== 1) {
				result.alpha = this.valpha;
			}

			return result;
		},

		unitArray: function () {
			var rgb = this.rgb().color;
			rgb[0] /= 255;
			rgb[1] /= 255;
			rgb[2] /= 255;

			if (this.valpha !== 1) {
				rgb.push(this.valpha);
			}

			return rgb;
		},

		unitObject: function () {
			var rgb = this.rgb().object();
			rgb.r /= 255;
			rgb.g /= 255;
			rgb.b /= 255;

			if (this.valpha !== 1) {
				rgb.alpha = this.valpha;
			}

			return rgb;
		},

		round: function (places) {
			places = Math.max(places || 0, 0);
			return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
		},

		alpha: function (val) {
			if (arguments.length) {
				return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
			}

			return this.valpha;
		},

		// rgb
		red: getset('rgb', 0, maxfn(255)),
		green: getset('rgb', 1, maxfn(255)),
		blue: getset('rgb', 2, maxfn(255)),

		hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

		saturationl: getset('hsl', 1, maxfn(100)),
		lightness: getset('hsl', 2, maxfn(100)),

		saturationv: getset('hsv', 1, maxfn(100)),
		value: getset('hsv', 2, maxfn(100)),

		chroma: getset('hcg', 1, maxfn(100)),
		gray: getset('hcg', 2, maxfn(100)),

		white: getset('hwb', 1, maxfn(100)),
		wblack: getset('hwb', 2, maxfn(100)),

		cyan: getset('cmyk', 0, maxfn(100)),
		magenta: getset('cmyk', 1, maxfn(100)),
		yellow: getset('cmyk', 2, maxfn(100)),
		black: getset('cmyk', 3, maxfn(100)),

		x: getset('xyz', 0, maxfn(100)),
		y: getset('xyz', 1, maxfn(100)),
		z: getset('xyz', 2, maxfn(100)),

		l: getset('lab', 0, maxfn(100)),
		a: getset('lab', 1),
		b: getset('lab', 2),

		keyword: function (val) {
			if (arguments.length) {
				return new Color(val);
			}

			return colorConvert[this.model].keyword(this.color);
		},

		hex: function (val) {
			if (arguments.length) {
				return new Color(val);
			}

			return colorString.to.hex(this.rgb().round().color);
		},

		rgbNumber: function () {
			var rgb = this.rgb().color;
			return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
		},

		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.rgb().color;

			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}

			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},

		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();

			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}

			return (lum2 + 0.05) / (lum1 + 0.05);
		},

		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}

			return (contrastRatio >= 4.5) ? 'AA' : '';
		},

		isDark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.rgb().color;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},

		isLight: function () {
			return !this.isDark();
		},

		negate: function () {
			var rgb = this.rgb();
			for (var i = 0; i < 3; i++) {
				rgb.color[i] = 255 - rgb.color[i];
			}
			return rgb;
		},

		lighten: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] += hsl.color[2] * ratio;
			return hsl;
		},

		darken: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] -= hsl.color[2] * ratio;
			return hsl;
		},

		saturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] += hsl.color[1] * ratio;
			return hsl;
		},

		desaturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] -= hsl.color[1] * ratio;
			return hsl;
		},

		whiten: function (ratio) {
			var hwb = this.hwb();
			hwb.color[1] += hwb.color[1] * ratio;
			return hwb;
		},

		blacken: function (ratio) {
			var hwb = this.hwb();
			hwb.color[2] += hwb.color[2] * ratio;
			return hwb;
		},

		grayscale: function () {
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var rgb = this.rgb().color;
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			return Color.rgb(val, val, val);
		},

		fade: function (ratio) {
			return this.alpha(this.valpha - (this.valpha * ratio));
		},

		opaquer: function (ratio) {
			return this.alpha(this.valpha + (this.valpha * ratio));
		},

		rotate: function (degrees) {
			var hsl = this.hsl();
			var hue = hsl.color[0];
			hue = (hue + degrees) % 360;
			hue = hue < 0 ? 360 + hue : hue;
			hsl.color[0] = hue;
			return hsl;
		},

		mix: function (mixinColor, weight) {
			// ported from sass implementation in C
			// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
			if (!mixinColor || !mixinColor.rgb) {
				throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
			}
			var color1 = mixinColor.rgb();
			var color2 = this.rgb();
			var p = weight === undefined ? 0.5 : weight;

			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();

			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;

			return Color.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue(),
					color1.alpha() * p + color2.alpha() * (1 - p));
		}
	};

	// model conversion methods and static constructors
	Object.keys(colorConvert).forEach(function (model) {
		if (skippedModels.indexOf(model) !== -1) {
			return;
		}

		var channels = colorConvert[model].channels;

		// conversion methods
		Color.prototype[model] = function () {
			if (this.model === model) {
				return new Color(this);
			}

			if (arguments.length) {
				return new Color(arguments, model);
			}

			var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
			return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
		};

		// 'static' construction methods
		Color[model] = function (color) {
			if (typeof color === 'number') {
				color = zeroArray(_slice.call(arguments), channels);
			}
			return new Color(color, model);
		};
	});

	function roundTo(num, places) {
		return Number(num.toFixed(places));
	}

	function roundToPlace(places) {
		return function (num) {
			return roundTo(num, places);
		};
	}

	function getset(model, channel, modifier) {
		model = Array.isArray(model) ? model : [model];

		model.forEach(function (m) {
			(limiters[m] || (limiters[m] = []))[channel] = modifier;
		});

		model = model[0];

		return function (val) {
			var result;

			if (arguments.length) {
				if (modifier) {
					val = modifier(val);
				}

				result = this[model]();
				result.color[channel] = val;
				return result;
			}

			result = this[model]().color[channel];
			if (modifier) {
				result = modifier(result);
			}

			return result;
		};
	}

	function maxfn(max) {
		return function (v) {
			return Math.max(0, Math.min(max, v));
		};
	}

	function assertArray(val) {
		return Array.isArray(val) ? val : [val];
	}

	function zeroArray(arr, length) {
		for (var i = 0; i < length; i++) {
			if (typeof arr[i] !== 'number') {
				arr[i] = 0;
			}
		}

		return arr;
	}

	var color = Color;

	var pickr_es5_min = createCommonjsModule(function (module, exports) {
	/*! Pickr 1.5.1 MIT | https://github.com/Simonwep/pickr */
	!function(t,e){module.exports=e();}(window,(function(){return function(t){var e={};function r(n){if(e[n]){ return e[n].exports; }var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n});},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},r.t=function(t,e){if(1&e&&(t=r(t)),8&e){ return t; }if(4&e&&"object"==typeof t&&t&&t.__esModule){ return t; }var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t){ for(var o in t){ r.d(n,o,function(e){return t[e]}.bind(null,o)); } }return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=144)}([function(t,e,r){var n=r(3),o=r(15).f,i=r(11),a=r(17),c=r(43),u=r(75),s=r(79);t.exports=function(t,e){var r,l,f,p,v,h=t.target,d=t.global,g=t.stat;if(r=d?n:g?n[h]||c(h,{}):(n[h]||{}).prototype){ for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(d?l:h+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f){ continue; }u(p,f);}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t);} }};},function(t,e){t.exports=function(t){try{return !!t()}catch(t){return !0}};},function(t,e,r){var n=r(3),o=r(44),i=r(4),a=r(45),c=r(50),u=r(80),s=o("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||a;t.exports=function(t){return i(s,t)||(c&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]};},function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")();}).call(this,r(105));},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)};},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t)){ throw TypeError(String(t)+" is not an object"); }return t};},function(t,e,r){var n=r(1);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));},function(t,e){t.exports=function(t){return "object"==typeof t?null!==t:"function"==typeof t};},function(t,e,r){var n=r(18),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0};},function(t,e,r){var n=r(21),o=r(10);t.exports=function(t){return n(o(t))};},function(t,e){t.exports=function(t){if(null==t){ throw TypeError("Can't call method on "+t); }return t};},function(t,e,r){var n=r(6),o=r(12),i=r(20);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t};},function(t,e,r){var n=r(6),o=r(71),i=r(5),a=r(22),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=a(e,!0),i(r),o){ try{return c(t,e,r)}catch(t){} }if("get"in r||"set"in r){ throw TypeError("Accessors not supported"); }return "value"in r&&(t[e]=r.value),t};},function(t,e,r){var n=r(10);t.exports=function(t){return Object(n(t))};},function(t,e,r){var n=r(6),o=r(1),i=r(4),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t)){ return c[t]; }e||(e={});var r=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return c[t]=!!r&&!o((function(){if(s&&!n){ return !0; }var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,l,f);}))};},function(t,e,r){var n=r(6),o=r(42),i=r(20),a=r(9),c=r(22),u=r(4),s=r(71),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=c(e,!0),s){ try{return l(t,e)}catch(t){} }if(u(t,e)){ return i(!o.f.call(t,e),t[e]) }};},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)};},function(t,e,r){var n=r(3),o=r(11),i=r(4),a=r(43),c=r(73),u=r(30),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,c){var u=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),l(r).source=f.join("string"==typeof e?e:"")),t!==n?(u?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=r:o(t,e,r)):s?t[e]=r:a(e,r);})(Function.prototype,"toString",(function(){return "function"==typeof this&&s(this).source||c(this)}));},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)};},function(t,e,r){var n=r(83),o=r(21),i=r(13),a=r(8),c=r(53),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,l=4==t,f=6==t,p=5==t||f;return function(v,h,d,g){for(var y,b,m=i(v),x=o(m),S=n(h,d,3),w=a(x.length),_=0,A=g||c,O=e?A(v,w):r?A(v,0):void 0;w>_;_++){ if((p||_ in x)&&(b=S(y=x[_],_,m),t)){ if(e){ O[_]=b; }else if(b){ switch(t){case 3:return !0;case 5:return y;case 6:return _;case 2:u.call(O,y);} }else if(l){ return !1; } } }return f?-1:s||l?l:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)};},function(t,e){t.exports=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};},function(t,e,r){var n=r(1),o=r(16),i="".split;t.exports=n((function(){return !Object("z").propertyIsEnumerable(0)}))?function(t){return "String"==o(t)?i.call(t,""):Object(t)}:Object;},function(t,e,r){var n=r(7);t.exports=function(t,e){if(!n(t)){ return t; }var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t))){ return o; }if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t))){ return o; }if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t))){ return o; }throw TypeError("Can't convert object to primitive value")};},function(t,e){t.exports=!1;},function(t,e,r){var n=r(22),o=r(12),i=r(20);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r;};},function(t,e,r){var n=r(1),o=r(2),i=r(84),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return (e.constructor={})[a]=function(){return {foo:1}},1!==e[t](Boolean).foo}))};},function(t,e,r){var n=r(1);t.exports=function(t,e){var r=[][t];return !!r&&n((function(){r.call(null,e||function(){throw 1},1);}))};},function(t,e){t.exports={};},function(t,e,r){var n=r(61),o=r(17),i=r(119);n||o(Object.prototype,"toString",i,{unsafe:!0});},function(t,e,r){var n=r(0),o=r(40);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o});},function(t,e,r){var n,o,i,a=r(106),c=r(3),u=r(7),s=r(11),l=r(4),f=r(31),p=r(32),v=c.WeakMap;if(a){var h=new v,d=h.get,g=h.has,y=h.set;n=function(t,e){return y.call(h,t,e),e},o=function(t){return d.call(h,t)||{}},i=function(t){return g.call(h,t)};}else{var b=f("state");p[b]=!0,n=function(t,e){return s(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)};}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t){ throw TypeError("Incompatible receiver, "+t+" required"); }return r}}};},function(t,e,r){var n=r(44),o=r(45),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))};},function(t,e){t.exports={};},function(t,e,r){var n=r(77),o=r(3),i=function(t){return "function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]};},function(t,e,r){var n=r(78),o=r(48).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)};},function(t,e,r){var n=r(16);t.exports=Array.isArray||function(t){return "Array"==n(t)};},function(t,e,r){var n,o=r(5),i=r(107),a=r(48),c=r(32),u=r(108),s=r(72),l=r(31),f=l("IE_PROTO"),p=function(){},v=function(t){return "<script>"+t+"<\/script>"},h=function(){try{n=document.domain&&new ActiveXObject("htmlfile");}catch(t){}var t,e;h=n?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;){ delete h.prototype[a[r]]; }return h()};c[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=h(),void 0===e?r:i(r,e)};},function(t,e,r){var n=r(78),o=r(48);t.exports=Object.keys||function(t){return n(t,o)};},function(t,e,r){var n=r(9),o=r(57),i=r(27),a=r(30),c=r(88),u=a.set,s=a.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:n(t),index:0,kind:e});}),(function(){var t=s(this),e=t.target,r=t.kind,n=t.index++;return !e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries");},function(t,e,r){var n=r(6),o=r(3),i=r(79),a=r(17),c=r(4),u=r(16),s=r(117),l=r(22),f=r(1),p=r(36),v=r(34).f,h=r(15).f,d=r(12).f,g=r(92).trim,y=o.Number,b=y.prototype,m="Number"==u(p(b)),x=function(t){var e,r,n,o,i,a,c,u,s=l(t,!1);if("string"==typeof s&&s.length>2){ if(43===(e=(s=g(s)).charCodeAt(0))||45===e){if(88===(r=s.charCodeAt(2))||120===r){ return NaN }}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return +s}for(a=(i=s.slice(2)).length,c=0;c<a;c++){ if((u=i.charCodeAt(c))<48||u>o){ return NaN; } }return parseInt(i,n)} }return +s};if(i("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var S,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(m?f((function(){b.valueOf.call(r);})):"Number"!=u(r))?s(new y(x(e)),r,w):x(e)},_=n?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;_.length>A;A++){ c(y,S=_[A])&&!c(w,S)&&d(w,S,h(y,S)); }w.prototype=b,b.constructor=w,a(o,"Number",w);}},function(t,e,r){var n,o,i=r(95),a=r(120),c=RegExp.prototype.exec,u=String.prototype.replace,s=c,l=(n=/a/,o=/b*/g,c.call(n,"a"),c.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(l||p||f)&&(s=function(t){var e,r,n,o,a=this,s=f&&a.sticky,v=i.call(a),h=a.source,d=0,g=t;return s&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),g=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,d++),r=new RegExp("^(?:"+h+")",v)),p&&(r=new RegExp("^"+h+"$(?!\\s)",v)),l&&(e=a.lastIndex),n=c.call(s?r:a,g),s?n?(n.input=n.input.slice(d),n[0]=n[0].slice(d),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:l&&n&&(a.lastIndex=a.global?n.index+n[0].length:e),p&&n&&n.length>1&&u.call(n[0],r,(function(){
	var arguments$1 = arguments;
	for(o=1;o<arguments.length-2;o++){ void 0===arguments$1[o]&&(n[o]=void 0); }})),n}),t.exports=s;},function(t,e,r){var n=r(0),o=r(3),i=r(33),a=r(23),c=r(6),u=r(50),s=r(80),l=r(1),f=r(4),p=r(35),v=r(7),h=r(5),d=r(13),g=r(9),y=r(22),b=r(20),m=r(36),x=r(37),S=r(34),w=r(109),_=r(49),A=r(15),O=r(12),E=r(42),C=r(11),k=r(17),j=r(44),P=r(31),R=r(32),I=r(45),L=r(2),T=r(81),N=r(82),M=r(51),D=r(30),F=r(19).forEach,B=P("hidden"),H=L("toPrimitive"),V=D.set,$=D.getterFor("Symbol"),G=Object.prototype,U=o.Symbol,W=i("JSON","stringify"),z=A.f,X=O.f,Y=w.f,K=E.f,q=j("symbols"),J=j("op-symbols"),Q=j("string-to-symbol-registry"),Z=j("symbol-to-string-registry"),tt=j("wks"),et=o.QObject,rt=!et||!et.prototype||!et.prototype.findChild,nt=c&&l((function(){return 7!=m(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(G,e);n&&delete G[e],X(t,e,r),n&&t!==G&&X(G,e,n);}:X,ot=function(t,e){var r=q[t]=m(U.prototype);return V(r,{type:"Symbol",tag:t,description:e}),c||(r.description=e),r},it=s?function(t){return "symbol"==typeof t}:function(t){return Object(t)instanceof U},at=function(t,e,r){t===G&&at(J,e,r),h(t);var n=y(e,!0);return h(r),f(q,n)?(r.enumerable?(f(t,B)&&t[B][n]&&(t[B][n]=!1),r=m(r,{enumerable:b(0,!1)})):(f(t,B)||X(t,B,b(1,{})),t[B][n]=!0),nt(t,n,r)):X(t,n,r)},ct=function(t,e){h(t);var r=g(e),n=x(r).concat(ft(r));return F(n,(function(e){c&&!ut.call(r,e)||at(t,e,r[e]);})),t},ut=function(t){var e=y(t,!0),r=K.call(this,e);return !(this===G&&f(q,e)&&!f(J,e))&&(!(r||!f(this,e)||!f(q,e)||f(this,B)&&this[B][e])||r)},st=function(t,e){var r=g(t),n=y(e,!0);if(r!==G||!f(q,n)||f(J,n)){var o=z(r,n);return !o||!f(q,n)||f(r,B)&&r[B][n]||(o.enumerable=!0),o}},lt=function(t){var e=Y(g(t)),r=[];return F(e,(function(t){f(q,t)||f(R,t)||r.push(t);})),r},ft=function(t){var e=t===G,r=Y(e?J:g(t)),n=[];return F(r,(function(t){!f(q,t)||e&&!f(G,t)||n.push(q[t]);})),n};(u||(k((U=function(){if(this instanceof U){ throw TypeError("Symbol is not a constructor"); }var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===G&&r.call(J,t),f(this,B)&&f(this[B],e)&&(this[B][e]=!1),nt(this,e,b(1,t));};return c&&rt&&nt(G,e,{configurable:!0,set:r}),ot(e,t)}).prototype,"toString",(function(){return $(this).tag})),k(U,"withoutSetter",(function(t){return ot(I(t),t)})),E.f=ut,O.f=at,A.f=st,S.f=w.f=lt,_.f=ft,T.f=function(t){return ot(L(t),t)},c&&(X(U.prototype,"description",{configurable:!0,get:function(){return $(this).description}}),a||k(G,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:U}),F(x(tt),(function(t){N(t);})),n({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=String(t);if(f(Q,e)){ return Q[e]; }var r=U(e);return Q[e]=r,Z[r]=e,r},keyFor:function(t){if(!it(t)){ throw TypeError(t+" is not a symbol"); }if(f(Z,t)){ return Z[t] }},useSetter:function(){rt=!0;},useSimple:function(){rt=!1;}}),n({target:"Object",stat:!0,forced:!u,sham:!c},{create:function(t,e){return void 0===e?m(t):ct(m(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:st}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),n({target:"Object",stat:!0,forced:l((function(){_.f(1);}))},{getOwnPropertySymbols:function(t){return _.f(d(t))}}),W)&&n({target:"JSON",stat:!0,forced:!u||l((function(){var t=U();return "[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t,e,r){
	var arguments$1 = arguments;
	for(var n,o=[t],i=1;arguments.length>i;){ o.push(arguments$1[i++]); }if(n=e,(v(e)||void 0!==t)&&!it(t)){ return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e)){ return e }}),o[1]=e,W.apply(null,o) }}});U.prototype[H]||C(U.prototype,H,U.prototype.valueOf),M(U,"Symbol"),R[B]=!0;},function(t,e,r){var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return !!e&&e.enumerable}:n;},function(t,e,r){var n=r(3),o=r(11);t.exports=function(t,e){try{o(n,t,e);}catch(r){n[t]=e;}return e};},function(t,e,r){var n=r(23),o=r(74);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});},function(t,e){var r=0,n=Math.random();t.exports=function(t){return "Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)};},function(t,e,r){var n=r(9),o=r(8),i=r(47),a=function(t){return function(e,r,a){var c,u=n(e),s=o(u.length),l=i(a,s);if(t&&r!=r){for(;s>l;){ if((c=u[l++])!=c){ return !0 } }}else { for(;s>l;l++){ if((t||l in u)&&u[l]===r){ return t||l||0; } } }return !t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)};},function(t,e,r){var n=r(18),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)};},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];},function(t,e){e.f=Object.getOwnPropertySymbols;},function(t,e,r){var n=r(1);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return !String(Symbol())}));},function(t,e,r){var n=r(12).f,o=r(4),i=r(2)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e});};},function(t,e){t.exports=function(t){if("function"!=typeof t){ throw TypeError(String(t)+" is not a function"); }return t};},function(t,e,r){var n=r(7),o=r(35),i=r(2)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)};},function(t,e,r){var n=r(0),o=r(6),i=r(3),a=r(4),c=r(7),u=r(12).f,s=r(75),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return ""===t&&(f[e]=!0),e};s(p,l);var v=p.prototype=l.prototype;v.constructor=p;var h=v.toString,d="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(f,t)){ return ""; }var r=d?e.slice(7,-1):e.replace(g,"$1");return ""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p});}},function(t,e,r){r(82)("iterator");},function(t,e,r){var n=r(0),o=r(1),i=r(35),a=r(7),c=r(13),u=r(8),s=r(24),l=r(53),f=r(25),p=r(2),v=r(84),h=p("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=f("concat"),y=function(t){if(!a(t)){ return !1; }var e=t[h];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!d||!g},{concat:function(t){
	var arguments$1 = arguments;
	var e,r,n,o,i,a=c(this),f=l(a,0),p=0;for(e=-1,n=arguments.length;e<n;e++){ if(i=-1===e?a:arguments$1[e],y(i)){if(p+(o=u(i.length))>9007199254740991){ throw TypeError("Maximum allowed index exceeded"); }for(r=0;r<o;r++,p++){ r in i&&s(f,p,i[r]); }}else{if(p>=9007199254740991){ throw TypeError("Maximum allowed index exceeded"); }s(f,p++,i);} }return f.length=p,f}});},function(t,e,r){var n=r(2),o=r(36),i=r(12),a=n("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0;};},function(t,e,r){var n=r(0),o=r(87);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o});},function(t,e,r){var n=r(0),o=r(118);n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o});},function(t,e,r){var n=r(0),o=r(13),i=r(37);n({target:"Object",stat:!0,forced:r(1)((function(){i(1);}))},{keys:function(t){return i(o(t))}});},function(t,e,r){var n={};n[r(2)("toStringTag")]="z",t.exports="[object z]"===String(n);},function(t,e,r){var n=r(17),o=r(5),i=r(1),a=r(95),c=RegExp.prototype,u=c.toString,s=i((function(){return "/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(s||l)&&n(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),r=t.flags;return "/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in c)?a.call(t):r)}),{unsafe:!0});},function(t,e,r){var n=r(96).charAt,o=r(30),i=r(88),a=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0});}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}));},function(t,e,r){r(29);var n=r(17),o=r(1),i=r(2),a=r(40),c=r(11),u=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),v=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var h=i(t),d=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=d&&!o((function(){var e=!1,r=/a/;return "split"===t&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!d||!g||"replace"===t&&(!s||!l||p)||"split"===t&&!v){var y=/./[h],b=r(h,""[t],(function(t,e,r,n,o){return e.exec===a?d&&!o?{done:!0,value:y.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=b[0],x=b[1];n(String.prototype,t,m),n(RegExp.prototype,h,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)});}f&&c(RegExp.prototype[h],"sham",!0);};},function(t,e,r){var n=r(96).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)};},function(t,e,r){var n=r(16),o=r(40);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var i=r.call(t,e);if("object"!=typeof i){ throw TypeError("RegExp exec method returned something other than an Object or null"); }return i}if("RegExp"!==n(t)){ throw TypeError("RegExp#exec called on incompatible receiver"); }return o.call(t,e)};},function(t,e,r){var n=r(18),o=r(10);t.exports="".repeat||function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0){ throw RangeError("Wrong number of repetitions"); }for(;i>0;(i>>>=1)&&(e+=e)){ 1&i&&(r+=e); }return r};},function(t,e,r){var n=r(3),o=r(100),i=r(87),a=r(11);for(var c in o){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==i){ try{a(s,"forEach",i);}catch(t){s.forEach=i;} }}},function(t,e,r){var n=r(3),o=r(100),i=r(38),a=r(11),c=r(2),u=c("iterator"),s=c("toStringTag"),l=i.values;for(var f in o){var p=n[f],v=p&&p.prototype;if(v){if(v[u]!==l){ try{a(v,u,l);}catch(t){v[u]=l;} }if(v[s]||a(v,s,f),o[f]){ for(var h in i){ if(v[h]!==i[h]){ try{a(v,h,i[h]);}catch(t){v[h]=i[h];} } } }}}},function(t,e,r){var n=r(64),o=r(99),i=r(5),a=r(10),c=r(137),u=r(65),s=r(8),l=r(66),f=r(40),p=r(1),v=[].push,h=Math.min,d=!p((function(){return !RegExp(4294967295,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),i=void 0===r?4294967295:r>>>0;if(0===i){ return []; }if(void 0===t){ return [n]; }if(!o(t)){ return e.call(n,t,i); }for(var c,u,s,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=new RegExp(t.source,p+"g");(c=f.call(d,n))&&!((u=d.lastIndex)>h&&(l.push(n.slice(h,c.index)),c.length>1&&c.index<n.length&&v.apply(l,c.slice(1)),s=c[0].length,h=u,l.length>=i));){ d.lastIndex===c.index&&d.lastIndex++; }return h===n.length?!s&&d.test("")||l.push(""):l.push(n.slice(h)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var a=r(n,t,this,o,n!==e);if(a.done){ return a.value; }var f=i(t),p=String(this),v=c(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(d?"y":"g"),b=new v(d?f:"^(?:"+f.source+")",y),m=void 0===o?4294967295:o>>>0;if(0===m){ return []; }if(0===p.length){ return null===l(b,p)?[p]:[]; }for(var x=0,S=0,w=[];S<p.length;){b.lastIndex=d?S:0;var _,A=l(b,d?p:p.slice(S));if(null===A||(_=h(s(b.lastIndex+(d?0:S)),p.length))===x){ S=u(p,S,g); }else{if(w.push(p.slice(x,S)),w.length===m){ return w; }for(var O=1;O<=A.length-1;O++){ if(w.push(A[O]),w.length===m){ return w; } }S=x=_;}}return w.push(p.slice(x)),w}]}),!d);},function(t,e,r){var n=r(6),o=r(1),i=r(72);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}));},function(t,e,r){var n=r(3),o=r(7),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}};},function(t,e,r){var n=r(74),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource;},function(t,e,r){var n=r(3),o=r(43),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i;},function(t,e,r){var n=r(4),o=r(76),i=r(15),a=r(12);t.exports=function(t,e){for(var r=o(e),c=a.f,u=i.f,s=0;s<r.length;s++){var l=r[s];n(t,l)||c(t,l,u(e,l));}};},function(t,e,r){var n=r(33),o=r(34),i=r(49),a=r(5);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e};},function(t,e,r){var n=r(3);t.exports=n;},function(t,e,r){var n=r(4),o=r(9),i=r(46).indexOf,a=r(32);t.exports=function(t,e){var r,c=o(t),u=0,s=[];for(r in c){ !n(a,r)&&n(c,r)&&s.push(r); }for(;e.length>u;){ n(c,r=e[u++])&&(~i(s,r)||s.push(r)); }return s};},function(t,e,r){var n=r(1),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i;},function(t,e,r){var n=r(50);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;},function(t,e,r){var n=r(2);e.f=n;},function(t,e,r){var n=r(77),o=r(4),i=r(81),a=r(12).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)});};},function(t,e,r){var n=r(52);t.exports=function(t,e,r){if(n(t),void 0===e){ return t; }switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}};},function(t,e,r){var n,o,i=r(3),a=r(85),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o;},function(t,e,r){var n=r(33);t.exports=n("navigator","userAgent")||"";},function(t,e,r){var n=r(0),o=r(19).find,i=r(57),a=r(14),c=!0,u=a("find");"find"in[]&&Array(1).find((function(){c=!1;})),n({target:"Array",proto:!0,forced:c||!u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find");},function(t,e,r){var n=r(19).forEach,o=r(26),i=r(14),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)};},function(t,e,r){var n=r(0),o=r(112),i=r(90),a=r(91),c=r(51),u=r(11),s=r(17),l=r(2),f=r(23),p=r(27),v=r(89),h=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,g=l("iterator"),y=function(){return this};t.exports=function(t,e,r,l,v,b,m){o(r,e,l);var x,S,w,_=function(t){if(t===v&&k){ return k; }if(!d&&t in E){ return E[t]; }switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},A=e+" Iterator",O=!1,E=t.prototype,C=E[g]||E["@@iterator"]||v&&E[v],k=!d&&C||_(v),j="Array"==e&&E.entries||C;if(j&&(x=i(j.call(new t)),h!==Object.prototype&&x.next&&(f||i(x)===h||(a?a(x,h):"function"!=typeof x[g]&&u(x,g,y)),c(x,A,!0,!0),f&&(p[A]=y))),"values"==v&&C&&"values"!==C.name&&(O=!0,k=function(){return C.call(this)}),f&&!m||E[g]===k||u(E,g,k),p[e]=k,v){ if(S={values:_("values"),keys:b?k:_("keys"),entries:_("entries")},m){ for(w in S){ !d&&!O&&w in E||s(E,w,S[w]); } }else { n({target:e,proto:!0,forced:d||O},S); } }return S};},function(t,e,r){var n,o,i,a=r(90),c=r(11),u=r(4),s=r(2),l=r(23),f=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(n=o):p=!0),null==n&&(n={}),l||u(n,f)||c(n,f,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p};},function(t,e,r){var n=r(4),o=r(13),i=r(31),a=r(113),c=i("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null};},function(t,e,r){var n=r(5),o=r(114);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array;}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0);},function(t,e,r){var n=r(10),o="["+r(93)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)};},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff";},function(t,e,r){var n=r(61),o=r(16),i=r(2)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n};},function(t,e,r){var n=r(5);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};},function(t,e,r){var n=r(18),o=r(10),i=function(t){return function(e,r){var i,a,c=String(o(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)};},function(t,e,r){var n=r(64),o=r(5),i=r(8),a=r(10),c=r(65),u=r(66);n("match",1,(function(t,e,r){return [function(e){var r=a(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done){ return n.value; }var a=o(t),s=String(this);if(!a.global){ return u(a,s); }var l=a.unicode;a.lastIndex=0;for(var f,p=[],v=0;null!==(f=u(a,s));){var h=String(f[0]);p[v]=h,""===h&&(a.lastIndex=c(s,i(a.lastIndex),l)),v++;}return 0===v?null:p}]}));},function(t,e,r){var n,o=r(0),i=r(15).f,a=r(8),c=r(122),u=r(10),s=r(123),l=r(23),f="".startsWith,p=Math.min,v=s("startsWith");o({target:"String",proto:!0,forced:!!(l||v||(n=i(String.prototype,"startsWith"),!n||n.writable))&&!v},{startsWith:function(t){var e=String(u(this));c(t);var r=a(p(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return f?f.call(e,n,r):e.slice(r,r+n.length)===n}});},function(t,e,r){var n=r(7),o=r(16),i=r(2)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))};},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};},function(t,e,r){var n=r(0),o=r(21),i=r(9),a=r(26),c=[].join,u=o!=Object,s=a("join",",");n({target:"Array",proto:!0,forced:u||!s},{join:function(t){return c.call(i(this),void 0===t?",":t)}});},function(t,e,r){var n=r(0),o=r(19).map,i=r(25),a=r(14),c=i("map"),u=a("map");n({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}});},function(t,e,r){var n=r(0),o=r(140).start;n({target:"String",proto:!0,forced:r(141)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}});},function(t){t.exports=JSON.parse('{"a":"1.5.1"}');},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")();}catch(t){"object"==typeof window&&(r=window);}t.exports=r;},function(t,e,r){var n=r(3),o=r(73),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i));},function(t,e,r){var n=r(6),o=r(12),i=r(5),a=r(37);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),c=n.length,u=0;c>u;){ o.f(t,r=n[u++],e[r]); }return t};},function(t,e,r){var n=r(33);t.exports=n("document","documentElement");},function(t,e,r){var n=r(9),o=r(34).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(n(t))};},function(t,e,r){var n=r(0),o=r(46).includes,i=r(57);n({target:"Array",proto:!0,forced:!r(14)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes");},function(t,e,r){var n=r(0),o=r(46).indexOf,i=r(26),a=r(14),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),l=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:u||!s||!l},{indexOf:function(t){return u?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}});},function(t,e,r){var n=r(89).IteratorPrototype,o=r(36),i=r(20),a=r(51),c=r(27),u=function(){return this};t.exports=function(t,e,r){var s=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,s,!1,!0),c[s]=u,t};},function(t,e,r){var n=r(1);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}));},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t)&&null!==t){ throw TypeError("Can't set "+String(t)+" as a prototype"); }return t};},function(t,e,r){var n=r(0),o=r(19).some,i=r(26),a=r(14),c=i("some"),u=a("some");n({target:"Array",proto:!0,forced:!c||!u},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}});},function(t,e,r){var n=r(0),o=r(47),i=r(18),a=r(8),c=r(13),u=r(53),s=r(24),l=r(25),f=r(14),p=l("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,d=Math.min;n({target:"Array",proto:!0,forced:!p||!v},{splice:function(t,e){
	var arguments$1 = arguments;
	var r,n,l,f,p,v,g=c(this),y=a(g.length),b=o(t,y),m=arguments.length;if(0===m?r=n=0:1===m?(r=0,n=y-b):(r=m-2,n=d(h(i(e),0),y-b)),y+r-n>9007199254740991){ throw TypeError("Maximum allowed length exceeded"); }for(l=u(g,n),f=0;f<n;f++){ (p=b+f)in g&&s(l,f,g[p]); }if(l.length=n,r<n){for(f=b;f<y-n;f++){ v=f+r,(p=f+n)in g?g[v]=g[p]:delete g[v]; }for(f=y;f>y-n+r;f--){ delete g[f-1]; }}else if(r>n){ for(f=y-n;f>b;f--){ v=f+r-1,(p=f+n-1)in g?g[v]=g[p]:delete g[v]; } }for(f=0;f<r;f++){ g[f+b]=arguments$1[f+2]; }return g.length=y-n+r,l}});},function(t,e,r){var n=r(7),o=r(91);t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t};},function(t,e,r){var n=r(6),o=r(1),i=r(37),a=r(49),c=r(42),u=r(13),s=r(21),l=Object.assign,f=Object.defineProperty;t.exports=!l||o((function(){if(n&&1!==l({b:1},l(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1});}}),{b:2})).b){ return !0; }var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t;})),7!=l({},t)[r]||"abcdefghijklmnopqrst"!=i(l({},e)).join("")}))?function(t,e){for(var r=u(t),o=arguments.length,l=1,f=a.f,p=c.f;o>l;){ for(var v,h=s(arguments[l++]),d=f?i(h).concat(f(h)):i(h),g=d.length,y=0;g>y;){ v=d[y++],n&&!p.call(h,v)||(r[v]=h[v]); } }return r}:l;},function(t,e,r){var n=r(61),o=r(94);t.exports=n?{}.toString:function(){return "[object "+o(this)+"]"};},function(t,e,r){var n=r(1);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));},function(t,e,r){r(0)({target:"String",proto:!0},{repeat:r(67)});},function(t,e,r){var n=r(99);t.exports=function(t){if(n(t)){ throw TypeError("The method doesn't accept regular expressions"); }return t};},function(t,e,r){var n=r(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e);}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return !1};},function(t,e,r){var n=r(0),o=r(19).filter,i=r(25),a=r(14),c=i("filter"),u=a("filter");n({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}});},function(t,e,r){var n=r(0),o=r(126);n({target:"Array",stat:!0,forced:!r(130)((function(t){}))},{from:o});},function(t,e,r){var n=r(83),o=r(13),i=r(127),a=r(128),c=r(8),u=r(24),s=r(129);t.exports=function(t){var e,r,l,f,p,v,h=o(t),d="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,b=void 0!==y,m=s(h),x=0;if(b&&(y=n(y,g>2?arguments[2]:void 0,2)),null==m||d==Array&&a(m)){ for(r=new d(e=c(h.length));e>x;x++){ v=b?y(h[x],x):h[x],u(r,x,v); } }else { for(p=(f=m.call(h)).next,r=new d;!(l=p.call(f)).done;x++){ v=b?i(f,y,[l.value,x],!0):l.value,u(r,x,v); } }return r.length=x,r};},function(t,e,r){var n=r(5);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}};},function(t,e,r){var n=r(2),o=r(27),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)};},function(t,e,r){var n=r(94),o=r(27),i=r(2)("iterator");t.exports=function(t){if(null!=t){ return t[i]||t["@@iterator"]||o[n(t)] }};},function(t,e,r){var n=r(2)("iterator"),o=!1;try{var i=0,a={next:function(){return {done:!!i++}},return:function(){o=!0;}};a[n]=function(){return this},Array.from(a,(function(){throw 2}));}catch(t){}t.exports=function(t,e){if(!e&&!o){ return !1; }var r=!1;try{var i={};i[n]=function(){return {next:function(){return {done:r=!0}}}},t(i);}catch(t){}return r};},function(t,e,r){var n=r(0),o=r(132).left,i=r(26),a=r(14),c=i("reduce"),u=a("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!u},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});},function(t,e,r){var n=r(52),o=r(13),i=r(21),a=r(8),c=function(t){return function(e,r,c,u){n(r);var s=o(e),l=i(s),f=a(s.length),p=t?f-1:0,v=t?-1:1;if(c<2){ for(;;){if(p in l){u=l[p],p+=v;break}if(p+=v,t?p<0:f<=p){ throw TypeError("Reduce of empty array with no initial value") }} }for(;t?p>=0:f>p;p+=v){ p in l&&(u=r(u,l[p],p,s)); }return u}};t.exports={left:c(!1),right:c(!0)};},function(t,e,r){var n=r(0),o=r(7),i=r(35),a=r(47),c=r(8),u=r(9),s=r(24),l=r(2),f=r(25),p=r(14),v=f("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),d=l("species"),g=[].slice,y=Math.max;n({target:"Array",proto:!0,forced:!v||!h},{slice:function(t,e){var r,n,l,f=u(this),p=c(f.length),v=a(t,p),h=a(void 0===e?p:e,p);if(i(f)&&("function"!=typeof(r=f.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[d])&&(r=void 0):r=void 0,r===Array||void 0===r)){ return g.call(f,v,h); }for(n=new(void 0===r?Array:r)(y(h-v,0)),l=0;v<h;v++,l++){ v in f&&s(n,l,f[v]); }return n.length=l,n}});},function(t,e,r){var n=r(0),o=r(1),i=r(9),a=r(15).f,c=r(6),u=o((function(){a(1);}));n({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}});},function(t,e,r){var n=r(0),o=r(6),i=r(76),a=r(9),c=r(15),u=r(24);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,r,n=a(t),o=c.f,s=i(n),l={},f=0;s.length>f;){ void 0!==(r=o(n,e=s[f++]))&&u(l,e,r); }return l}});},function(t,e,r){var n=r(64),o=r(5),i=r(13),a=r(8),c=r(18),u=r(10),s=r(65),l=r(66),f=Math.max,p=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g;n("replace",2,(function(t,e,r,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=n.REPLACE_KEEPS_$0,b=g?"$":"$0";return [function(r,n){var o=u(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!g&&y||"string"==typeof n&&-1===n.indexOf(b)){var i=r(e,t,this,n);if(i.done){ return i.value }}var u=o(t),v=String(this),h="function"==typeof n;h||(n=String(n));var d=u.global;if(d){var x=u.unicode;u.lastIndex=0;}for(var S=[];;){var w=l(u,v);if(null===w){ break; }if(S.push(w),!d){ break; }""===String(w[0])&&(u.lastIndex=s(v,a(u.lastIndex),x));}for(var _,A="",O=0,E=0;E<S.length;E++){w=S[E];for(var C=String(w[0]),k=f(p(c(w.index),v.length),0),j=[],P=1;P<w.length;P++){ j.push(void 0===(_=w[P])?_:String(_)); }var R=w.groups;if(h){var I=[C].concat(j,k,v);void 0!==R&&I.push(R);var L=String(n.apply(void 0,I));}else { L=m(C,v,k,j,R,n); }k>=O&&(A+=v.slice(O,k)+L,O=k+C.length);}return A+v.slice(O)}];function m(t,r,n,o,a,c){var u=n+t.length,s=o.length,l=d;return void 0!==a&&(a=i(a),l=h),e.call(c,l,(function(e,i){var c;switch(i.charAt(0)){case"$":return "$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var l=+i;if(0===l){ return e; }if(l>s){var f=v(l/10);return 0===f?e:f<=s?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):e}c=o[l-1];}return void 0===c?"":c}))}}));},function(t,e,r){var n=r(5),o=r(52),i=r(2)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)};},function(t,e,r){var n=r(0),o=r(92).trim;n({target:"String",proto:!0,forced:r(139)("trim")},{trim:function(){return o(this)}});},function(t,e,r){var n=r(1),o=r(93);t.exports=function(t){return n((function(){return !!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))};},function(t,e,r){var n=r(8),o=r(67),i=r(10),a=Math.ceil,c=function(t){return function(e,r,c){var u,s,l=String(i(e)),f=l.length,p=void 0===c?" ":String(c),v=n(r);return v<=f||""==p?l:(u=v-f,(s=o.call(p,a(u/p.length))).length>u&&(s=s.slice(0,u)),t?l+s:s+l)}};t.exports={start:c(!1),end:c(!0)};},function(t,e,r){var n=r(85);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);},function(t,e,r){var n=r(0),o=r(18),i=r(143),a=r(67),c=r(1),u=1..toFixed,s=Math.floor,l=function(t,e,r){return 0===e?r:e%2==1?l(t,e-1,r*t):l(t*t,e/2,r)};n({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({});}))},{toFixed:function(t){var e,r,n,c,u=i(this),f=o(t),p=[0,0,0,0,0,0],v="",h="0",d=function(t,e){for(var r=-1,n=e;++r<6;){ n+=t*p[r],p[r]=n%1e7,n=s(n/1e7); }},g=function(t){for(var e=6,r=0;--e>=0;){ r+=p[e],p[e]=s(r/t),r=r%t*1e7; }},y=function(){for(var t=6,e="";--t>=0;){ if(""!==e||0===t||0!==p[t]){var r=String(p[t]);e=""===e?r:e+a.call("0",7-r.length)+r;} }return e};if(f<0||f>20){ throw RangeError("Incorrect fraction digits"); }if(u!=u){ return "NaN"; }if(u<=-1e21||u>=1e21){ return String(u); }if(u<0&&(v="-",u=-u),u>1e-21){ if(r=(e=function(t){for(var e=0,r=t;r>=4096;){ e+=12,r/=4096; }for(;r>=2;){ e+=1,r/=2; }return e}(u*l(2,69,1))-69)<0?u*l(2,-e,1):u/l(2,e,1),r*=4503599627370496,(e=52-e)>0){for(d(0,r),n=f;n>=7;){ d(1e7,0),n-=7; }for(d(l(10,n,1),0),n=e-1;n>=23;){ g(1<<23),n-=23; }g(1<<n),d(1,1),g(2),h=y();}else { d(0,r),d(1<<-e,0),h=y()+a.call("0",f); } }return h=f>0?v+((c=h.length)<=f?"0."+a.call("0",f-c)+h:h.slice(0,c-f)+"."+h.slice(c-f)):v+h}});},function(t,e,r){var n=r(16);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t)){ throw TypeError("Incorrect invocation"); }return +t};},function(t,e,r){r.r(e);var n={};r.r(n),r.d(n,"on",(function(){return u})),r.d(n,"off",(function(){return s})),r.d(n,"createElementFromString",(function(){return l})),r.d(n,"removeAttribute",(function(){return f})),r.d(n,"createFromTemplate",(function(){return p})),r.d(n,"eventPath",(function(){return v})),r.d(n,"resolveElement",(function(){return h})),r.d(n,"adjustableInputNumbers",(function(){return d}));r(41),r(54),r(55),r(56),r(86),r(58),r(110),r(111),r(38),r(115),r(116),r(39),r(59),r(60),r(28),r(29),r(62),r(63),r(97),r(121),r(98),r(68),r(69),r(124),r(125),r(131),r(133),r(134),r(135),r(136),r(70),r(138);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n);}return r}function i(t){
	var arguments$1 = arguments;
	for(var e=1;e<arguments.length;e++){var r=null!=arguments$1[e]?arguments$1[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e));}));}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e,r,n,o){void 0===o&&(o={}),e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(r)||(r=[r]);var a=e,c=Array.isArray(a),u=0;for(a=c?a:a[Symbol.iterator]();;){var s;if(c){if(u>=a.length){ break; }s=a[u++];}else{if((u=a.next()).done){ break; }s=u.value;}var l=s,f=r,p=Array.isArray(f),v=0;for(f=p?f:f[Symbol.iterator]();;){var h;if(p){if(v>=f.length){ break; }h=f[v++];}else{if((v=f.next()).done){ break; }h=v.value;}var d=h;l[t](d,n,i({capture:!1},o));}}return Array.prototype.slice.call(arguments,1)}var u=c.bind(null,"addEventListener"),s=c.bind(null,"removeEventListener");function l(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function f(t,e){var r=t.getAttribute(e);return t.removeAttribute(e),r}function p(t){return function t(e,r){void 0===r&&(r={});var n=f(e,":obj"),o=f(e,":ref"),i=n?r[n]={}:r;o&&(r[o]=e);for(var a=0,c=Array.from(e.children);a<c.length;a++){var u=c[a],s=f(u,":arr"),l=t(u,s?{}:i);s&&(i[s]||(i[s]=[])).push(Object.keys(l).length?l:u);}return r}(l(t))}function v(t){var e=t.path||t.composedPath&&t.composedPath();if(e){ return e; }var r=t.target.parentElement;for(e=[t.target,r];r=r.parentElement;){ e.push(r); }return e.push(document,window),e}function h(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((function(t,e,r,n){return t=t.querySelector(e),r<n.length-1?t.shadowRoot:t}),document):null}function d(t,e){function r(r){var n=[.001,.01,.1][Number(r.shiftKey||2*r.ctrlKey)]*(r.deltaY<0?1:-1),o=0,i=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(function(t,r){return r<=i&&r+t.length>=i?(i=r,e(Number(t),n,o)):(o++,t)})),t.focus(),t.setSelectionRange(i,i),r.preventDefault(),t.dispatchEvent(new Event("input"));}void 0===e&&(e=function(t){return t}),u(t,"focus",(function(){return u(window,"wheel",r,{passive:!1})})),u(t,"blur",(function(){return s(window,"wheel",r)}));}var g=r(104),y=(r(101),r(102),r(103),Math.min),b=Math.max,m=Math.floor,x=Math.round;function S(t,e,r){e/=100,r/=100;var n=m(t=t/360*6),o=t-n,i=r*(1-e),a=r*(1-o*e),c=r*(1-(1-o)*e),u=n%6;return [255*[r,a,i,i,c,r][u],255*[c,r,r,a,i,i][u],255*[i,i,c,r,r,a][u]]}function w(t,e,r){var n,o,i=y(t/=255,e/=255,r/=255),a=b(t,e,r),c=a-i;if(0===c){ n=o=0; }else{o=c/a;var u=((a-t)/6+c/2)/c,s=((a-e)/6+c/2)/c,l=((a-r)/6+c/2)/c;t===a?n=l-s:e===a?n=1/3+u-l:r===a&&(n=2/3+s-u),n<0?n+=1:n>1&&(n-=1);}return [360*n,100*o,100*a]}function _(t,e,r,n){e/=100,r/=100;var o=255*(1-y(1,(t/=100)*(1-(n/=100))+n)),i=255*(1-y(1,e*(1-n)+n)),a=255*(1-y(1,r*(1-n)+n));return [].concat(w(o,i,a))}function A(t,e,r){return e/=100,[t,2*(e*=(r/=100)<.5?r:1-r)/(r+e)*100,100*(r+e)]}function O(t){return w.apply(void 0,t.match(/.{2}/g).map((function(t){return parseInt(t,16)})))}function E(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase()){ return "#000"; }var e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;var e,r={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},n=function(t){return t.map((function(t){return /^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0}))};t:for(var o in r){ if(e=r[o].exec(t)){var i=function(t){return !!e[2]==("number"==typeof t)};switch(o){case"cmyk":var a=n(e),c=a[1],u=a[2],s=a[3],l=a[4];if(c>100||u>100||s>100||l>100){ break t; }return {values:_(c,u,s,l),type:o};case"rgba":var f=n(e),p=f[3],v=f[4],h=f[5],d=f[6];if(p>255||v>255||h>255||d<0||d>1||!i(d)){ break t; }return {values:[].concat(w(p,v,h),[d]),a:d,type:o};case"hexa":var g=e[1];4!==g.length&&3!==g.length||(g=g.split("").map((function(t){return t+t})).join(""));var y=g.substring(0,6),b=g.substring(6);return b=b?parseInt(b,16)/255:void 0,{values:[].concat(O(y),[b]),a:b,type:o};case"hsla":var m=n(e),x=m[3],S=m[4],E=m[5],C=m[6];if(x>360||S>100||E>100||C<0||C>1||!i(C)){ break t; }return {values:[].concat(A(x,S,E),[C]),a:C,type:o};case"hsva":var k=n(e),j=k[3],P=k[4],R=k[5],I=k[6];if(j>360||P>100||R>100||I<0||I>1||!i(I)){ break t; }return {values:[j,P,R,I],a:I,type:o}}} }return {values:null,type:null}}r(142);function C(t,e,r,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===n&&(n=1);var o=function(t,e){return function(r){return void 0===r&&(r=-1),e(~r?t.map((function(t){return Number(t.toFixed(r))})):t)}},i={h:t,s:e,v:r,a:n,toHSVA:function(){var t=[i.h,i.s,i.v,i.a];return t.toString=o(t,(function(t){return "hsva("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+i.a+")"})),t},toHSLA:function(){var t=[].concat(function(t,e,r){var n=(2-(e/=100))*(r/=100)/2;return 0!==n&&(e=1===n?0:n<.5?e*r/(2*n):e*r/(2-2*n)),[t,100*e,100*n]}(i.h,i.s,i.v),[i.a]);return t.toString=o(t,(function(t){return "hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+i.a+")"})),t},toRGBA:function(){var t=[].concat(S(i.h,i.s,i.v),[i.a]);return t.toString=o(t,(function(t){return "rgba("+t[0]+", "+t[1]+", "+t[2]+", "+i.a+")"})),t},toCMYK:function(){var t=function(t,e,r){var n=S(t,e,r),o=n[0]/255,i=n[1]/255,a=n[2]/255,c=y(1-o,1-i,1-a);return [100*(1===c?0:(1-o-c)/(1-c)),100*(1===c?0:(1-i-c)/(1-c)),100*(1===c?0:(1-a-c)/(1-c)),100*c]}(i.h,i.s,i.v);return t.toString=o(t,(function(t){return "cmyk("+t[0]+"%, "+t[1]+"%, "+t[2]+"%, "+t[3]+"%)"})),t},toHEXA:function(){var t=function(t,e,r){return S(t,e,r).map((function(t){return x(t).toString(16).padStart(2,"0")}))}(i.h,i.s,i.v),e=i.a>=1?"":Number((255*i.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=function(){return "#"+t.join("").toUpperCase()},t},clone:function(){return C(i.h,i.s,i.v,i.a)}};return i}var k=function(t){return Math.max(Math.min(t,1),0)};function j(t){var e={options:Object.assign({lock:null,onchange:function(){return 0},onstop:function(){return 0}},t),_keyboard:function(t){var r=e.options,n=t.type,o=t.key;if(document.activeElement===r.wrapper){var i=e.options.lock,a="ArrowUp"===o,c="ArrowRight"===o,u="ArrowDown"===o,s="ArrowLeft"===o;if("keydown"===n&&(a||c||u||s)){var l=0,f=0;"v"===i?l=a||c?1:-1:"h"===i?l=a||c?-1:1:(f=a?-1:u?1:0,l=s?-1:c?1:0),e.update(k(e.cache.x+.01*l),k(e.cache.y+.01*f)),t.preventDefault();}else { o.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault()); }}},_tapstart:function(t){u(document,["mouseup","touchend","touchcancel"],e._tapstop),u(document,["mousemove","touchmove"],e._tapmove),t.preventDefault(),e._tapmove(t);},_tapmove:function(t){var r=e.options,n=e.cache,o=r.lock,i=r.element,a=r.wrapper.getBoundingClientRect(),c=0,u=0;if(t){var s=t&&t.touches&&t.touches[0];c=t?(s||t).clientX:0,u=t?(s||t).clientY:0,c<a.left?c=a.left:c>a.left+a.width&&(c=a.left+a.width),u<a.top?u=a.top:u>a.top+a.height&&(u=a.top+a.height),c-=a.left,u-=a.top;}else { n&&(c=n.x*a.width,u=n.y*a.height); }"h"!==o&&(i.style.left="calc("+c/a.width*100+"% - "+i.offsetWidth/2+"px)"),"v"!==o&&(i.style.top="calc("+u/a.height*100+"% - "+i.offsetHeight/2+"px)"),e.cache={x:c/a.width,y:u/a.height};var l=k(c/a.width),f=k(u/a.height);switch(o){case"v":return r.onchange(l);case"h":return r.onchange(f);default:return r.onchange(l,f)}},_tapstop:function(){e.options.onstop(),s(document,["mouseup","touchend","touchcancel"],e._tapstop),s(document,["mousemove","touchmove"],e._tapmove);},trigger:function(){e._tapmove();},update:function(t,r){void 0===t&&(t=0),void 0===r&&(r=0);var n=e.options.wrapper.getBoundingClientRect(),o=n.left,i=n.top,a=n.width,c=n.height;"h"===e.options.lock&&(r=t),e._tapmove({clientX:o+a*t,clientY:i+c*r});},destroy:function(){var t=e.options,r=e._tapstart,n=e._keyboard;s(document,["keydown","keyup"],n),s([t.wrapper,t.element],"mousedown",r),s([t.wrapper,t.element],"touchstart",r,{passive:!1});}},r=e.options,n=e._tapstart,o=e._keyboard;return u([r.wrapper,r.element],"mousedown",n),u([r.wrapper,r.element],"touchstart",n,{passive:!1}),u(document,["keydown","keyup"],o),e}function P(t){void 0===t&&(t={}),t=Object.assign({onchange:function(){return 0},className:"",elements:[]},t);var e=u(t.elements,"click",(function(e){t.elements.forEach((function(r){return r.classList[e.target===r?"add":"remove"](t.className)})),t.onchange(e);}));return {destroy:function(){return s.apply(n,e)}}}function R(t){var e,r=t.el,n=t.reference,o=t.padding,i=void 0===o?8:o,a={start:"sme",middle:"mse",end:"ems"},c={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},u=(void 0===e&&(e={}),function(t,r){if(void 0===r&&(r=e[t]),r){ return r; }var n=t.split("-"),o=n[0],i=n[1],a=void 0===i?"middle":i,c="top"===o||"bottom"===o;return e[t]={position:o,variant:a,isVertical:c}});return {update:function(t,e){void 0===e&&(e=!1);for(var o=u(t),s=o.position,l=o.variant,f=o.isVertical,p=n.getBoundingClientRect(),v=r.getBoundingClientRect(),h=function(t){return t?{t:p.top-v.height-i,b:p.bottom+i}:{r:p.right+i,l:p.left-v.width-i}},d=function(t){return t?{s:p.left+p.width-v.width,m:-v.width/2+(p.left+p.width/2),e:p.left}:{s:p.bottom-v.height,m:p.bottom-p.height/2-v.height/2,e:p.bottom-p.height}},g={},y=function(t,e,r){var n="top"===r,o=n?v.height:v.width,i=window[n?"innerHeight":"innerWidth"],a=t,c=Array.isArray(a),u=0;for(a=c?a:a[Symbol.iterator]();;){var s;if(c){if(u>=a.length){ break; }s=a[u++];}else{if((u=a.next()).done){ break; }s=u.value;}var l=e[s],f=g[r]=l+"px";if(l>0&&l+o<i){ return f }}return null},b=0,m=[f,!f];b<m.length;b++){var x=m[b],S=x?"top":"left",w=x?"left":"top",_=y(c[s],h(x),S),A=y(a[l],d(x),w);if(_&&A){ return r.style[w]=A,void(r.style[S]=_) }}e?(r.style.top=(window.innerHeight-v.height)/2+"px",r.style.left=(window.innerWidth-v.width)/2+"px"):(r.style.left=g.left,r.style.top=g.top);}}}function I(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var L=function(){function t(t){var e=this;I(this,"_initializingActive",!0),I(this,"_recalc",!0),I(this,"_nanopop",null),I(this,"_root",null),I(this,"_color",C()),I(this,"_lastColor",C()),I(this,"_swatchColors",[]),I(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=t=Object.assign({appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},strings:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);var r=t,n=r.swatches,o=r.components,i=r.theme,a=r.sliders,c=r.lockOpacity,u=r.padding;["nano","monolith"].includes(i)&&!a&&(t.sliders="h"),o.interaction||(o.interaction={});var s=o.preview,l=o.opacity,f=o.hue,p=o.palette;o.opacity=!c&&l,o.palette=p||s||l||f,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),n&&n.length&&n.forEach((function(t){return e.addSwatch(t)}));var v=this._root,h=v.button,d=v.app;this._nanopop=R({reference:h,padding:u,el:d}),h.setAttribute("role","button"),h.setAttribute("aria-label","toggle color picker dialog");var g=this;requestAnimationFrame((function e(){if(!d.offsetWidth&&d.parentElement!==t.container){ return requestAnimationFrame(e); }g.setColor(t.default),g._rePositioningPicker(),t.defaultRepresentation&&(g._representation=t.defaultRepresentation,g.setColorRepresentation(g._representation)),t.showAlways&&g.show(),g._initializingActive=!1,g._emit("init");}));}var e=t.prototype;return e._preBuild=function(){for(var t,e,r,n,o,i,a,c,u,s,l,f=this.options,v=0,d=["el","container"];v<d.length;v++){var g=d[v];f[g]=h(f[g]);}this._root=(e=(t=f).components,r=t.strings,n=t.useAsButton,o=t.inline,i=t.appClass,a=t.theme,c=t.lockOpacity,s=p('\n      <div :ref="root" class="pickr">\n\n        '+(n?"":'<button type="button" :ref="button" class="pcr-button"></button>')+'\n\n        <div :ref="app" class="pcr-app '+(i||"")+'" data-theme="'+a+'" '+(o?'style="position: unset"':"")+' aria-label="color picker dialog" role="form">\n          <div class="pcr-selection" '+(u=function(t){return t?"":'style="display:none" hidden'})(e.palette)+'>\n            <div :obj="preview" class="pcr-color-preview" '+u(e.preview)+'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="use previous color"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="color selection area" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" '+u(e.hue)+'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="hue selection slider" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" '+u(e.opacity)+'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="opacity selection slider" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches '+(e.palette?"":"pcr-last")+'" :ref="swatches"></div> \n\n          <div :obj="interaction" class="pcr-interaction" '+u(Object.keys(e.interaction).length)+'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" '+u(e.interaction.input)+'>\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="'+(c?"HEX":"HEXA")+'" type="button" '+u(e.interaction.hex)+'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="'+(c?"RGB":"RGBA")+'" type="button" '+u(e.interaction.rgba)+'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="'+(c?"HSL":"HSLA")+'" type="button" '+u(e.interaction.hsla)+'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="'+(c?"HSV":"HSVA")+'" type="button" '+u(e.interaction.hsva)+'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" '+u(e.interaction.cmyk)+'>\n\n            <input :ref="save" class="pcr-save" value="'+(r.save||"Save")+'" type="button" '+u(e.interaction.save)+' aria-label="save and exit">\n            <input :ref="cancel" class="pcr-cancel" value="'+(r.cancel||"Cancel")+'" type="button" '+u(e.interaction.cancel)+' aria-label="cancel and exit">\n            <input :ref="clear" class="pcr-clear" value="'+(r.clear||"Clear")+'" type="button" '+u(e.interaction.clear)+' aria-label="clear and exit">\n          </div>\n        </div>\n      </div>\n    '),(l=s.interaction).options.find((function(t){return !t.hidden&&!t.classList.add("active")})),l.type=function(){return l.options.find((function(t){return t.classList.contains("active")}))},s),f.useAsButton&&(this._root.button=f.el),f.container.appendChild(this._root.root);},e._finalBuild=function(){var t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){var r=t.el.parentElement;t.el.nextSibling?r.insertBefore(e.app,t.el.nextSibling):r.appendChild(e.app);}else { t.container.appendChild(e.app); }t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide();},e._buildComponents=function(){var t=this,e=this,r=this.options.components,n=(e.options.sliders||"v").repeat(2),o=n.match(/^[vh]+$/g)?n:[],i=o[0],a=o[1],c=function(){return t._color||(t._color=t._lastColor.clone())},u={palette:j({element:e._root.palette.picker,wrapper:e._root.palette.palette,onstop:function(){return e._emit("changestop",e)},onchange:function(t,n){if(r.palette){var o=c(),i=e._root,a=e.options,u=i.preview,s=u.lastColor,l=u.currentColor;e._recalc&&(o.s=100*t,o.v=100-100*n,o.v<0&&(o.v=0),e._updateOutput());var f=o.toRGBA().toString(0);this.element.style.background=f,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, "+o.a+"), transparent),\n                        linear-gradient(to left, hsla("+o.h+", 100%, 50%, "+o.a+"), rgba(255, 255, 255, "+o.a+"))\n                    ",a.comparison?a.useAsButton||e._lastColor||(s.style.color=f):(i.button.style.color=f,i.button.classList.remove("clear"));var p=o.toHEXA().toString(),v=e._swatchColors,h=Array.isArray(v),d=0;for(v=h?v:v[Symbol.iterator]();;){var g;if(h){if(d>=v.length){ break; }g=v[d++];}else{if((d=v.next()).done){ break; }g=d.value;}var y=g,b=y.el,m=y.color;b.classList[p===m.toHEXA().toString()?"add":"remove"]("pcr-active");}l.style.color=f;}}}),hue:j({lock:"v"===a?"h":"v",element:e._root.hue.picker,wrapper:e._root.hue.slider,onstop:function(){return e._emit("changestop",e)},onchange:function(t){if(r.hue&&r.palette){var n=c();e._recalc&&(n.h=360*t),this.element.style.backgroundColor="hsl("+n.h+", 100%, 50%)",u.palette.trigger();}}}),opacity:j({lock:"v"===i?"h":"v",element:e._root.opacity.picker,wrapper:e._root.opacity.slider,onstop:function(){return e._emit("changestop",e)},onchange:function(t){if(r.opacity&&r.palette){var n=c();e._recalc&&(n.a=Math.round(100*t)/100),this.element.style.background="rgba(0, 0, 0, "+n.a+")",u.palette.trigger();}}}),selectable:P({elements:e._root.interaction.options,className:"active",onchange:function(t){e._representation=t.target.getAttribute("data-type").toUpperCase(),e._recalc&&e._updateOutput();}})};this._components=u;},e._bindEvents=function(){var t=this,e=this._root,r=this.options,n=[u(e.interaction.clear,"click",(function(){return t._clearColor()})),u([e.interaction.cancel,e.preview.lastColor],"click",(function(){t._emit("cancel",t),t.setHSVA.apply(t,(t._lastColor||t._color).toHSVA().concat([!0]));})),u(e.interaction.save,"click",(function(){!t.applyColor()&&!r.showAlways&&t.hide();})),u(e.interaction.result,["keyup","input"],(function(e){t.setColor(e.target.value,!0)&&!t._initializingActive&&t._emit("change",t._color),e.stopImmediatePropagation();})),u(e.interaction.result,["focus","blur"],(function(e){t._recalc="blur"===e.type,t._recalc&&t._updateOutput();})),u([e.palette.palette,e.palette.picker,e.hue.slider,e.hue.picker,e.opacity.slider,e.opacity.picker],["mousedown","touchstart"],(function(){return t._recalc=!0}))];if(!r.showAlways){var o=r.closeWithKey;n.push(u(e.button,"click",(function(){return t.isOpen()?t.hide():t.show()})),u(document,"keyup",(function(e){return t.isOpen()&&(e.key===o||e.code===o)&&t.hide()})),u(document,["touchstart","mousedown"],(function(r){t.isOpen()&&!v(r).some((function(t){return t===e.app||t===e.button}))&&t.hide();}),{capture:!0}));}if(r.adjustableNumbers){var i={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};d(e.interaction.result,(function(e,r,n){var o=i[t.getColorRepresentation().toLowerCase()];if(o){var a=o[n],c=e+(a>=100?1e3*r:r);return c<=0?0:Number((c<a?c:a).toPrecision(3))}return e}));}if(r.autoReposition&&!r.inline){var a=null,c=this;n.push(u(window,["scroll","resize"],(function(){c.isOpen()&&(r.closeOnScroll&&c.hide(),null===a?(a=setTimeout((function(){return a=null}),100),requestAnimationFrame((function t(){c._rePositioningPicker(),null!==a&&requestAnimationFrame(t);}))):(clearTimeout(a),a=setTimeout((function(){return a=null}),100)));}),{capture:!0}));}this._eventBindings=n;},e._rePositioningPicker=function(){var t=this.options;t.inline||this._nanopop.update(t.position,!this._recalc);},e._updateOutput=function(){var t=this._root,e=this._color,r=this.options;if(t.interaction.type()){var n="to"+t.interaction.type().getAttribute("data-type");t.interaction.result.value="function"==typeof e[n]?e[n]().toString(r.outputPrecision):"";}!this._initializingActive&&this._recalc&&this._emit("change",e);},e._clearColor=function(t){void 0===t&&(t=!1);var e=this._root,r=this.options;r.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),r.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this));},e._parseLocalColor=function(t){var e=E(t),r=e.values,n=e.type,o=e.a,i=this.options.lockOpacity,a=void 0!==o&&1!==o;return r&&3===r.length&&(r[3]=void 0),{values:!r||i&&a?null:r,type:n}},e._emit=function(t){
	var arguments$1 = arguments;
	for(var e=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++){ n[o-1]=arguments$1[o]; }this._eventListener[t].forEach((function(t){return t.apply(void 0,n.concat([e]))}));},e.on=function(t,e){return "function"==typeof e&&"string"==typeof t&&t in this._eventListener&&this._eventListener[t].push(e),this},e.off=function(t,e){var r=this._eventListener[t];if(r){var n=r.indexOf(e);~n&&r.splice(n,1);}return this},e.addSwatch=function(t){var e=this,r=this._parseLocalColor(t).values;if(r){var n=this._swatchColors,o=this._root,i=C.apply(void 0,r),a=l('<button type="button" style="color: '+i.toRGBA().toString(0)+'" aria-label="color swatch"/>');return o.swatches.appendChild(a),n.push({el:a,color:i}),this._eventBindings.push(u(a,"click",(function(){e.setHSVA.apply(e,i.toHSVA().concat([!0])),e._emit("swatchselect",i),e._emit("change",i);}))),!0}return !1},e.removeSwatch=function(t){var e=this._swatchColors[t];if(e){var r=e.el;return this._root.swatches.removeChild(r),this._swatchColors.splice(t,1),!0}return !1},e.applyColor=function(t){void 0===t&&(t=!1);var e=this._root,r=e.preview,n=e.button,o=this._color.toRGBA().toString(0);return r.lastColor.style.color=o,this.options.useAsButton||(n.style.color=o),n.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this},e.destroy=function(){var t=this;this._eventBindings.forEach((function(t){return s.apply(n,t)})),Object.keys(this._components).forEach((function(e){return t._components[e].destroy()}));},e.destroyAndRemove=function(){var t=this;this.destroy();var e=this._root,r=e.root,n=e.app;r.parentElement&&r.parentElement.removeChild(r),n.parentElement.removeChild(n),Object.keys(this).forEach((function(e){return t[e]=null}));},e.hide=function(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this},e.show=function(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this},e.isOpen=function(){return this._root.app.classList.contains("visible")},e.setHSVA=function(t,e,r,n,o){void 0===t&&(t=360),void 0===e&&(e=0),void 0===r&&(r=0),void 0===n&&(n=1),void 0===o&&(o=!1);var i=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||r<0||r>100||n<0||n>1){ return !1; }this._color=C(t,e,r,n);var a=this._components,c=a.hue,u=a.opacity,s=a.palette;return c.update(t/360),u.update(n),s.update(e/100,1-r/100),o||this.applyColor(),i&&this._updateOutput(),this._recalc=i,!0},e.setColor=function(t,e){if(void 0===e&&(e=!1),null===t){ return this._clearColor(e),!0; }var r=this._parseLocalColor(t),n=r.values,o=r.type;if(n){var i=o.toUpperCase(),a=this._root.interaction.options,c=a.find((function(t){return t.getAttribute("data-type")===i}));if(c&&!c.hidden){var u=a,s=Array.isArray(u),l=0;for(u=s?u:u[Symbol.iterator]();;){var f;if(s){if(l>=u.length){ break; }f=u[l++];}else{if((l=u.next()).done){ break; }f=l.value;}var p=f;p.classList[p===c?"add":"remove"]("active");}}return !!this.setHSVA.apply(this,n.concat([e]))&&this.setColorRepresentation(i)}return !1},e.setColorRepresentation=function(t){return t=t.toUpperCase(),!!this._root.interaction.options.find((function(e){return e.getAttribute("data-type").startsWith(t)&&!e.click()}))},e.getColorRepresentation=function(){return this._representation},e.getColor=function(){return this._color},e.getSelectedColor=function(){return this._lastColor},e.getRoot=function(){return this._root},e.disable=function(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this},e.enable=function(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this},t}();L.utils=n,L.libs={HSVaColor:C,Moveable:j,Nanopop:R,Selectable:P},L.create=function(t){return new L(t)},L.version=g.a;e.default=L;}]).default}));

	});

	var Pickr = unwrapExports(pickr_es5_min);
	var pickr_es5_min_1 = pickr_es5_min.Pickr;

	var copyTextToClipboard = function (input) {
		var element = document.createElement('textarea');
		var previouslyFocusedElement = document.activeElement;

		element.value = input;

		// Prevent keyboard from showing on mobile
		element.setAttribute('readonly', '');

		element.style.contain = 'strict';
		element.style.position = 'absolute';
		element.style.left = '-9999px';
		element.style.fontSize = '12pt'; // Prevent zooming on iOS

		var selection = document.getSelection();
		var originalRange = false;
		if (selection.rangeCount > 0) {
			originalRange = selection.getRangeAt(0);
		}

		document.body.append(element);
		element.select();

		// Explicit selection workaround for iOS
		element.selectionStart = 0;
		element.selectionEnd = input.length;

		var isSuccess = false;
		try {
			isSuccess = document.execCommand('copy');
		} catch (_) {}

		element.remove();

		if (originalRange) {
			selection.removeAllRanges();
			selection.addRange(originalRange);
		}

		// Get the focus back on the previously focused element, if any
		if (previouslyFocusedElement) {
			previouslyFocusedElement.focus();
		}

		return isSuccess;
	};

	var copyTextToClipboard_1 = copyTextToClipboard;
	// TODO: Remove this for the next major release
	var default_1 = copyTextToClipboard;
	copyTextToClipboard_1.default = default_1;

	var $ = document.querySelector.bind(document);
	var $$ = document.querySelectorAll.bind(document);

	/**
	 * Returns a random hexadecimal color code without the hash.
	 * @property getRandomHexColor {Function}
	 * @return 000000 {String}
	 */
	function getRandomHex() {
	    return ("#" + (Math.random().toString(16).slice(2, 8)));
	}

	/**
	 * @usage
	 * autoBind([
	 *  [ <NodeElement>, <'eventname'>, <context-method-handler>
	 * ], <context>)
	 */
	function autoBind(arr, ctx) {
	    var listen = function (node, ev, handler) { return node.addEventListener(ev, handler, false); };
	    arr.forEach(function (rule) {
	        ctx[rule[2]] = ctx[rule[2]].bind(ctx);
	        if (rule[0].length) {
	            return rule[0].forEach(function (ev) { return listen(ev, rule[1], ctx[rule[2]]); });
	        }
	        return listen(rule[0], rule[1], ctx[rule[2]]);
	    });
	}

	var internals = {
	    rs: function (string) { return string.replace(/\s/g,''); }
	};

	var Input = function Input(config) {
	    var input = this;

	    Object.assign(input, input.constructor.defaultProps);
	    Object.assign(input.config, input.constructor.defaultConfig, config);

	    input._bindEvents();
	};

	var prototypeAccessors = { element: { configurable: true },value: { configurable: true } };
	var staticAccessors = { defaultProps: { configurable: true },defaultConfig: { configurable: true } };

	staticAccessors.defaultProps.get = function () {
	    return  {
	        config: {},
	        latestValidValue: ''
	    }
	};

	staticAccessors.defaultConfig.get = function () {
	    return {
	        el: null,
	        validate: function () { return true; }
	    }
	};

	Input.prototype.enable = function enable () {
	    this.config.el.removeAttribute('disabled');
	    return this;
	};

	prototypeAccessors.element.get = function () {
	    return this.config.el;
	};

	prototypeAccessors.value.get = function () {
	    return this.element.value;
	};

	prototypeAccessors.value.set = function (value) {
	    this.config.element.value = value;
	};

	Input.prototype.setValue = function setValue (value) {
	    var input = this;

	    input.element.value = value;
	    input.latestValidValue = value;

	    return input;
	};

	/*
	shuffle(text, params = {}) {
	    let options = {
	        times: 2,
	        chars: '123456789',
	    };
	    Object.assign(options, params);

	    new CS(this.element, options).shuffle({ text });
	}
	*/

	Input.prototype._bindEvents = function _bindEvents () {
	    var input = this;

	    input.events = {};
	    input.events.isValid = new CustomEvent('isValid', {
	        bubbles: true,
	        testData: 100,
	        detail: {
	            el: input.element,
	            text: function () { return input.element.value; }
	        }
	    });

	    autoBind([
	        [ input.config.el, 'input', '_inputHandler' ]
	    ], input);

	    return input;
	};

	Input.prototype._inputHandler = function _inputHandler (ev) {
	    var input = this;

	    if (input.config.validate) {
	        if (input.config.validate(input.element.value)) {
	            input.element.setAttribute('aria-invalid', 'false');
	            if (internals.rs(input.latestValidValue) !== internals.rs(input.element.value)) {
	                input.latestValidValue = input.element.value;
	                input.element.dispatchEvent(input.events.isValid);
	            }
	            return input;
	        }

	        input.element.setAttribute('aria-invalid', 'true');

	        return input;
	    }

	    // if (this.el.validity.valid) {
	    // if (rs(this.latestValidValue) !== rs(this.el.value)) {
	    //     this.latestValidValue = this.el.value;
	    //     this.el.dispatchEvent(this.events.isValid);
	    // }
	    // }
	};

	Object.defineProperties( Input.prototype, prototypeAccessors );
	Object.defineProperties( Input, staticAccessors );

	var Toast = function Toast(config) {
	    var toast = this;

	    Object.assign(toast, toast.constructor.defaultProps);
	    Object.assign(toast.config, toast.constructor.defaultConfig, config);

	    toast.item = toast.config.el.querySelector('.toast');
	};

	var staticAccessors$1 = { defaultProps: { configurable: true },defaultConfig: { configurable: true } };

	staticAccessors$1.defaultProps.get = function () {
	    return  {
	        config: {},
	        item: null,
	        _timeout: null
	    }
	};

	staticAccessors$1.defaultConfig.get = function () {
	    return {
	        el: null,
	        duration: 2500
	    }
	};

	Toast.prototype.show = function show (text) {
	    var toast = this;

	    toast.item.innerHTML = text;

	    toast.config.el.classList.add('show');

	    if (toast._timeout) { clearTimeout(toast._timeout); }
	    toast._timeout = setTimeout(function () {
	        clearTimeout(toast._timeout);
	        toast.config.el.classList.remove('show');
	    }, toast.config.duration);

	    return toast;
	};

	Object.defineProperties( Toast, staticAccessors$1 );

	var characterShuffling = createCommonjsModule(function (module, exports) {
	/* character-shuffling
	 * https://github.com/noeldelgado/character-shuffling
	 * MIT License
	 */
	(function(root, factory) { {
	   module.exports = factory();
	 }
	}(commonjsGlobal, function factory() {  CharacterShuffling.version = '1.0.0';

	  /* @constructor CharacterShuffling [Function]
	   * @param element <required> [NodeElement] Node to shuffle its text contents.
	   * @param config <optional> [Object] Options to be merged with the defaults.
	   *   config.chars [String] The characters you want to be used for the random selection on every update.
	   *   config.times [Number] How many times should the letters be changed. (10)
	   *   config.text [String] Text to transition to. (this.element.textContent)
	   *   config.callback [Function] Function to be call once the shuffling is complete.
	   */
	  function CharacterShuffling(element, config) {
	    if (typeof element === 'undefined') {
	      throw new Error('CharacterShuffling [constructor]: "element" param is required');
	    }

	    this.element = element;

	    var defaults = {
	      chars : "abcdefghijklmnopqrstuvwxyz" +
	        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
	        "0123456789" +
	        ",.?/\\(^)![]{}*&^%$#'\"",
	      times : 10,
	      text : this.element.textContent,
	      callback : null
	    };
	    this.options = _merge(defaults, config);
	  }

	  /* Starts the shuffle animation.
	   * @method shuffle <public> [Function]
	   * @argument options <optional> [Object] (same options as constructor.config)
	   */
	  CharacterShuffling.prototype.shuffle = function shuffle(options) {
	    if (options) {
	      _merge(this.options, options);
	    }

	    this._start = -this.get('times');
	    this._charsLen = this.get('chars').length;
	    this._textLen = this.get('text').length;

	    requestAnimationFrame(this._shuffle.bind(this));
	    return this;
	  };

	  /* Returns the current value of an option if matched with the argument passed.
	   * @method get <public> [Function]
	   * @return this.options[propertyName] || undefined
	   */
	  CharacterShuffling.prototype.get = function get(propertyName) {
	    return this.options[propertyName];
	  };

	  CharacterShuffling.prototype.set = function set(propertyName, value) {
	    this.options[propertyName] = value;
	  };

	  /* Updates element.textContent value with new a random generated string.
	   * @method _shuffle <private> [Function]
	   */
	  CharacterShuffling.prototype._shuffle = function _shuffle() {
	    var i, arr = this.get('text').split('');

	    if (this._start > this._textLen) {
	      if (typeof this.get('callback') === 'function') {
	        this.get('callback').call(this);
	      }
	      return;
	    }

	    for (i = Math.max(this._start,0); i < this._textLen; i++) {
	      if (i < (this._start + this.get('times'))) {
	        if (arr[i] !== ' ') {
	          arr[i] = this.get('chars')[Math.floor(Math.random() * this._charsLen)];
	        }
	        continue;
	      }
	      arr[i] = '';
	    }

	    this._start++;
	      this.element.value = arr.join('');
	    // this.element.textContent = arr.join("");
	    requestAnimationFrame(this._shuffle.bind(this));
	  };

	  function _merge(a, b) {
	    for (var propertyName in b) {
	      a[propertyName] = b[propertyName];
	    }
	    return a;
	  }

	  return CharacterShuffling;
	}));
	});

	window.Color = color;

	var internals$1 = {};
	/**
	 * Checks if a string is a valid color format for `color` library
	 * @param {string} color
	 * @return {boolean}
	 */
	internals$1.validateColor = function (color$1) {
	    try {
	        color(color$1);
	        return true;
	    }
	    catch (err) {
	        return false;
	    }
	};

	/**
	 * Application main handler
	 */
	var App = function App(config) {
	    var app = this;

	    Object.assign(app, app.constructor.initialtProps);
	    Object.assign(app.config, app.constructor.defaultConfig, config);

	    app.ui = {
	        randomBtn: $('[data-random]'),
	        copyToClipboardButtons: $$('[data-js-copy-to-clipboard-btn]'),
	        colorPickerButton: $('[data-js-colorpicker-btn]'),
	        fcmInput: $('[data-js-fecolormatrix-input]'),

	        hexInput: new Input({
	            el: $('[data-js-hex-input]'),
	            validate: internals$1.validateColor
	        }),
	        rgbInput: new Input({
	            el: $('[data-js-rgb-input]'),
	            validate: internals$1.validateColor
	        }),
	        hslInput: new Input({
	            el: $('[data-js-hsl-input]'),
	            validate: internals$1.validateColor
	        }),
	        hwbInput: new Input({
	            el: $('[data-js-hwb-input]'),
	            validate: internals$1.validateColor
	        }),

	        toast: new Toast({
	            el: $('.toast-wrapper')
	        })
	    };

	    app.pickr = new Pickr({
	        el: app.ui.colorPickerButton,
	        useAsButton: true,
	        default: app.config.color,
	        theme: 'nano',
	        position: 'right',
	        components: {
	            hue: true
	        }
	    });
	};

	var staticAccessors$2 = { initialtProps: { configurable: true },defaultConfig: { configurable: true } };

	/**
	 * Boot the app:
	 *  - enable inputs and buttons
	 *  - bind events and update the history entry
	 * @public
	 * @return {App}
	 */
	staticAccessors$2.initialtProps.get = function () {
	    return  {
	        config: {},
	        /**
	         * Color’s instance reference
	         * @typeof {Color}
	         */
	        color: null,
	        /**
	         * Pickr’s instance reference
	         * @typeof {Pickr}
	         */
	        pickr: null,
	        /**
	         * Node elements collection reference
	         */
	        ui: {}
	    }
	};

	/**
	 * @return {Object} default configuraton values
	 */
	staticAccessors$2.defaultConfig.get = function () {
	    return {
	        color: '#FFFFFF',
	        title: document.title
	    }
	};

	App.prototype.run = function run () {
	    var app = this;
	    var color = app.config.color;

	    app.ui.hexInput.enable();
	    app.ui.rgbInput.enable();
	    app.ui.hslInput.enable();
	    app.ui.hwbInput.enable();
	    app.ui.colorPickerButton.removeAttribute('disabled');
	    app.ui.copyToClipboardButtons.forEach(function (b) { return b.removeAttribute('disabled'); });

	    app._bindEvents()._updateUI(color, {
	        preventHistoryUpdate: true
	    });
	    history.replaceState({ color: color }, null, ("/" + color));

	    return app;
	};

	/**
	 * Register event listeners
	 * @private
	 * @return {App}
	 */
	App.prototype._bindEvents = function _bindEvents () {
	    var app = this;

	    autoBind([
	        [ app.ui.randomBtn, 'click', '_randomClickHandler' ],
	        [ app.ui.copyToClipboardButtons, 'click', '_copyColorToClipboardHandler' ],
	        [ app.ui.hexInput.element, 'isValid', '_isInputValidHandler' ],
	        [ app.ui.rgbInput.element, 'isValid', '_isInputValidHandler' ],
	        [ app.ui.hslInput.element, 'isValid', '_isInputValidHandler' ],
	        [ app.ui.hwbInput.element, 'isValid', '_isInputValidHandler' ],
	        [ window, 'popstate', '_popStateHandler' ]
	    ], app);

	    app.pickr.on('changestop', function (instance) {
	        app._updateUI(instance.getColor().toHEXA().toString());
	    });

	    return app;
	};

	/**
	 * Handles copyToClipboardButtons’ click event
	 * @private
	 * @return undefined
	 */
	App.prototype._copyColorToClipboardHandler = function _copyColorToClipboardHandler (ev) {
	    var ref = ev.currentTarget.dataset.copy.split(':');
	        var property = ref[0];
	        var selector = ref[1];
	    var value = $(selector)[property];

	    if (copyTextToClipboard_1(value)) {
	        this.ui.toast.show(("<b>" + value + "</b> copied"));
	    }
	};

	/**
	 * Handles app.ui.randomBtn’s click event
	 * @private
	 * @return undefined
	 */
	App.prototype._randomClickHandler = function _randomClickHandler () {
	    this._updateUI(getRandomHex());
	};

	/**
	 * Handles Input’s isValid custom event
	 * @private
	 * @return undefined
	 */
	App.prototype._isInputValidHandler = function _isInputValidHandler (ev) {
	    this._updateUI(ev.detail.text(), {
	        preventElementUpdate: ev.target
	    });
	};

	/**
	 * Handles popstate event
	 * @private
	 * @return undefined
	 */
	App.prototype._popStateHandler = function _popStateHandler (ev) {
	    if (!ev.state || !ev.state.color) { return; }

	    this._updateUI(ev.state.color, {
	        preventHistoryUpdate: true
	    });
	};

	/**
	 * Updates the UI with passed color param.
	 * Sets new app.color instance with to get color space conversions
	 * Creates a new history state if
	 * @param {string} [color='#000']
	 * @param {Object} [params={}]
	 * @property {boolean=} preventHistoryUpdate
	 * @property {HTMLInputElement=} preventElementUpdate do not update this element
	 * @private
	 */
	App.prototype._updateUI = function _updateUI (color$1, params) {
	        if ( color$1 === void 0 ) { color$1 = '#000'; }
	        if ( params === void 0 ) { params = {}; }

	    var app = this;
	    var preventHistoryUpdate = params.preventHistoryUpdate;
	        var preventElementUpdate = params.preventElementUpdate;

	    app.color = color(color$1);

	    var hex = app.color.hex();
	    var rgb = app.color.rgb().string();
	    var hsl = app.color.hsl().round().string();
	    var hwb = app.color.hwb().round().string();
	    var ref = app.color.unitArray();
	        var r = ref[0];
	        var g = ref[1];
	        var b = ref[2];

	    var isLight = app.color.isLight();
	    var textColor = app.color.mix(color(isLight ? '#000' : '#fff'), 0.8);
	    var borderColor = app.color.mix(color(isLight ? '#000' : '#fff'), 0.2);

	    app.pickr.setColor(hex);

	    if (preventElementUpdate !== app.ui.hexInput.element) {
	        app.ui.hexInput.setValue(hex);
	    }

	    if (preventElementUpdate !== app.ui.rgbInput.element) {
	        app.ui.rgbInput.setValue(rgb);
	    }

	    if (preventElementUpdate !== app.ui.hslInput.element) {
	        app.ui.hslInput.setValue(hsl);
	    }

	    if (preventElementUpdate !== app.ui.hwbInput.element) {
	        app.ui.hwbInput.setValue(hwb);
	    }

	    app.ui.fcmInput.value = (r.toFixed(2)) + "\t0\t0\t0\t0\n0\t" + (g.toFixed(2)) + "\t0\t0\t0\n0\t0\t" + (b.toFixed(2)) + "\t0\t0\n0\t0\t0\t1\t0";

	    document.documentElement.style.setProperty('--cc-main-color', hsl);
	    document.documentElement.style.setProperty('--cc-text-color', textColor.toString());
	    document.documentElement.style.setProperty('--cc-border-color', borderColor.toString());

	    if (!preventHistoryUpdate) {
	        history.pushState({ color: hex }, null, ("/" + hex));
	        document.title = (app.config.title) + " - " + hex;
	    }

	    return app;
	};

	Object.defineProperties( App, staticAccessors$2 );

	/**



	*/

	var data = { color: document.location.hash };

	try {
	    color(data.color);
	}
	catch (err) {
	    data.color = '#FFFFFF';
	}

	var app = new App(data);
	app.run();

	// window.app = app;

}());