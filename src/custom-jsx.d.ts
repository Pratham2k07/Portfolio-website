// Suppress JSX intrinsic element errors for three.js elements
import "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      ambientLight: any;
      spotLight: any;
      directionalLight: any;
    }
  }
}
