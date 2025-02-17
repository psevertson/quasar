
import spaEntries from './spa.js'

/* def: width, height, pixel-ratio */
function getAppleLaunch (def) {
  const media = `(device-width: ${ def[ 0 ] / def[ 2 ] }px) and (device-height: ${ def[ 1 ] / def[ 2 ] }px) and (-webkit-device-pixel-ratio: ${ def[ 2 ] })`

  return {
    generator: 'splashscreen',
    name: 'apple-launch-{size}.png',
    folder: 'public/icons',
    sizes: [
      [ def[ 0 ], def[ 1 ] ]
    ],
    tag: `${ def[ 3 ] }\n<link rel="apple-touch-startup-image" media="${ media }" href="icons/{name}">`
  }
}

export default [
  ...spaEntries,

  {
    generator: 'png',
    name: 'apple-icon-{size}x{size}.png',
    folder: 'public/icons',
    background: true,
    sizes: [ 120, 152, 167, 180 ]
    // tag is auto-injected by @quasar/app
    // <link rel="apple-touch-icon" sizes="{size}x{size}" href="icons/{name}">
  },

  {
    generator: 'svg',
    name: 'safari-pinned-tab.svg',
    folder: 'public/icons',
    // tag is auto-injected by @quasar/app
    // <link rel="mask-icon" color="#..." href="icons/{name}">
  },

  {
    generator: 'png',
    name: 'ms-icon-{size}x{size}.png',
    folder: 'public/icons',
    sizes: [ 144 ],
    // tag is auto-injected by @quasar/app
    // <meta name="msapplication-TileImage" content="icons/{name}">
  },

  {
    generator: 'png',
    name: 'icon-{size}x{size}.png',
    folder: 'public/icons',
    sizes: [ 128, 192, 256, 384, 512 ]
    // manifest icons
  },

  ...[
    [ 1290, 2796, 3, '<!-- iPhone 14 Pro, 14 Pro Max -->' ],
    [ 1179, 2556, 3, '<!-- iPhone 14, 14 Pro -->' ],
    [ 1284, 2778, 3, '<!-- iPhone 12 Pro Max, 13 Pro Max -->' ],
    [ 1170, 2532, 3, '<!-- iPhone 12, 12 Pro, 13, 13 Pro -->' ],
    [ 1080, 2340, 3, '<!-- iPhone 13 Mini -->' ],
    [ 828, 1792, 2, '<!-- iPhone XR, 11 -->' ],
    [ 1125, 2436, 3, '<!-- iPhone X, XS, 12 mini, 11 Pro -->' ],
    [ 1242, 2688, 3, '<!-- iPhone XS Max, 11 Pro Max -->' ],
    [ 750, 1334, 2, '<!-- iPhone 8, 7, 6s, 6 -->' ],
    [ 1242, 2208, 3, '<!-- iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus -->' ],
    [ 1620, 2160, 2, '<!-- iPad 10.2" -->' ],
    [ 1536, 2048, 2, '<!-- iPad Mini, Air, 9.7" -->' ],
    [ 1668, 2224, 2, '<!-- iPad Pro 10.5" -->' ],
    [ 1668, 2388, 2, '<!-- iPad Pro 11" -->' ],
    [ 2048, 2732, 2, '<!-- iPad Pro 12.9" -->' ]
  ].map(getAppleLaunch)
]
