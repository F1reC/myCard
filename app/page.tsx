"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/hooks/use-toast"

function TypingEffect() {
  const greetings = ["你好", "Hello", "Bonjour", "Hola", "こんにちは", "안녕하세요"]
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % greetings.length
      const fullText = greetings[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      if (!isDeleting && text === fullText) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), 1500)
        setTypingSpeed(100)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(150)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, greetings])

  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[4rem] md:min-h-[5rem]">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  )
}

export default function Home() {
  const { toast } = useToast();
  
  const copyEmail = () => {
    const email = "1489472989@qq.com";
    
    // 使用 clipboard API
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          toast({
            variant: "success",
            description: `已复制邮箱 ${email}`,
            duration: 2000,
          });
          console.log("复制成功:", email);
        })
        .catch(err => {
          console.error('复制失败:', err);
          toast({
            variant: "destructive",
            description: "复制失败，请手动复制",
            duration: 2000,
          });
        });
    } else {
      // 备用方法
      try {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          toast({
            variant: "success",
            description: `已复制邮箱 ${email}`,
            duration: 2000,
          });
        } else {
          toast({
            variant: "destructive",
            description: "复制失败，请手动复制",
            duration: 2000,
          });
        }
      } catch (err) {
        console.error('复制失败:', err);
        toast({
          variant: "destructive",
          description: "复制失败，请手动复制",
          duration: 2000,
        });
      }
    }
  };
  
  return (
    <main className="min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/profile.jpeg" alt="Profile" width={50} height={50} className="rounded-full object-cover" />
        </div>
      </header>

      <section className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <TypingEffect />
        <p className="text-lg max-w-2xl mb-8">我是韩熔，热爱生活与科技，喜欢探索新事物。期待与您成为朋友 👋</p>
        <Link href="https://f1rec.notion.site/7da28ceb77394841b560e756ce0ee87f" className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2">
          <span>我的作品</span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="https://github.com/F1reC"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center h-12 w-12"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">Github</span>
          </Link>
          <Popover>
            <PopoverTrigger>
              <div className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center h-12 w-12">
                <Image 
                  src="/icons8-微信.svg" 
                  alt="微信" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                />
                <span className="sr-only">微信</span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex flex-col items-center">
                <Image 
                  src="/image.png" 
                  alt="微信二维码" 
                  width={220} 
                  height={220} 
                  className="rounded-lg" 
                />
                <p className="mt-2 text-sm text-center">长按图片添加微信</p>
              </div>
            </PopoverContent>
          </Popover>
          <Link
            href="https://neurospark.tech/"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center h-12 w-12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden flex items-center justify-center">
              <Image 
                src="/神经火花 黑色LOGO.png" 
                alt="神经火花" 
                width={24} 
                height={24}
                className="object-contain"
              />
            </div>
            <span className="sr-only">神经火花</span>
          </Link>
          <div
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center h-12 w-12"
            onClick={copyEmail}
          >
            <Image 
              src="/icons8-邮箱.svg" 
              alt="邮箱" 
              width={24} 
              height={24} 
            />
            <span className="sr-only">邮箱</span>
          </div>
        </div>
      </section>

      <section id="work" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Popover>
            <PopoverTrigger>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-[#07C160]/90 backdrop-blur-xl backdrop-saturate-150 shadow-lg h-60 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
                  <Image 
                    src="/wechat-official.svg" 
                    alt="公众号" 
                    width={64} 
                    height={64}
                    className="text-white mb-4 relative z-10"
                  />
                  <h3 className="text-white font-medium text-xl relative z-10">公众号</h3>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex flex-col items-center">
                <Image 
                  src="/wechat-official-qr.png" 
                  alt="公众号二维码" 
                  width={270} 
                  height={270} 
                  className="rounded-lg" 
                />
                <p className="mt-2 text-sm text-center">长按图片查看公众号</p>
              </div>
            </PopoverContent>
          </Popover>
          <Link href="https://www.xiaohongshu.com/user/profile/644e0f6f000000000f004b36" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-[#FE2C55]/90 backdrop-blur-xl backdrop-saturate-150 shadow-lg h-60 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
              <Image 
                src="/XiaohongshuLOGO.svg" 
                alt="小红书" 
                width={64} 
                height={64}
                className="mb-4 relative z-10"
              />
              <h3 className="text-white font-medium text-xl relative z-10">小红书</h3>
            </div>
          </Link>
          <Link href="https://space.bilibili.com/13006981/channel/seriesdetail?sid=4419183&ctype=0" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-[#00A1D6]/90 backdrop-blur-xl backdrop-saturate-150 shadow-lg h-60 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-white mb-4 relative z-10" fill="currentColor">
                <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" />
              </svg>
              <h3 className="text-white font-medium text-xl relative z-10">bilibili</h3>
            </div>
          </Link>
          <Link href="https://f1rec.notion.site/" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-[#000000]/90 backdrop-blur-xl backdrop-saturate-150 shadow-lg h-60 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-white mb-4 relative z-10" fill="currentColor">
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
              </svg>
              <h3 className="text-white font-medium text-xl relative z-10">notion 个人站</h3>
            </div>
          </Link>
        </div>
      </section>

       {/* <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">关于我</h2>
          <div className="prose">
            <p>
              您好，我是一名充满热情的设计师和创作者。我喜欢探索新技术和创意表达方式，致力于创造美观且实用的设计作品。
            </p>
            <p>在我的职业生涯中，我专注于用户体验设计和视觉传达，希望通过我的作品为用户带来愉悦的体验。</p>
            <p>
              除了工作，我热爱旅行、摄影和探索自然风光。这些经历不仅丰富了我的生活，也为我的创作提供了源源不断的灵感。
            </p>
          </div>
        </div>
      </section>  */}

      <footer className="container mx-auto px-4 py-6 flex justify-center items-center text-sm text-gray-500">
        <p>Made with ❤️ © 2025</p>
      </footer>
    </main>
  )
}

