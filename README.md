<img width="1708" alt="image" src="https://github.com/user-attachments/assets/18f71764-96f8-423b-8537-b73032ca3685" /># 个人电子名片

这是一个使用Next.js和Tailwind CSS构建的个人电子名片网站，展示个人信息和社交媒体链接。

## 预览

https://icard.edgeone.app/

<img width="1708" alt="image" src="https://github.com/user-attachments/assets/64396040-8a19-499f-9f68-aa3138a13d88" />



## 功能特点

- 响应式设计，适配各种设备尺寸
- 优雅的打字效果动画
- 社交媒体链接（GitHub、微信、小红书、bilibili等）
- 弹出式二维码展示
- 干净简洁的UI设计

## 技术栈

- Next.js 15
- React 18
- Tailwind CSS
- Radix UI组件库
- Vercel/Cloudflare Pages部署

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/F1reC/myCard.git
cd myCard
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 http://localhost:3000

## 部署

项目配置为静态导出，可以部署到任何静态网站托管服务:

```bash
npm run build
```

构建后的文件位于`out`目录中。

## 自定义

- 修改`app/page.tsx`中的个人信息
- 在`public`目录中替换图片和图标
- 调整`tailwind.config.ts`中的主题颜色

## 许可证

MIT 
