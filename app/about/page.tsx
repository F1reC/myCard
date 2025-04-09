"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span>返回首页</span>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="relative w-32 h-32 mb-8 group">
            <Image 
              src="/profile.jpeg" 
              alt="Profile" 
              fill
              className="rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-6 text-gray-900">韩熔</h1>
          
          <div className="prose text-center max-w-2xl">
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
             开发者/产品经理，梦想是创业成功和拍电影，对 AI 引领的新时代充满期待
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
             喜欢电影、音乐、摄影、科技、旅行、写作、聊天
            </p>
            <p className="mb-8 text-gray-700 leading-relaxed text-lg">
            好的产品处于科技与人文的交叉点
            </p>
            
          </div>
          
          <div className="w-full mt-12 space-y-8">

          <div className="bg-gray-50/70 p-8 rounded-xl shadow-md backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">教育经历</h2>
              <div className="border-b border-gray-200 w-full mb-6"></div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">新加坡国立大学</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">软件工程专业，硕士在读</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">北京交通大学</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">软件工程专业，学士学位</p>
                </div>
              </div>
            </div>


            <div className="bg-gray-50/70 p-8 rounded-xl shadow-md backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">我的作品</h2>
              <div className="border-b border-gray-200 w-full mb-6"></div>
              <div className="space-y-8">
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">个人电子名片网站</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">一个美观直接的的个人电子名片网站，展示个人信息和社交媒体链接。</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">盖洛普分析网站</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">提供盖洛普个性测评，结合科学分析，精准定位核心能力，并推荐适合的成长资源。</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">Mood Palatte 情绪调色盘</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">结合AI技术与色彩心理学原理，帮助缓解压力、调节情绪，让每一天都充满积极能量。</p>
                </div>
              </div>
            </div>
            
            
            
            <div className="bg-gray-50/70 p-8 rounded-xl shadow-md backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">工作经历</h2>
              <div className="border-b border-gray-200 w-full mb-6"></div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">快手 | 2025.03-至今</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">AI 产品经理实习生，参与企业内部 AI 工具产品设计</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">神经火花 | 2023.07-至今</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">CEO，Mood Palatte 产品设计与开发</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">中国中车 | 2023.05-2024.3</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">算法实习生，参与时序预测算法的调优和模型量化</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50/70 p-8 rounded-xl shadow-md backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">获奖经历</h2>
              <div className="border-b border-gray-200 w-full mb-6"></div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">2024年</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">AdventureX Hackathon - 线性资本赛道获得第一名，Moonshot AI   与 AlLeap Studio 赛道获得第二名，AWS 赛道获得第三名</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">2023年</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">大学生创新创业大赛 - 国家级</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2 text-gray-800">2020年</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">TCL 科创节 - 全国十强</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}