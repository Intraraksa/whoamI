'use client'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { WorkExperienceCard } from '@/components/ui/WorkExperienceCard'
import { Chat } from '@/components/ui/Chat'

const workExperience = [
  {
    title: "Senior AI Engineer",
    description: "Invitrace Co.,Ltd , Thailand | Feb 2024 - March 2025",
    details: [
      "Managed cross-functional data science projects, increasing project completion efficiency by 15% and achieving 95% on-time delivery of organizational goals.",
      "Leverage Large Language model  to build an application that extracts information from medical interviews and fills forms automatically.",
      "Developed rule-based algorithms to pre-screen for any disease.",
      "Create logical for built vaccine recommendation for G5 hospital group in Thailand",
      "Architected advanced generative AI workflow for systematic extraction and analysis of cutting-edge research papers from PubMed and Arxiv, enabling comprehensive scientific intelligence gathering",
      "Architected and implemented an LLM RAG system for Medical advisers that have been integrated into the Hospital system.",
      "Led a 3-person data science team in developing innovative machine learning tools for LLM integration, resulting in streamlined data processing for hospital systems."
    ]
  },
  {
    title: "Senior Data Scientist",
    description: "i-APC Consultant CO.,LTD  , Thailand | Oct  2023 - Feb 2024",
    details: [
      "Lead research team for apply Bounded derivative networks for software solution",
      "Developing machine learning solutions to optimize processes and improve outcomes in the chemical industry"
    ]
  },
  {
    title: "AI engineer / Data Scientist",
    description: "Ibotnoi Co,.Ltd  , Thailand | Feb  2022 - July 2023",
    details: [
      "Co-lead a team of data scientists and engineers in designing and implementing innovative data-driven solutions for a metaverse project, utilizing smartcard identification and face recognition with DLib and OpenCV",
      "Develop machine learning pipeline in AWS platform to implemented in chemical factory. driving process optimization and cost reduction.",
      "Designed and implemented a real-time object recognition system for video streams using TensorFlow and OpenCV. Deployed on Nvidia Jetson",
      "Orchestrated the deployment of machine learning for time series forecasting and prediction systems in the PTTGC project, resulting in improved operational efficiency and revenue growth.",
      "Built a reception system with speech recognition and company's chatbot dialogue, deployed at a hospital center.",
      "Leveraged LLM langchain for chatbot answer promotion in collaboration with KBANK, driving customer engagement and satisfaction.",
      "Conversation Chatbot development for healthcare industries"
    ]
  },
  {
    title: "Data Scientist",
    description: "Dana Spicer CO.,LTD , Thailand | Oct 2017 – Aug 2021",
    details: [
      "Developed and maintained machine learning models for predictive maintenance in manufacturing environments. Cause to reduced cost of manpower in manufacturing process up to 400000 Bath per year",
      "Developed object detection model for detect detection in manufacturing process, the resul was increasing capability up to 9%",
      "Demand forecasting model of production volume. allowing the factory to reduce unnecessary costs."
    ]
  }
]

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-grow overflow-y-auto">
        <header className="w-full">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end py-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary mr-4">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
              <Linkedin size={24} />
            </a>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-10">
          <div className="w-48 h-48 relative mb-6">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Natdanai Intraraksa
          </h1>
          <h2 className="mt-2 text-xl font-semibold text-primary">
            AI Engineer and Data Scientist
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Data Scientist with 4 years of experience developing AI-driven solutions, specializing in integrating machine learning models into real-world challenges in manufacturing and healthcare. Proficient in TensorFlow, PyTorch, and advanced data mining techniques, with a proven ability to derive actionable insights from complex datasets . Passionate about Generative AI, leveraging innovative approaches to create cutting-edge solutions that push the boundaries of artificial intelligence applications
          </p>

          <div className="mt-10 w-full max-w-4xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">My Skillset</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'Next.js', 'Docker', 'Kubernetes', 'Langgraph', 'OpenAI API', 'Anthropic', 'No-code N8N'].map(skill => (
                <div key={skill} className="bg-background/50 border border-border/50 rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 w-full max-w-4xl text-.left">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Work Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workExperience.map((job, index) => (
                <WorkExperienceCard
                  key={index}
                  title={job.title}
                  description={job.description}
                  details={job.details}
                />
              ))}
            </div>
          </div>
        </main>

        <footer className="py-6 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Natdanai Intraraksa. All Rights Reserved.</p>
        </footer>
      </div>
      <div className="w-[400px] h-screen p-4">
        <Chat />
      </div>
    </div>
  )
}
