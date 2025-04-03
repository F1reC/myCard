import { ImageResponse } from "next/og"

export const alt = "我的电子名片"
export const size = {
  width: 1200,
  height: 630,
}

// 添加强制静态生成的配置
export const dynamic = "force-static"

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 20 }}>热爱生活与科技</div>
      <div style={{ fontSize: 36, color: "#666" }}>我的个人电子名片</div>
    </div>,
    {
      ...size,
    },
  )
}

