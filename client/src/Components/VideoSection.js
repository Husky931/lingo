import React from "react";
import videoPreview from "../assets/video_preview.mp4";

export default function VideoSection() {
  return (
    <div className="mid-section-video-container width80 margin-top-custom">
      <div className="mid-section-video-text-box">
        <div
          className="video-container width50 lg-setup cyberPunkShape"
          data-augmented-ui="b-clip-x br-clip tl-clip-x both"
        >
          <video className="video box-shadow-1" muted playsInline autoPlay loop>
            <source src={videoPreview} type="video/mp4" />
            Sorry, your browser doesn't support this videos.
          </video>
        </div>
        <div className="text-container mt-10-m width50 lg-setup">
          <h2 className="text-center video-section-title">
            No-code is best code
          </h2>
          <p className="text-color-main text-center bold500 margin-top10">
            Lingo3D MindMap is a low-code visual scripting tool that enables
            complex game logic to be easily expressed through drag-and-drop
            editing. MindMap covers 100% of Lingo3D’s API surface, which makes
            it possible to construct full-blown AAA experiences through MindMap
            alone.
          </p>
        </div>
      </div>

      <div className="mid-section-video-text-box">
        <div className="text-container mt-10-m width50 lg-setup element-first">
          <h2 className="text-center video-section-title">
            Create stunning 3D content
          </h2>
          <p className="text-color-main text-center bold500 margin-top10">
            Lingo3D comes with its own modeling tools and animation editor, as
            well as a rich library of 3d models and materials. Developers do not
            need to learn complex modelling tools. Lingo3D is more than capable
            to help you create dazzling 3d scenes, all within the engine itself.
          </p>
        </div>
        <div
          className="video-container width50 lg-setup element-second cyberPunkShape-Height"
          data-augmented-ui="all-hex-alt"
        >
          <video className="video box-shadow-1" muted playsInline autoPlay loop>
            <source src={videoPreview} type="video/mp4" />
            Sorry, your browser doesn't support this videos.
          </video>
        </div>
      </div>

      <div className="mid-section-video-text-box">
        <div
          className="video-container width50 lg-setup cyberPunkShape"
          data-augmented-ui="tl-2-clip-y br-2-rect-xy tr-2-clip-y"
        >
          <video className="video box-shadow-1" muted playsInline autoPlay loop>
            <source src={videoPreview} type="video/mp4" />
            Sorry, your browser doesn't support this videos.
          </video>
        </div>
        <div className="text-container mt-10-m width50 lg-setup">
          <h2 className="text-center video-section-title">
            Instantly share your creation
          </h2>
          <p className="text-color-main text-center bold500 margin-top10">
            Lingo3D can generate a live version of your game that can be shared
            through a simple URL or QR code. Build, Share, Play, all in an
            instant.
          </p>
        </div>
      </div>

      <div className="mid-section-video-text-box">
        <div className="text-container mt-10-m width50 lg-setup element-first">
          <h2 className="text-center video-section-title">
            AAA graphics that runs in your browser
          </h2>
          <p className="text-color-main text-center bold500 margin-top10">
            Lingo3D supports Physically Based Rendering, subsurface scattering,
            per-object motion blur, ambient occlusion, and many more visual
            effects that are commonly seen in big budget productions.
          </p>
        </div>
        <div
          className="video-container width50 lg-setup element-second cyberPunkShape-Height"
          data-augmented-ui="all-hexangle-up"
        >
          <video className="video box-shadow-1" muted playsInline autoPlay loop>
            <source src={videoPreview} type="video/mp4" />
            Sorry, your browser doesn't support this videos.
          </video>
        </div>
      </div>
    </div>
  );
}
