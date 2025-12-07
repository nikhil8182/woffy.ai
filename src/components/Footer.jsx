import React from 'react';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 md:py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold text-white mb-6">Woffy.ai</div>
            <p className="mb-6 leading-relaxed">Your AI pet companion that brings joy, comfort, and unconditional support to your digital life.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-rose transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-rose transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-rose transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-rose transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-brand-rose transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-brand-rose transition-colors">Features</a></li>
              <li><a href="#roadmap" className="hover:text-brand-rose transition-colors">Roadmap</a></li>
              <li><a href="#investors" className="hover:text-brand-rose transition-colors">For Investors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-rose transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-rose transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-brand-rose transition-colors">Support Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>hello@woffy.ai</li>
              <li>Coimbatore, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            &copy; 2025 Woffy.ai. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-slate-800 pt-8">
          <p className="text-sm flex items-center justify-center gap-1 text-slate-500">
            Made with <span className="text-brand-rose animate-pulse">♥</span> by
            <span className="font-bold text-slate-300 ml-1 tracking-tight">
              onwords
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

