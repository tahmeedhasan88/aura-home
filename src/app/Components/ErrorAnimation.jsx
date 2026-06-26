"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";



export default function ErrorAnimation() {
  return (
    <DotLottieReact
      src="/animations/Error404.lottie"
      autoplay
      loop
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "auto",
      }}
    />
  );
}