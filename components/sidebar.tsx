"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Home, Brain, Settings, Users, BarChart3, HelpCircle, LogOut, Menu, X } from "lucide-react"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-gray-200"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AI Hub</h1>
                <p className="text-xs text-gray-400">Multi-Agent Platform</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <SidebarLink href="/" icon={Home} text="Dashboard" active />
            <SidebarLink href="/agents" icon={Brain} text="All Agents" />
            <SidebarLink href="/analytics" icon={BarChart3} text="Analytics" />
            <SidebarLink href="/team" icon={Users} text="Team Access" />
            <SidebarLink href="/settings" icon={Settings} text="Settings" />
            <SidebarLink href="/help" icon={HelpCircle} text="Help & Support" />
          </nav>

          <div className="p-4 border-t border-gray-800">
            <button className="flex items-center w-full px-3 py-2 text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <LogOut className="w-5 h-5 mr-3" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleSidebar} />}
    </>
  )
}

interface SidebarLinkProps {
  href: string
  icon: React.ElementType
  text: string
  active?: boolean
}

function SidebarLink({ href, icon: Icon, text, active }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`
        flex items-center px-3 py-2 rounded-md transition-colors duration-200
        ${active ? "bg-purple-600/20 text-purple-400" : "text-gray-400 hover:bg-gray-800 hover:text-white"}
      `}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span>{text}</span>
    </Link>
  )
}
