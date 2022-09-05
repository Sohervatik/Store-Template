export default {
  //SCENE FACING: "NORTH"/"EAST"/"SOUTH"/"WEST"
  sceneOrientation: 'NORTH',
  logo: {
    bottom: {
      //image should be 512px square
      imgSrc: 'images/logo.png',
      position: new Vector3(6.96862, 5.72577, 7.34845)
    },
    top: {
      name: 'Eyes of\nFASHION',
      fontSize: 6,
      color: new Color3(0.1, 0.1, 0.1),
      position: new Vector3(0, 5.84663, 6.39477)
    }
  },
  socialMedia: [
    {
      name: 'HOMEPAGE',
      model: 'models/social_media/homepage.glb',
      link: 'https://www.EyesofFashion.art',
      position: new Vector3(1.5, 1.3, -5.35)
    },
    {
      name: 'DISCORD',
      model: 'models/social_media/discord.glb',
      link: 'https://www.discord.gg/EyesofFashion',
      position: new Vector3(0.5, 1.3, -5.35)
    },
    {
      name: 'TWITTER',
      model: 'models/social_media/twitter.glb',
      link: 'https://www.twitter.com/EyesoFashionNFT',
      position: new Vector3(-0.5, 1.3, -5.35)
    },
    {
      name: 'Instegram',
      model: 'models/social_media/telegram.glb',
      link: 'https://www.instagram.com/eyesofashionnft/',
      position: new Vector3(-1.5, 1.3, -5.35)
    }
  ],
  videoScreen: {
    src: 'https://vimeo.com/746578566',
    width: 1280,
    height: 720
  },
  wearable: [
    {
      name: 'L8LIFE Black Hoodie',
      model: 'models/wearables/hoodie_female_black.glb',
      link: 'https://market.decentraland.org/contracts/0x6a6165ac5a213c1d3199e351828f739e09fb48b7/items/2',
      position: new Vector3(4.2, -0.1, 5.1),
      rotation: Quaternion.Euler(0, 0, 0)
    },
    {
      name: 'L8LIFE White Hoodie',
      model: 'models/wearables/hoodie_female_WHITE.glb',
      link: 'https://market.decentraland.org/contracts/0x6a6165ac5a213c1d3199e351828f739e09fb48b7/items/1',
      position: new Vector3(-4.2, 0, 5.1),
      rotation: Quaternion.Euler(0, 0, 0)
    },
    {
      name: 'L8LIFE White T-Shirt',
      model: 'models/wearables/3.glb',
      link: 'https://market.decentraland.org/contracts/0x6a6165ac5a213c1d3199e351828f739e09fb48b7/items/0',
      position: new Vector3(5.1, -1, -3.3),
      rotation: Quaternion.Euler(0, -90, 0)
    },
    {
      name: 'Colorful Strapless Heart Dress',
      model: 'models/wearables/dress_texturized_2.glb',
      link: 'https://market.decentraland.org/contracts/0xc047535f6976eaba80a9c6f04af74f66622e55eb/items/1',
      position: new Vector3(-5.1, -0.1, -3.3),
      rotation: Quaternion.Euler(0, 90, 0)
    },
    {
      name: 'Red Eye Dress',
      model: 'models/wearables/dress_tight.glb',
      link: 'https://market.decentraland.org/contracts/0xc047535f6976eaba80a9c6f04af74f66622e55eb/items/8',
      position: new Vector3(0, -0.1, 0.7),
      rotation: Quaternion.Euler(0, 0, 0)
    },
    {
      name: 'Neon Pink Eye of Fashion',
      model: 'models/wearables/neon_pink_eye.glb',
      link: 'https://market.decentraland.org/contracts/0xc047535f6976eaba80a9c6f04af74f66622e55eb/items/3',
      position: new Vector3(1, 0.7, -0.7),
      rotation: Quaternion.Euler(0, 45, 0)
    },
    {
      name: 'Neon Aqua Eye of Fashion',
      model: 'models/wearables/neon_aqua_eye.glb',
      link: 'https://market.decentraland.org/contracts/0xc047535f6976eaba80a9c6f04af74f66622e55eb/items/2',
      position: new Vector3(-1, 0.7, -0.7),
      rotation: Quaternion.Euler(0, -45, 0)
    }
  ]
}
