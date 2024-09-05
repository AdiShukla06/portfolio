import React from 'react';

function Projects() {
  return (
    <div className="sm:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <a href="https://syncify-pink.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <p className="text-lg font-semibold text-green-500">
            09/2024 - Syncify <span className="text-xs font-normal text-red-500">best project</span>
          </p>
          <p className="text-sm text-gray-400 italic">#ProjectManagement #RealTimeChat #Dashboard</p>
        </a>
        <a href="https://blogme-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <p className="text-lg font-semibold text-green-500">08/2024 - BlogME</p>
          <p className="text-sm text-gray-400 italic">#BloggingPlatform #RichTextEditing</p>
        </a>
        <a href="https://onebox-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <p className="text-lg font-semibold text-green-500">08/2024 - Onebox</p>
          <p className="text-sm text-gray-400 italic">#MailHandling #APIManagement</p>
        </a>
        <a href="https://dice-game-using-react.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <p className="text-lg font-semibold text-green-500">02/2024 - Dicegame</p>
          <p className="text-sm text-gray-400 italic">#DiceGameUsingReact #Multiplayer</p>
        </a>
      </div>
    </div>
  );
}

export default Projects;
