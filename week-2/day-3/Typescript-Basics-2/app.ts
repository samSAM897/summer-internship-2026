// document
//   .querySelector("#img-1")
//   .animate(
//     [
//       { transform: "translateY(-4em)" },
//       { transform: "rotateX(270deg)" },
//       { transform: "rotateX(-270deg)" },
//     ],
//     { duration: 2000, iterations: Infinity, direction: "alternate" }
//   );
const firstImage = document.querySelector("#img-1");

const keyFramesImage1: Keyframe[] = [
  { transform: "translateY(-4em)" },
  { transform: "rotateX(270deg)" },
  { transform: "rotateX(-270deg)" },
];

const optionsImage1: KeyframeAnimationOptions = {
  duration: 2000,
  iterations: Infinity,
  direction: "alternate",
};

const animateImages = async (): Promise<void> => {
  const img1Anim: Animation = firstImage?.animate(
    keyFramesImage1,
    optionsImage1
  );
};

animateImages();
