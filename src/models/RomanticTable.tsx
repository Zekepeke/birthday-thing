import React from "react";

type RomanticTableProps = {
  /** Optional className for responsive sizing / rounding */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
  /** Override iframe title for accessibility */
  title?: string;
};

export default function RomanticTable({
  className,
  style,
  title = "Romantic Diner Table",
}: RomanticTableProps) {
  return (
    <div className={className} style={{ width: "100%", ...style }}>
      <div className="sketchfab-embed-wrapper" style={{ width: "100%" }}>
        <iframe
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/dfe49bf5f1eb409f8ac85707a980ce8b/embed?preload=1&transparent=1"
          style={{
            width: "100%",
            height: "100%",
            minHeight: 500,
            border: 0,
            borderRadius: 16,
          }}
        />
      </div>
    </div>
  );
}