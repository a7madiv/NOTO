# Noto - AI-Powered Healthcare Documentation Platform

![Noto Logo](https://img.shields.io/badge/Noto-Healthcare%20Documentation-emerald?style=for-the-badge)

## 🩺 Overview

Noto is a revolutionary AI-powered healthcare documentation platform designed specifically for the Jordanian healthcare market. Our system streamlines medical workflows, reduces administrative burdens, and enables healthcare professionals to focus more on patient care through advanced speech-to-text technology and intelligent form management.

## ✨ Features

### 🎤 Advanced Speech Recognition
- **Real-time transcription** with Arabic dialect support
- **Voice commands** for hands-free operation
- **Medical terminology** optimization
- **Multi-language support** (Arabic/English)

### 📋 Smart Medical Forms
- **Specialty-specific templates** for various medical fields
- **Digital signatures** with multiple input methods
- **Auto-completion** based on patient history
- **Seamless integration** with hospital management systems

### 🔒 Security & Compliance
- **HIPAA-compliant** data handling
- **End-to-end encryption** for patient data
- **Role-based access control**
- **Audit trails** for all medical records

### 📊 Analytics Dashboard
- **Patient visit trends** and analytics
- **Form usage statistics**
- **Performance metrics** for healthcare providers
- **Demographic insights**

## 🚀 Live Demo

Visit our live application: [https://funny-swan-d2447f.netlify.app](https://funny-swan-d2447f.netlify.app)

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

### Speech Recognition
- **Web Speech API** with Arabic support
- **Speechmatics API** integration
- **Real-time processing** capabilities

### Development Tools
- **Vite** for fast development
- **ESLint** for code quality
- **TypeScript** for type safety
- **PostCSS** with Autoprefixer

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/noto.git
   cd noto
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your API keys:
   ```env
   API_KEY=your_speechmatics_api_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── auth/            # Authentication components
│   ├── dashboard/       # Dashboard widgets
│   ├── forms/           # Medical form components
│   ├── loading/         # Loading screens
│   ├── navigation/      # Navigation components
│   └── signature/       # Digital signature tools
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── utils/               # Utility functions
└── styles/              # Global styles
```

## 🎯 Key Components

### Medical Forms Dashboard
- **8 specialty templates** including General Practice, Cardiology, Ophthalmology
- **Search and filtering** capabilities
- **Usage analytics** and form management

### Speech-to-Text Engine
- **Real-time transcription** with Arabic dialect support
- **Voice command recognition**
- **Medical terminology optimization**

### Digital Signature System
- **Draw, type, or upload** signature options
- **Secure storage** and verification
- **Integration** with medical forms

## 🌟 Team

Our diverse team combines medical expertise with technological innovation:

- **Ahmad Ibrahim** - Chief Technology Officer
- **Shatha Bitar** - Chief Medical Officer  
- **Wasan Alqasem** - Head of Research
- **Leen Shareef** - Product Director
- **Fairuz Jomaa** - Clinical Implementation Specialist

## 💰 Pricing Plans

### Silver Plan - $13,000/year
- 40 Users
- Speech-to-text functionality
- In-person training
- 6 months free maintenance

### Gold Plan - $14,000/year ⭐ Most Popular
- 60 Users
- Advanced statistics
- 1 year free maintenance
- Priority support

### Platinum Plan - $16,000/year
- 100 Users
- 24/7 Support
- Advanced analytics
- Premium features

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Environment Variables
Ensure these are set in your deployment environment:
- `API_KEY`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 🤝 Contributing

We welcome contributions to improve Noto! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain component modularity
- Write descriptive commit messages
- Ensure responsive design
- Test across different browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Website**: [https://noto-healthcare.com](https://noto-healthcare.com)
- **Email**: support@noto-healthcare.com
- **Documentation**: [https://docs.noto-healthcare.com](https://docs.noto-healthcare.com)

## 🙏 Acknowledgments

- **Speechmatics** for speech recognition technology
- **Supabase** for backend infrastructure
- **Tailwind CSS** for the design system
- **React community** for excellent tooling

---

**Built with ❤️ for healthcare professionals in Jordan and beyond.**

![Healthcare](https://img.shields.io/badge/Industry-Healthcare-blue)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3-blue)
