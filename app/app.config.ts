export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'zinc'
    },
    prose: {
      h1: {
        slots: {
          base: 'font-mono '
        }
      }
    }
  }
})
