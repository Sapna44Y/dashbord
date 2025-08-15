"use client"
import { FiArrowRight } from 'react-icons/fi'; 
import { useRouter } from 'next/navigation'; 



const OtherPage = () => {
    
   const router = useRouter();
   const navigateToDashboard = () => {
    router.push('/dashboard');
   };

  return (
    <div className="h-full flex-1 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-blue-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Coming <span className="text-blue-600">Soon</span>
        </h1>
        
        <p className="text-gray-600 mb-6">
          We're working on something awesome!
        </p>
        
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
            <div 
                className="bg-blue-600 h-2 rounded-full animate-pulse opacity-90" 
                style={{ width: '65%' }}
            ></div>
        </div>
        
        <div className="flex flex-wrap justify-center" onClick={navigateToDashboard}>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Go To Dashboard
            <FiArrowRight className="text-lg" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default OtherPage;

