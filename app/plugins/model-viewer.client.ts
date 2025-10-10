import '@google/model-viewer'; 

export default defineNuxtPlugin(() => {
  if (process.client) {
    console.log('Model Viewer Web Component Registered');
  }
});