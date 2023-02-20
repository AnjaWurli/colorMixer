Vue.createApp({
  data() {
    return {
      r: 255,
      g: 150,
      b: 180,
    };
  },
  computed: {
    rgbToHex() {
      return "#" + this.hexa(this.r) + this.hexa(this.g) + this.hexa(this.b);
    },
  },
  methods: {
    hexa(n) {
      return Number(n).toString(16);
    },
    async randomColor() {
      const response = await fetch("https://dummy-apis.netlify.app/api/color");
      const data = await response.json();

      this.r = data.rgb.r;
      this.g = data.rgb.g;
      this.b = data.rgb.b;
    },
  },
}).mount("#app");
